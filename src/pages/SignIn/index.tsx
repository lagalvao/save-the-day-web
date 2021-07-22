import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import backgroundImg from '../../assets/background.svg';

import { Container, Aside, Main } from './styles';

export default function SignIn() {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
                password: Yup.string().required('Senha obrigatório'),
            });

            await schema.validate(data, {
                abortEarly: false
            });
        } catch (err) {
            const errors = getValidationErrors(err);

            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <Container>
            <Aside>
                <div>
                    <img src={logoImg} alt="Save the day" />
                    <strong>Cadastre sua ONG e divulgue
                        suas atividades.</strong>

                    <img src={backgroundImg} className="img-background" alt="Divulgue os seus serviços" />
                </div>
            </Aside>
            <Main>
                <h1>Faça seu login</h1>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Digite seu email"
                    />
                    <Input
                        label="Senha"
                        type="password"
                        name="password"
                        placeholder="Digite sua senha"
                    />

                    <Button type="submit">Logar</Button>
                    <span>Não possui conta? <Link to="/signup">Cadastre-se</Link></span>
                </Form>
            </Main>
        </Container>
    );
}