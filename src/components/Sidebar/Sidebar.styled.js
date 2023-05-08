import styled from 'styled-components';

export const Aside = styled.aside`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  position: sticky;
  top: 88px;
  flex: 0 0 350px;
  height: 100%;
  padding: 20px;
  margin-right: 30px;
  border-radius: 10px;
  -webkit-box-shadow: 11px 12px 20px 5px rgba(0, 0, 0, 0.47);
  box-shadow: 11px 12px 20px 5px rgba(0, 0, 0, 0.47);
  background-color: transparent;
  /* background-color: ${({ theme }) => theme.sidebar.bg}; */
`;
export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  text-shadow: ${p => p.theme.sidebar.textShadow};
  text-align: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.sidebar.titleColor};
`;
export const Subtitle = styled.h3`
  font-style: italic;
  text-align: center;
  color: ${({ theme }) => theme.sidebar.subTitleColor};
  margin-bottom: 20px;
`;
