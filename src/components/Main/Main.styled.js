import styled from 'styled-components';

export const Main = styled.main`
  width: 68%;
  height: 100vh;
  -webkit-box-shadow: 11px 12px 20px 5px rgba(0, 0, 0, 0.47);
  box-shadow: 11px 12px 20px 5px rgba(0, 0, 0, 0.47);
  background-color: ${({ theme }) => theme.sidebar.bg};
`;
