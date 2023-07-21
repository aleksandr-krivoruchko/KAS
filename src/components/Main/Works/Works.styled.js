import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  gap: 20px;
`;
export const ListItem = styled(motion.li)``;

export const StyleCard = styled(motion.div)`
  width: 300px !important;
  height: 400px !important;
  padding: 10px !important;
  overflow: hidden;
  color: ${({ theme }) => theme.text} !important;
  /* background: rgba(125, 125, 0, 0.1) !important;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5) !important; */
  background-image: url(${p => p.img}) !important;
  background-repeat: no-repeat !important;
  background-position: top !important;
  background-size: cover !important;
  border-radius: 15px !important;
  border-top: 1px solid rgba(255, 255, 255, 0.5) !important;
  border-left: 1px solid rgba(255, 255, 255, 0.5) !important;
  backdrop-filter: blur(3px) !important;

  :hover {
    ::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.7);
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
  }
`;

export const CardContent = styled(motion.div)`
  height: 300px;
  color: #fff;
  cursor: pointer;
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;
export const CardText = styled.p`
  font-style: italic;
  text-align: center;
  margin-bottom: 20px;
  margin-bottom: 10px;
`;
export const Links = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CardLink = styled.a`
  color: #44ddee;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  :hover {
    color: tomato;
    scale: 1.1;
  }
`;
