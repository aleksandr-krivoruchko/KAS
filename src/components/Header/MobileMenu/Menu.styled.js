import styled from 'styled-components';

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${p => p.theme.text};
  margin: auto;
  @media screen and (${p => p.theme.media.tablet}) {
    display: none;
  }
`;
