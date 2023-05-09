import styled from 'styled-components';

export const LogoLink = styled.a``;

export const LogoImg = styled.img`
  display: none;
  @media screen and (${p => p.theme.media.tablet}) {
    display: block;
    width: 60px;
  }
  @media screen and (${p => p.theme.media.desktop}) {
    width: 80px;
  }
`;
