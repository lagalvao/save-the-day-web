import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1;

  main{
    width: 89%;
    margin: 60px auto;

    ul{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
      list-style: none;

      li{
        background: var(--input-color);
        border: 1px solid #ccc;
        margin-bottom: 80px;

        header{
          display: flex;
          justify-content: space-between;
          padding: 25px;
        }

        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
