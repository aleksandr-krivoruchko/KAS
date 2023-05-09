import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  @media screen and (${p => p.theme.media.phone}) {
    width: 450px;
  }
  @media screen and (${p => p.theme.media.tablet}) {
    width: 768px;
    padding: 0px 10px;
  }
  @media screen and (${p => p.theme.media.desktop}) {
    width: 1200px;
    padding: 0px 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;
