import styled from 'styled-components';

export const Section = styled.section`
  background-color: transparent;
  padding: 10px 5px;
`;

export const Title = styled.h2`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.sidebar.titleColor};
  background: transparent;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Bar = styled.li`
  width: 100px;
  margin-bottom: 5px;
  background-color: transparent;
  word-wrap: break-word;
`;

export const Text = styled.p`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: ${({ color }) => color};
  text-align: center;
  text-shadow: 0 0 5px ${({ color }) => color}, 0 0 10px ${({ color }) => color};
`;
