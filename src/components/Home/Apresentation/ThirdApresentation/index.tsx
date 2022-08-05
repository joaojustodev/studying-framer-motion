import { motion, Variants } from "framer-motion";

import { ApresentationThreeBlock } from "./styles";

const ApresentationThree = () => {
  const apresentationThreeVariant: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const apresentationThreeItemVariant = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 40,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };

  return (
    <ApresentationThreeBlock>
      <motion.div
        variants={apresentationThreeVariant}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, margin: "-300px" }}
      >
        <motion.h2 variants={apresentationThreeItemVariant}>
          Apresentation 3
        </motion.h2>
        <motion.p variants={apresentationThreeItemVariant}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          sapiente quo cum, fugit magni ratione, perferendis voluptas.
        </motion.p>
      </motion.div>
    </ApresentationThreeBlock>
  );
};

export default ApresentationThree;
