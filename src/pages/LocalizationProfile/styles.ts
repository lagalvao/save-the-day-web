import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1;

  main{
    width: 87%;
    margin: 60px auto;

    header{
      display: flex;
      justify-content: space-between;
      align-items: center;

      button{
        width: 100%;
        height: 50px;
        background: var(--btn-color);
        color: var(--input-color);
        border: 0;
        cursor: pointer;

        &:focus{
          background: #27ba67;
        }
      }
    }

    form {
      fieldset{
        border: none;

        legend{
          font: 400 2.5rem 'Poppins', sans-serif;
          padding: 40px 0;
        }
      }
    }
  }
`;
