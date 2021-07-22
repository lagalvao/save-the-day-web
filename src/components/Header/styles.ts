import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 120px;
    align-items: center;
    background: var(--input-color);

    h1{
        font: 700 2.5rem 'Poppins', sans-serif;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 60px;
        background: var(--input-color);
        color: var(--btn-color);
        font: 700 2rem 'Ubuntu', sans-serif;
        border: 0;
        border-radius: 10px;
        cursor: pointer;
        transition: filter 0.2s;

        svg{
            margin-left: 50px;
        }
    }
`;