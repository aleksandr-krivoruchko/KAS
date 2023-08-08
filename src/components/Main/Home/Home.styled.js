import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  min-height: 90vh;
  padding: 50px;
`;

export const Title = styled(motion.h1)`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(
    to right,
    #09f1b8,
    #00a2ff,
    #ff00d2,
    #fed90f
  );
  color: ${({ theme }) => theme.hero.titleColor};
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 10px;
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: calc(1em / 7);
  margin-bottom: 50px;
  line-break: auto;
`;
export const Text = styled(motion.p)`
  font-size: 26px;
  font-weight: normal;
  letter-spacing: 0.2rem;
  text-align: center;
  color: ${({ theme }) => theme.main.textColor};
  margin-bottom: 50px;
  line-height: 2.3rem;
  font-style: italic;
`;
