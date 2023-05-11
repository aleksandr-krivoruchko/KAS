import styled from 'styled-components';
import { Section } from '../../GlobalStyle';
import { motion } from 'framer-motion';
import { Flex } from '../../GlobalStyle';

export const StyledSection = styled(Section)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 44px;
  color: purple;
`;

export const List = styled.ul``;
export const ListItem = styled.li``;

export const StyleCard = styled(motion.div)`
  position: relative;
  width: 200px;
  /* flex: 0 1 25%; */
  margin: 30px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  /* backdrop-filter: blur(5px);
  transform-style: preserve-3d;
  transform: perspective(800px); */
`;

export const CardTitle = styled.h3``;
export const CardText = styled.p``;
export const CardImage = styled.img`
  display: block;
`;
