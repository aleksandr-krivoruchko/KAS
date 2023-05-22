import styled from 'styled-components';
import { Section } from '../../GlobalStyle';
import { motion } from 'framer-motion';
import { Flex } from '../../GlobalStyle';
import Tilt from 'react-vanilla-tilt';

// export const StyledSection = styled(motion.Section)`
//   border-radius: 10px;
// `;

export const StyledSection = styled(motion.section)`
  min-height: 100%;
  border-radius: 10px;
  padding: ${p => p.padding || '20px'};
`;

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
`;
export const ListItem = styled(motion.li)``;

export const StyleCard = styled(Tilt)`
  /* width: 300px !important;
  height: 400px !important; */
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
export const CardContent = styled.div`
  padding: 10px;
  text-align: center;
`;
export const CardTitle = styled.h3``;
export const CardText = styled.p``;
export const ImageThumb = styled.div`
  width: 200px;
  height: 150px;
  overflow: hidden;
`;
export const CardImage = styled.img`
  object-fit: cover;
  object-position: center;
`;

export const LinksWrapper = styled.div``;

export const CardLink = styled.a``;
