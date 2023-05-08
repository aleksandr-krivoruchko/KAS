import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: aqua;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const Title = styled(motion.h1)`
  font-weight: 700;
  font-size: 44px;
  color: red;
`;

export const Text = styled.p`
  font-size: 22px;
  color: yellow;
`;
