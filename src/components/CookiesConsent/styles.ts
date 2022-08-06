import styled from "styled-components";

export const ConsentBlock = styled.article`
  position: fixed;
  bottom: 0;
  left: 0;

  height: 56px;
  width: 100%;
  padding: 0.8rem 1.4rem;

  background: ${({ theme }) => theme.blue[12]};
  border: 2px 2px 0 2px red;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
`;

export const ConsentHeader = styled.header`
  > strong {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.white};
  }
`;

export const ConsentWrapper = styled.div`
  display: flex;
  align-items: center;

  column-gap: 0.8rem;

  > button {
    width: 80px;
    height: 32px;

    border: none;
    box-shadow: 4px 4px 0 2px #000;
    background-color: ${({ theme }) => theme.blue[10]};
    background-image: linear-gradient(
      310deg,
      ${({ theme }) => theme.blue[11]},
      ${({ theme }) => theme.blue[9]}
    );

    color: ${({ theme }) => theme.white};

    text-transform: uppercase;

    cursor: pointer;

    transition: box-shadow 100ms cubic-bezier(0.075, 0.82, 0.165, 1);
    font-weight: 600;

    &:hover {
      box-shadow: none;
      scale: 0.99;
    }
  }
`;
