import styled from 'styled-components';

export const Main = styled.main`
  height: 90vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  flex: 1;
  border-radius: 10px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.main.textColor};
`;
