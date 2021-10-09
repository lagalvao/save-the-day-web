import { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import backgroundImg from '../../assets/background.svg';

import { Container, Aside, Main } from './styles';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

interface SignUpFormData{
    name: string;
    email: string;
    password: string;
}

export default function SignUp() {
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();
    const { addToast } = useToast();

    const handleSubmit = useCallback(async (data: SignUpFormData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
                password: Yup.string().min(6, 'No mínimo 6 digítos'),
            });

            await schema.validate(data, {
                abortEarly: false
            });
            
            await api.post('/organizations', data);

            history.push('/');

            addToast({
                type: 'success',
                title: 'Cadastro realizado com sucesso',
                description: 'Você já pode efetuar o logon'
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
                description: 'Ocorreu um erro ao fazer cadastro, tente novamente'
            })
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
                <h1>Faça seu cadastro</h1>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input
                        label="Nome da ONG"
                        type="text"
                        name="name"
                        placeholder="Digite o nome da ONG"
                    />
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

                    <Button type="submit">Cadastrar</Button>
                    <span>Já possui conta? <Link to="/">Acesse aqui</Link></span>
                </Form>
            </Main>
        </Container>
    );
}