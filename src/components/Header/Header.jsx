import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { Toggle } from './Toggle/Toggle';
import { MobileMenu } from './MobileMenu/MobileMenu';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 10px;
  overflow: hidden;
`;

export const HeaderSection = ({ themeToggler }) => {
  return (
    <Header>
      <MobileMenu />
      <Logo />
      <Navigation />
      <Toggle themeToggler={themeToggler} />
    </Header>
  );
};
