import styled from 'styled-components';

export const Box = styled.div`
  padding: 20px 0;
`;
export const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;
export const ListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  &:hover,
  &:active {
    color: ${({ theme }) => theme.hoverText};
  }
`;
export const Link = styled.a``;
