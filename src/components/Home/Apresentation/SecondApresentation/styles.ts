import styled from "styled-components";
import { motion } from "framer-motion";

export const ApresentationTwoBlock = styled(motion.div)`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr 1fr);

  column-gap: 32px;

  > div:nth-child(1) {
    width: 428px;
    padding: 200px 45px;
    text-align: right;
    grid-column: reverse;

    > h2 {
      margin-bottom: 28px;
    }
  }
`;
