import styled from 'styled-components';
import { Section } from '../../GlobalStyle';
import { motion } from 'framer-motion';
import { Flex } from '../../GlobalStyle';
import Tilt from 'react-vanilla-tilt';

export const StyledSection = styled(Section)`
  border-radius: 10px;
  border: 1px solid red;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 44px;
  color: ${({ theme }) => theme.text};
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
export const ListItem = styled.li``;

export const StyleCard = styled(Tilt)`
  width: 300px !important;
  height: 400px !important;
  color: ${({ theme }) => theme.text} !important;
  background: rgba(0, 0, 0, 0.1) !important;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5) !important;
  border-radius: 15px !important;
  border-top: 1px solid rgba(255, 255, 255, 0.5) !important;
  border-left: 1px solid rgba(255, 255, 255, 0.5) !important;
  backdrop-filter: blur(3px) !important;
  cursor: pointer;
`;
export const CardContent = styled.div`
  padding: 10px;
  text-align: center;
`;
export const CardTitle = styled.h3``;
export const CardText = styled.p``;
export const CardImage = styled.img`
  display: block;
`;
