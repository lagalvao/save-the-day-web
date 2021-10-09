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

export default function AccessProfile() {
    const formRef = useRef<FormHandles>(null);
    const token = localStorage.getItem('@savetheday:token');
    const { addToast } = useToast();

    const handleSubmit = useCallback(() => {
        try {

        } catch (err) {

        }
    }, []);

    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
            <fieldset>
                <legend>Dados de acesso</legend>

                <Input type="email" label="Email" name="email" />
                <Input type="password" label="Senha" name="password" />

                <Button>Alterar</Button>

            </fieldset>
        </Form>
    );
}