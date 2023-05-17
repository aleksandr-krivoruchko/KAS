import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 120px;
`;

const Glow = styled(motion.div)`
  background: linear-gradient(90deg, #ffa0ae 0%, #aacaef 75%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(15px);
  border-radius: 16px;
`;

const Card = styled(motion.div)`
  border-radius: 16px;
  margin-bottom: 0;
  overflow: hidden;
  position: relative;
  background: rgba(255, 255, 255, 0.65);
  padding: 36px 24px;
  height: 100%;
`;

const CardDiv = styled(motion.div)`
  color: #4a4a4c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const CardTest = () => {
  const cardVariants = {
    hover: {
      scale: 1.05,
    },
    initial: {
      scale: 1,
    },
  };

  const glowVariants = {
    hover: {
      opacity: 0.8,
    },
    initial: {
      scale: 1.05,
      opacity: 0,
    },
  };

  return (
    <Wrapper initial="initial" whileHover="hover">
      <Glow
        variants={glowVariants}
        transition={{
          ease: 'easeOut',
          delay: 0.15,
        }}
      />
      <Card
        variants={cardVariants}
        transition={{
          ease: 'easeOut',
          delay: 0.15,
          duration: 0.5,
        }}
      >
        <CardDiv>QQQ</CardDiv>
      </Card>
    </Wrapper>
  );
};
