import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
`;
export const Aside = styled.aside`
    flex: 1;
    display: flex;
    flex-direction: center;
    justify-content: center;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;

        > img{
            width: 180px;
            height: 100px;
        }

        strong{
            font: 400 2.5rem 'Poppins', sans-serif;
            margin-bottom: 6rem;
            margin-top: 1rem;
            width: 400px;
        }

        .img-background{
            width: 600px;
            height: 300px;
        }
    }

`;
export const Main = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font: 700 4rem 'Poppins', sans-serif;
        margin-bottom: 25px;
    }

    span{
        font: 400 2.2rem 'Poppins', sans-serif;

        a{
            color: var(--btn-color);
            font-weight: 700;
            text-decoration: none;

            &:hover{
                text-decoration: underline;
            }
        }
    }
`;