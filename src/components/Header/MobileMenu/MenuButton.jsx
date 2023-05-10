import React from 'react';
import { MenuButton } from './Menu.styled';
import { SlMenu } from 'react-icons/sl';

export const StyledMenuButton = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <>
      <MenuButton type="button" onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <SlMenu size={30} title="Mobile Menu" color="inherit" />
      </MenuButton>
    </>
  );
};
