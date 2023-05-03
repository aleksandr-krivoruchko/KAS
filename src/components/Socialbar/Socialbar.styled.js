import styled from 'styled-components';
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';

export const Box = styled.div`
  padding: 30px 0;
`;
export const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const ListItem = styled.li`
  border-radius: 50%;
  box-shadow: 0 0 0 3px ${({ theme }) => theme.social.shadow};
  padding: 7px;
  color: ${({ theme }) => theme.social.color};
  cursor: pointer;
  -webkit-transition: color 0.3s;
  -moz-transition: color 0.3s;
  transition: color 0.7s;
  &:hover,
  &:active {
    box-shadow: 0 0 10px 5px ${({ theme }) => theme.social.shadow};
    color: ${({ theme }) => theme.social.hoverColor};
    background-color: ${({ theme }) => theme.social.bg};
  }
`;
export const Link = styled.a`
  color: inherit;
`;
