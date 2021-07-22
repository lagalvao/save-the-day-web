import styled from 'styled-components';

export const Container = styled.div`
    width: 5%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: var(--background-navbar);
    box-shadow: 2px 2px 2px #eee;
        h1{
            width: 100%;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--input-color);
            background: var(--btn-color);
            text-align: center;
        }

    ul{
        display: flex;
        flex-direction: column;
        list-style: none;

        li{
            margin-bottom: 60px;

            a{
                svg{
                    color: var(--input-text-color);
                    &:hover{
                        color: var(--btn-color);
                    }
                }
            }
        }
    }
`;