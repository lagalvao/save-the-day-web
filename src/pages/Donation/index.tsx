import { useState, useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import { Form } from '@unform/web';
import { FiChevronRight, FiXCircle } from 'react-icons/fi';
import * as Yup from 'yup';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';


import { Container, Content, Card } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

export default function Donation() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                bank: Yup.string().required('Banco obrigatório'),
                agency: Yup.string().required('Agência obrigatório'),
                account: Yup.string().required('Conta obrigatório'),
            });

            await schema.validate(data, {
                abortEarly: false
            });
        } catch (err) {
            const errors = getValidationErrors(err);

            formRef.current?.setErrors(errors);
        }
    }, []);

    const handleOpenModal = useCallback(() => {
        setIsOpenModal(!isOpenModal);
    }, [isOpenModal]);

    return (
        <Container>
            <Navbar />
            <Content>
                <Header title="Contas" btnText="Adicionar contas" openModal={handleOpenModal} />
                <main>
                    <h2>Escolha contas para receber as doações</h2>
                    <Card>
                        <div>
                            <span>Banco</span>
                            <strong>Bradesco</strong>
                        </div>
                        <div>
                            <span>Agência</span>
                            <strong>2345</strong>
                        </div>
                        <div>
                            <span>Conta</span>
                            <strong>5687/6</strong>
                        </div>
                        <div>
                            <span>Operação</span>
                            <strong>000</strong>
                        </div>
                        <Link to="/edit"><FiChevronRight size="30" /></Link>
                    </Card>
                    <Card>
                        <div>
                            <span>Banco</span>
                            <strong>Bradesco</strong>
                        </div>
                        <div>
                            <span>Agência</span>
                            <strong>2345</strong>
                        </div>
                        <div>
                            <span>Conta</span>
                            <strong>5687/6</strong>
                        </div>
                        <div>
                            <span>Operação</span>
                            <strong>000</strong>
                        </div>
                        <Link to="/edit"><FiChevronRight size="30" /></Link>
                    </Card>
                </main>

                <ReactModal
                    isOpen={isOpenModal}
                    style={{
                    }}
                >
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

                </ReactModal>
            </Content>
        </Container>
    );
}