import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  min-height: 90vh;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const Title = styled(motion.h1)`
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bold;
  text-shadow: ${p => p.theme.sidebar.textShadow};
  text-align: center;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.sidebar.titleColor};
  text-shadow: 0 0 5px #fff, 0 0 10px #fff;
`;

export const Subtitle = styled(motion.h3)`
  font-size: 26px;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  color: tomato;
  margin-bottom: 50px;
`;
export const Text = styled(motion.p)`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.text};
  margin-bottom: 50px;
`;
