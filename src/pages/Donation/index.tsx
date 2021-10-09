import { useState, useRef, useCallback, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiChevronRight, FiXCircle } from 'react-icons/fi';
import * as Yup from 'yup';
import ReactModal from 'react-modal';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';


import { Container, Content, Card } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

interface DonationFormData{
    id?: string;
    bank: string;
    agency: string;
    account: string;
    operation?: string;
}

export default function Donation() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();
    const [donations, setDonations] = useState<DonationFormData[]>([]);
    const token = localStorage.getItem('@savetheday:token');
    const { addToast } = useToast();

    const handleSubmit = useCallback(async (data: DonationFormData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                bank: Yup.string().required('Banco obrigatório'),
                agency: Yup.string().required('Agência obrigatório'),
                account: Yup.string().required('Conta obrigatório'),
                operation: Yup.string().optional(),
            });

            await schema.validate(data, {
                abortEarly: false
            });

            api.defaults.headers.authorization = `Bearer ${token}`;

            await api.post('/donations', data);

            setIsOpenModal(false);

            setDonations([...donations, data]);

            addToast({
                type: 'success',
                title: 'Cadastro realizado com sucesso',
            });

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);

                return;
            }

            addToast({
                type: 'error',
                title: 'Erro no cadastro',
                description: 'Ocorreu um erro tentar adicionar conta, tente novamente.',
            });
        }
    }, [history, token]);

    const handleOpenModal = useCallback(() => {
        setIsOpenModal(!isOpenModal);
    }, [isOpenModal]);

    useEffect(() => {
        api.defaults.headers.authorization = `Bearer ${token}`;

        api.get('donations').then((response) => {
            setDonations(response.data);
        });
    }, []);

    return (
        <Container>
            <Navbar />
            <Content>
                <Header title="Contas" btnText="Adicionar contas" openModal={handleOpenModal} />
                <main>
                    <h2>Escolha contas para receber as doações</h2>
                    
                    {donations.map((donation) => (
                            <Card key={donation.id}>
                                <div>
                                    <span>Banco</span>
                                <strong>{donation.bank}</strong>
                                </div>
                                <div>
                                    <span>Agência</span>
                                    <strong>{donation.agency}</strong>
                                </div>
                                <div>
                                    <span>Conta</span>
                                    <strong>{donation.account}</strong>
                                </div>
                                <div>
                                    <span>Operação</span>
                                <strong>{donation.operation}</strong>
                                </div>
                            <Link to="/edit"><FiChevronRight size="30" /></Link>
                            </Card>
                        ))}
                </main>

                    <ReactModal
                    isOpen={isOpenModal}
                    style={{
                    }}
                >
                        <div>
                            <h2>Adicione uma conta</h2>

                            <button
                                style={{
                                    border: 'none',
                                    background: 'transparent',
                                    float: 'right',
                                    marginTop: '-40px',
                                    cursor: 'pointer'
                                }}
                                onClick={handleOpenModal}
                            ><FiXCircle size={30} color="#C83E4D" /></button>

                            <Form ref={formRef} onSubmit={handleSubmit}>
                                <Input name="bank" label="Banco" />
                                <Input name="agency" label="Agência bancária" />
                                <Input name="account" label="Conta bancária" />
                                <Input name="operation" label="Operação bancária" />

                                <Button>Adicionar</Button>
                            </Form>

                            
                        </div>
                    </ReactModal>
            </Content>
        </Container>
    );
}