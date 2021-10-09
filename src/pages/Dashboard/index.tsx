import { useRef, useCallback, useState, ChangeEvent } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiCircle, FiEdit, FiXCircle } from 'react-icons/fi';
import ReactModal from 'react-modal';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

import pubImg from '../../assets/publicacao.png';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { useToast } from '../../hooks/toast';

interface PublicationFormData{
    id?: string;
    description: string;
    image: File;
}

export default function Dashboard() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const token = localStorage.getItem('@savetheday:token');
    const history = useHistory();
    const { addToast } = useToast();
    const [image, setImage] = useState<File>();

    const handleSubmit = useCallback(async (data: PublicationFormData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                description: Yup.string().required('Título obrigatório'),
                image: Yup.string().required('Imagem obrigatório'),
            });

            await schema.validate(data, {
                abortEarly: false
            });

            api.defaults.headers.authorization = `Bearer ${token}`;

            const formData = new FormData();

            formData.append('description', data.description);
            // formData.append('image', image);

            await api.post('/publications', formData);

            history.push('/dashboard');

            setIsOpenModal(false);

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
                description: 'Ocorreu um erro tentar adicionar publicação, tente novamente.',
            });
        }
    }, [history, token]);

    const handleOpenModal = useCallback(() => {
        setIsOpenModal(!isOpenModal);
    }, [isOpenModal]);

    const handleImageChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImage(event.target.files[0]);
        }
    }, []);

    return (
        <Container>
            <Navbar />
            <Content>
                <Header title="Atividades" btnText="Adicionar atividades" openModal={handleOpenModal} />
                <main>
                    <ul>
                        <li>
                            <header>
                                <strong>Título da publicação</strong>
                                <FiEdit size="25" />
                            </header>
                            <img src={pubImg} alt="Publicação" />
                        </li>
                        <li>
                            <header>
                                <strong>Título da publicação</strong>
                                <FiEdit size="25" />
                            </header>
                            <img src={pubImg} alt="Publicação" />
                        </li>
                        <li>
                            <header>
                                <strong>Título da publicação</strong>
                                <FiEdit size="25" />
                            </header>
                            <img src={pubImg} alt="Publicação" />
                        </li>
                        <li>
                            <header>
                                <strong>Título da publicação</strong>
                                <FiEdit size="25" />
                            </header>
                            <img src={pubImg} alt="Publicação" />
                        </li>
                    </ul>
                </main>

                <ReactModal
                    isOpen={isOpenModal}
                    style={{
                    }}
                >
                    <h2>Adicione uma atividade</h2>

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

                    <Form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
                        <Input name="description" label="Título da atividade" />
                        <Input type="file" name="image" label="Imagem da atividade" onChange={handleImageChange} />

                        <Button>Adicionar</Button>
                    </Form>

                </ReactModal>
            </Content>
        </Container>
    );
}