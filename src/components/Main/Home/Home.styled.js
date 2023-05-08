import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: azure;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const Title = styled(motion.h1)`
  font-weight: 700;
  font-size: 44px;
  color: red;
`;

export const Text = styled(motion.p)`
  font-size: 22px;
  color: green;
`;
