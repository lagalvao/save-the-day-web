import React, { useRef, useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

export default function LocalizationProfile() {
    const formRef = useRef<FormHandles>(null);
    const token = localStorage.getItem('@savetheday:token');
    const { addToast } = useToast();

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                cep: Yup.string().required('CEP obrigatório'),
                address: Yup.string().required('Endereço obrigatório'),
                number: Yup.string().required('Número obrigatório'),
                district: Yup.string().required('Bairro obrigatório'),
                complement: Yup.string().optional(),
                uf: Yup.string().required('Estado obrigatório'),
                city: Yup.string().required('Cidade obrigatório'),
            });

            await schema.validate(data, {
                abortEarly: false
            });

            api.defaults.headers.authorization = `Bearer ${token}`;

            await api.put('/addresses', data);

            addToast({
                type: 'success',
                title: 'Dados alterados com sucesso',
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
                description: 'Ocorreu um erro tentar alterar informações, tente novamente.',
            });
        }
    }, []);

    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
            <fieldset>
                <legend>Dados do endereço</legend>

                <Input label="CEP" name="cep" />
                <Input label="Endereço" name="address" />
                <Input label="Numero" name="number" />
                <Input label="Bairro" name="district" />
                <Input label="Complemento" name="complement" />
                <Input label="Uf" name="uf" />
                <Input label="Cidade" name="city" />

                <Button>Alterar</Button>

            </fieldset>
        </Form>
    );
}