import styled from 'styled-components';

export const Header = styled.header`
  margin: 0 auto;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bg};
  padding: 10px 0;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const List = styled.ul`
  display: flex;
  gap: 30px;
`;
export const ListItem = styled.li``;

export const Link = styled.a`
  font-size: 28px;
  padding: 5px 0;
  color: ${({ theme }) => theme.text};
  text-shadow: none;
  position: relative;
  &::before {
    position: absolute;
    top: 6px;
    left: -2px;
    overflow: hidden;
    padding: 5px 0;
    max-width: 0;
    border-bottom: 2px solid ${({ theme }) => theme.hoverText};
    color: ${({ theme }) => theme.hoverText};
    content: attr(data-hover);
    -webkit-transition: max-width 0.5s;
    -moz-transition: max-width 0.5s;
    transition: max-width 0.5s;
  }
  &:hover,
  &:focus,
  &:active {
    &::before {
      max-width: 100%;
    }
  }
`;
