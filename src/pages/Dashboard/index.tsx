import { useRef, useCallback, useState } from 'react';
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

export default function Dashboard() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                title: Yup.string().required('Título obrigatório'),
                image: Yup.string().required('Imagem obrigatório'),
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

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Input name="title" label="Título da atividade" />
                        <Input type="file" name="image" label="Imagem da atividade" />

                        <Button>Adicionar</Button>
                    </Form>

                </ReactModal>
            </Content>
        </Container>
    );
}