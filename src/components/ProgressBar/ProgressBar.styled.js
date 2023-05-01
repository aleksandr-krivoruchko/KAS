import styled from 'styled-components';

export const Section = styled.section`
  background-color: transparent;
  padding: 10px 5px;
`;

export const Title = styled.h2`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.sidebar.titleColor};
  background: transparent;
  /* text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #49ff18,
    0 0 30px #49ff18, 0 0 40px #49ff18, 0 0 55px #49ff18, 0 0 75px #49ff18; */
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
`;

export const Bar = styled.li`
  background-color: transparent;
`;

export const Text = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: ${({ color }) => color};
  text-align: center;
`;
