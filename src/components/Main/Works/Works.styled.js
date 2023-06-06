import styled from 'styled-components';
import { motion } from 'framer-motion';
import Tilt from 'react-vanilla-tilt';

export const Title = styled.h1`
  font-weight: 700;
  font-size: 44px;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;
export const ListItem = styled(motion.li)``;

export const StyleCard = styled(Tilt)`
  width: 300px !important;
  height: 500px !important;
  padding: 0 !important;
  overflow: hidden;

  color: ${({ theme }) => theme.text} !important;
  background: rgba(125, 125, 0, 0.1) !important;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5) !important;
  border-radius: 15px !important;
  border-top: 1px solid rgba(255, 255, 255, 0.5) !important;
  border-left: 1px solid rgba(255, 255, 255, 0.5) !important;
  backdrop-filter: blur(3px) !important;

  /* :hover {
    ::after {
      content: 'qqq';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 70%;
      height: 70%;
      border-radius: 10px;
      background-color: #e3e3e3;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
  } */
`;
export const ImageThumb = styled.div`
  height: 50%;
  overflow: hidden;
`;
export const CardImage = styled.img``;

export const CardContent = styled.div`
  height: 50%;
  padding: 5px;
`;
export const CardTitle = styled.h3``;
export const CardText = styled.p``;
export const CardLink = styled.a``;
