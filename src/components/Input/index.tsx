import { InputHTMLAttributes, useEffect, useRef } from "react";
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

export default function Input({ name, label, ...rest }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <Container isErrored={!!error}>
            <label htmlFor="">{label}</label>
            <input
                defaultValue={defaultValue}
                ref={inputRef}
                {...rest}
            />

            {error && (
                <Error>
                    {error}
                </Error>
            )}

        </Container>
    );
}