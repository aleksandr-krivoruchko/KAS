import styled from 'styled-components';

export const Navbar = styled.div`
  height: 10vh;
  background-color: #000033;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const List = styled.ul`
  display: flex;
  gap: 30px;
`;
export const ListItem = styled.li`
  padding: 5px;
`;

export const Link = styled.a`
  color: #44ddee;
  :hover {
    color: #ffb7ce;
    text-decoration: underline;
  }
  :active {
    color: #ffb7ce;
  }
`;
