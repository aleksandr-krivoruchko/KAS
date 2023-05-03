import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border: 7px solid ${p => p.theme.sidebar.avatarBorderColor};
  border-radius: 50%;
  margin-bottom: 10px;
`;
export const Wrapper = styled.div`
  width: 270px;
  height: 270px;
  border: 3px solid ${p => p.theme.sidebar.avatarBorderColor};
  border-radius: 50%;
  overflow: hidden;
`;

export const Image = styled.img`
  min-height: 100%;
`;
