import getValidationErrors from '../../utils/getValidationErrors';
import { FiChevronRight, FiXCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState, useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import ReactModal from 'react-modal';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Card } from './styles';

export default function Schedule() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                event: Yup.string().required('Banco obrigatório'),
                date_event: Yup.string().required('Agência obrigatório'),
                local: Yup.string().required('Conta obrigatório'),
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
                <Header title="Eventos" btnText="Adicionar eventos" openModal={handleOpenModal} />
                <main>

                    <Card>
                        <div>
                            <span>Evento</span>
                            <strong>Festa do milho</strong>
                        </div>
                        <div>
                            <span>Data do evento</span>
                            <strong>21/05/2021</strong>
                        </div>
                        <div>
                            <span>Local</span>
                            <strong>Praça da matriz</strong>
                        </div>
                        <Link to="/edit"><FiChevronRight size="30" /></Link>
                    </Card>
                </main>

                <ReactModal
                    isOpen={isOpenModal}
                    style={{
                    }}
                >
                    <h2>Adicione um evento</h2>

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
                        <Input name="event" label="Nome do evento" />
                        <Input type="date" name="date_event" label="Data do evento" />
                        <Input name="local" label="Local do evento" />

                        <Button>Adicionar</Button>
                    </Form>

                </ReactModal>
            </Content>
        </Container>
    );
}