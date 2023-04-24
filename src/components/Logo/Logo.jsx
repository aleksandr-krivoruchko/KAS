import React from 'react';
import logo from '../../img/my-logo.png';
import { LogoImg, LogoLink } from './Logo.styled';

export const Logo = () => {
  return (
    <>
      <LogoLink href="#">
        <LogoImg src={logo} alt="logo" />
      </LogoLink>
    </>
  );
};
