import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      width: 600px;

      > h1 {
        font-size: calc(36px + (72 - 36) * ((100vw - 600px) / (1920 - 600)));
        margin-bottom: 28px;
      }

      > p {
        margin-bottom: 14px;
      }
    }
  }
`;
