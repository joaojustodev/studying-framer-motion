import { motion, Variants } from "framer-motion";

import { ApresentationTwoBlock } from "./styles";

const ApresentationTwo = () => {
  const apresentationTwoVariant: Variants = {
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

  const apresentationTwoItemVariant = {
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
    <ApresentationTwoBlock>
      <motion.div
        variants={apresentationTwoVariant}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, margin: "-300px" }}
      >
        <motion.h2 variants={apresentationTwoItemVariant}>
          Apresentation 2
        </motion.h2>
        <motion.p variants={apresentationTwoItemVariant}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          sapiente quo cum, fugit magni ratione, perferendis voluptas.
        </motion.p>
      </motion.div>
    </ApresentationTwoBlock>
  );
};

export default ApresentationTwo;
