import styled from 'styled-components';

export const Navbar = styled.div`
  /* position: fixed; */
  height: 10vh;
  background-color: ${({ theme }) => theme.bg};
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
  font-size: 36px;
  font-weight: 400;
  /* font-family: 'Courier New'; */
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.text};
  :hover {
    color: ${({ theme }) => theme.hoverText};
  }
  :active {
    color: #ffb7ce;
    text-decoration: underline;
  }
`;
