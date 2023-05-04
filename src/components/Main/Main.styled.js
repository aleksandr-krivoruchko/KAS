import styled from 'styled-components';

export const Main = styled.main`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 11px 12px 20px 5px rgba(0, 0, 0, 0.47);
  box-shadow: 11px 12px 20px 5px rgba(0, 0, 0, 0.47);
  background-color: ${({ theme }) => theme.sidebar.bg};
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.main.textColor};
`;
