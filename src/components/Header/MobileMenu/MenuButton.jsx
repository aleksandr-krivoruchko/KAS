import React from 'react';
import { StyledMenuButton } from './Menu.styled';
import { SlMenu } from 'react-icons/sl';

export const MenuButton = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <>
      <StyledMenuButton
        type="button"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <SlMenu size={30} title="Mobile Menu" color="inherit" />
      </StyledMenuButton>
    </>
  );
};
