import styled from "styled-components";
import { motion } from "framer-motion";

export const BoxWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  transition: transform 100ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translate3d(0, 0, 0);
  will-change: transform;

  @media screen and (max-width: 997.5px) {
    display: none;
  }
`;

export const Box = styled(motion.div)`
  position: sticky;
  top: 2.5rem;

  width: 420px;
  height: 420px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  transition: transform 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  will-change: transform;

  background: blueviolet;
  border-radius: 8px;
  box-shadow: 1px 1px 4px 1.22px rgba(0, 0, 0, 0.88);

  > div {
    position: absolute;
    transition: transform 100ms linear;
    will-change: transform;
  }
`;
