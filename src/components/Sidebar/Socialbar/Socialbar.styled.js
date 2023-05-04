import styled from 'styled-components';

export const Box = styled.div``;
export const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const ListItem = styled.li`
  border-radius: 50%;
  box-shadow: 0 0 0 3px ${({ theme }) => theme.sidebar.social.shadow};
  padding: 7px;
  color: ${({ theme }) => theme.sidebar.social.color};
  cursor: pointer;
  -webkit-transition: color 0.3s;
  -moz-transition: color 0.3s;
  transition: color 0.7s;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 0 10px 5px ${({ theme }) => theme.sidebar.social.shadow};
    color: ${({ theme }) => theme.sidebar.social.hoverColor};
    background-color: ${({ theme }) => theme.sidebar.social.bg};
  }
`;
export const Link = styled.a`
  color: inherit;
`;
