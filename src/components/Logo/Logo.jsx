import React from 'react';
import logo from '../../img/Logo.svg';
import { LogoImg, LogoLink } from './Logo.styled';

export const Logo = () => {
  return (
    <>
      <LogoLink href="/">
        <LogoImg src={logo} alt="logo" />
      </LogoLink>
    </>
  );
};
