import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%auto;
  height: 100vh;

`;

export const Content = styled.div`
  flex: 1;

  main{
    width: 87%;
    margin: 0 auto;

    h2{
      font: 400 3rem 'Poppins', sans-serif;
      margin-top: 40px;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  background: var(--input-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-top: 40px;

  div{
    display: flex;
    flex-direction: column;
  }

  div:first-child{
    display: flex;
    flex-direction: row;

    div{
      margin-left: 20px;
    }
  }

  svg{
    color: var(--input-text-color);
  }
`;
