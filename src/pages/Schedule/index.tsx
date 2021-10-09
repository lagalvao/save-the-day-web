import getValidationErrors from '../../utils/getValidationErrors';
import { FiChevronRight, FiXCircle } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
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
import api from '../../services/api';
import { useEffect } from 'react';
import { useToast } from '../../hooks/toast';

interface EventFormData{
    id?: string;
    title: string;
    date: string;
    locale: string;
}

export default function Schedule() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();
    const token = localStorage.getItem('@savetheday:token');
    const [events, setEvents] = useState<EventFormData[]>([]);
    const { addToast } = useToast();

    const handleSubmit = useCallback(async (data: EventFormData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                title: Yup.string().required('Nome do evento obrigatório'),
                date: Yup.string().required('Data do evento obrigatório'),
                locale: Yup.string().required('Local do evento obrigatório'),
            });

            await schema.validate(data, {
                abortEarly: false
            });

            api.defaults.headers.authorization = `Bearer ${token}`;

            await api.post('/events', data);

            setIsOpenModal(false);

            setEvents([...events, data]);

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
                description: 'Ocorreu um erro tentar adicionar evento, tente novamente.',
            });
        }
    }, [history, token]);

    const handleOpenModal = useCallback(() => {
        setIsOpenModal(!isOpenModal);
    }, [isOpenModal]);

    useEffect(() => {
        api.defaults.headers.authorization = `Bearer ${token}`;

        api.get('events').then((response) => {
            setEvents(response.data);
        });
     }, [token]);

    return (
        <Container>
            <Navbar />
            <Content>
                <Header title="Eventos" btnText="Adicionar eventos" openModal={handleOpenModal} />
                <main>

                    {events.map((event) => (
                        <Card key={event.id}>
                            <div>
                                <span>Evento</span>
                                <strong>{ event.title}</strong>
                            </div>
                            <div>
                                <span>Data do evento</span>
                                <strong>{ event.date }</strong>
                            </div>
                            <div>
                                <span>Local</span>
                                <strong>{ event.locale }</strong>
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
                        <Input name="title" label="Nome do evento" />
                        <Input type="date" name="date" label="Data do evento" />
                        <Input name="locale" label="Local do evento" />

                        <Button>Adicionar</Button>
                    </Form>

                </ReactModal>
            </Content>
        </Container>
    );
}