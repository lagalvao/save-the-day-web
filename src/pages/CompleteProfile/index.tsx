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

export default function CompleteProfile() {
    const formRef = useRef<FormHandles>(null);
    const token = localStorage.getItem('@savetheday:token');
    const { addToast } = useToast();

    const handleSubmit = useCallback(() => {
        try {

        } catch (err) {

        }
    }, []);

    return (
        <Form ref={formRef} onSubmit={handleSubmit} >
            <fieldset>
                <legend>Dados da ONG</legend>

                <Input label="Razão Social" name="name" />
                <Input label="CNPJ" name="cnpj" />
                <Input label="Propósito ou finalidade" name="purpose" />
                <Input label="Início das atividades" name="activities" />
                <Input label="Telefone" name="telephone" />
                <Input label="Website" name="website" />
                <Input label="Dia da semana" name="date_of_week" />
                <Input label="Horários da semana" name="schedules" />

                <Button>Alterar</Button>
                

            </fieldset>
        </Form>
    );
}