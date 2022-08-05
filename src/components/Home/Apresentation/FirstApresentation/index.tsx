import { motion, Variants } from "framer-motion";

import { ApresentationOneBlock } from "./styles";

const ApresentationOne = () => {
  const apresentationOneVariant: Variants = {
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

  const apresentationOneItemVariant = {
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
    <ApresentationOneBlock>
      <motion.div
        variants={apresentationOneVariant}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, margin: "-300px" }}
      >
        <motion.h2 variants={apresentationOneItemVariant}>
          Apresentation 1
        </motion.h2>
        <motion.p variants={apresentationOneItemVariant}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          sapiente quo cum, fugit magni ratione, perferendis voluptas.
        </motion.p>
      </motion.div>
    </ApresentationOneBlock>
  );
};

export default ApresentationOne;
