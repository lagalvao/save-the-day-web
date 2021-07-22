import { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Profile() {
    const formRef = useRef<FormHandles>(null);
    const formRefAcess = useRef<FormHandles>(null);
    const formRefTeam = useRef<FormHandles>(null);

    const handleSubmit = useCallback(() => {
        try {

        } catch (err) {

        }
    }, []);

    const handleSubmitAccess = useCallback(() => {
        try {

        } catch (err) {

        }
    }, []);

    const handleSubmitTeam = useCallback(() => {
        try {

        } catch (err) {

        }
    }, []);

    return (
        <Container>
            <Navbar />
            <Content>
                <Header title="Perfil" />
                <main>
                    <header>
                        <button>Dados</button>
                        <button>Acesso</button>
                        <button>Equipe</button>
                    </header>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Dados da ONG</legend>

                            <Input label="Razão Social" name="name" />
                            <Input label="CNPJ" name="cnpj" />
                            <Input label="Propósito ou finalidade" name="finalidade" />
                            <Input label="Início das atividades" name="activities" />
                            <Input label="Link do site" name="site" />

                            <Button>Alterar</Button>

                        </fieldset>
                    </Form>
                    <Form ref={formRefAcess} onSubmit={handleSubmitAccess}>
                        <fieldset>
                            <legend>Dados de acesso</legend>

                            <Input label="Razão Social" name="name" />
                            <Input label="CNPJ" name="cnpj" />
                            <Input label="Propósito ou finalidade" name="finalidade" />
                            <Input label="Início das atividades" name="activities" />
                            <Input label="Link do site" name="site" />

                            <Button>Alterar</Button>

                        </fieldset>
                    </Form>
                    <Form ref={formRefTeam} onSubmit={handleSubmitTeam}>
                        <fieldset>
                            <legend>Equipe</legend>

                            <Input label="Razão Social" name="name" />
                            <Input label="CNPJ" name="cnpj" />
                            <Input label="Propósito ou finalidade" name="finalidade" />
                            <Input label="Início das atividades" name="activities" />
                            <Input label="Link do site" name="site" />

                            <Button>Alterar</Button>

                        </fieldset>
                    </Form>
                </main>
            </Content>
        </Container>
    );
}