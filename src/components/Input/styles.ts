import styled, { css } from 'styled-components';

interface ContainerProps {
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;

    label{
        font: 400 2rem 'Ubuntu', sans-serif;
        color: var(--label-color);
        margin-bottom: 12px;
    }

    input{
        width: 100%;
        height: 60;
        padding: 19px 23px;
        font: 400 2.2rem 'Ubuntu', sans-serif;
        color: var(input-text-color);
        border-radius: 10px;
        border: 2px solid #f2f2f2;

        ${(props) => props.isErrored && css`
            border-color: var(--error-color);
        `}

        
    }
`;

export const Error = styled.div`
    width: 100%;
    background: var(--error-color);
    color: var(--input-color);
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    font: 400 1.5rem 'Ubuntu', sans-serif;
`;