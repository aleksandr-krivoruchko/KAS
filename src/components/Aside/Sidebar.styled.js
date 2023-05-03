import styled from 'styled-components';

export const Aside = styled.aside`
  width: 30%;
  /* height: 100vh; */
  padding: 5px;
  border-radius: 10px;
  -webkit-box-shadow: 11px 12px 20px 5px rgba(0, 0, 0, 0.47);
  box-shadow: 11px 12px 20px 5px rgba(0, 0, 0, 0.47);
  background-color: ${({ theme }) => theme.sidebar.bg};
`;
export const Title = styled.h2`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 40px;
  font-weight: bold;
  text-shadow: ${p => p.theme.sidebar.textShadow};
  text-align: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.sidebar.titleColor};
`;
export const Subtitle = styled.h3`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  font-style: italic;
  text-align: center;
  color: ${({ theme }) => theme.sidebar.subTitleColor};
`;
