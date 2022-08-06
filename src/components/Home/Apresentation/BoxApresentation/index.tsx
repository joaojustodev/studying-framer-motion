import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { BoxWrapper, Box } from "./styles";
import useMediaQuery from "../../../../hooks/useMediaQuery";

const BoxApresentation = () => {
  const boxWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: boxWrapperRef,
    offset: ["start", "end"],
  });
  const isTablet = useMediaQuery(
    "(min-width: 997.50px) and (max-width: 1180px)"
  );

  const boxOutputRange = isTablet ? [440, 40, 40, 440] : [740, 40, 40, 740];
  const x = useTransform(
    scrollYProgress,
    [0.155, 0.275, 0.701, 0.882],
    boxOutputRange
  );
  const skew = useTransform(
    scrollYProgress,
    [0.155, 0.275, 0.701, 0.882],
    [-5, 5, 5, -5]
  );
  const scale = useTransform(
    scrollYProgress,
    [0.155, 0.165, 0.275, 0.701, 0.801, 0.882],
    [1, 0.6, 1, 1, 0.6, 1]
  );

  const image1Scale = useTransform(scrollYProgress, [0.165, 0.275], [1, 0]);
  const image2Scale = useTransform(
    scrollYProgress,
    [0.275, 0.285, 0.801, 0.882],
    [0, 1, 1, 0]
  );
  const image3Scale = useTransform(scrollYProgress, [0.882, 0.892], [0, 1]);

  return (
    <BoxWrapper
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-300px" }}
      ref={boxWrapperRef}
    >
      <Box style={{ x, skew, scale }}>
        <motion.div style={{ scale: image1Scale }}>
          <Image
            alt="Devlopment"
            src="/assets/development.svg"
            width={300}
            height={300}
          />
        </motion.div>

        <motion.div style={{ scale: image2Scale }}>
          <Image
            alt="Web Devlopment"
            src="/assets/web_development.svg"
            width={300}
            height={300}
          />
        </motion.div>

        <motion.div style={{ scale: image3Scale }}>
          <Image
            alt="Mobile Devlopment"
            src="/assets/mobile_development.svg"
            width={300}
            height={300}
          />
        </motion.div>
      </Box>
    </BoxWrapper>
  );
};

export default BoxApresentation;
