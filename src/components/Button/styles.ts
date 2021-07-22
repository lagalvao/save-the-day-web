import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 60px;
    background: var(--btn-color);
    color: var(--input-color);
    text-transform: uppercase;
    font: 700 2rem 'Ubuntu', sans-serif;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    transition: filter 0.2s;
    margin-bottom: 35px;

    &:hover{
        filter: brightness(0.9);
    }
`;