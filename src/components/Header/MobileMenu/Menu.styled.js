import styled from 'styled-components';

export const StyledMenuButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${p => p.theme.text};
  margin: auto;
  @media screen and (${p => p.theme.media.tablet}) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: block;
  @media screen and (${p => p.theme.media.tablet}) {
    display: none;
  }
`;

export const Navbar = styled.div`
  width: 30%;
  position: fixed;
  top: 55px;
  left: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px;
  @media screen and (${p => p.theme.media.tablet}) {
    display: none;
  }
`;

export const Link = styled.a`
  font-size: 20px;
  padding: 5px 0;
  color: ${({ theme }) => theme.text};
  text-shadow: none;
  position: relative;

  &.active &::before {
    max-width: 100%;
    -webkit-transition: max-width 0.5s;
    -moz-transition: max-width 0.5s;
    transition: max-width 0.5s;
  }

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
export const List = styled.ul``;
export const ListItem = styled.li`
  margin-bottom: 30px;
`;
export const BlurBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(3px);
`;
