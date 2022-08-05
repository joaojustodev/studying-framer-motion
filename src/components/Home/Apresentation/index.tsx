import styled from "styled-components";
import FirstApresentation from "./FirstApresentation";
import SecondApresentation from "./SecondApresentation";
import ThirdApresentation from "./ThirdApresentation";
import { useRef } from "react";
import BoxApresentation from "./BoxApresentation";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;

  position: relative;
`;

const ApresentationBlock = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Apresentation = () => {
  const apresentationRef = useRef<HTMLElement>(null);

  return (
    <ApresentationBlock ref={apresentationRef}>
      <Container>
        <FirstApresentation />
        <SecondApresentation />
        <ThirdApresentation />
        <BoxApresentation />
      </Container>
    </ApresentationBlock>
  );
};

export default Apresentation;
