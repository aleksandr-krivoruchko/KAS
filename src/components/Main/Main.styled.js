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
  box-shadow: 11px 12px 20px 5px rgba(0, 0, 0, 0.47);
  background-color: transparent;
  border-radius: 10px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.main.textColor};
`;
