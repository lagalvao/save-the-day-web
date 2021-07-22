import { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiEdit } from 'react-icons/fi';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

import pubImg from '../../assets/publicacao.png';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Dashboard() {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(() => {
        try {

        } catch (err) {

        }
    }, []);

    return (
        <Container>
            <Navbar />
            <Content>
                <Header title="Atividades" btnText="Adicionar atividades" />
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
            </Content>
        </Container>
    );
}