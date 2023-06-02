import React from 'react';
import { StyledMenuButton } from './Menu.styled';
import { SlMenu } from 'react-icons/sl';
import { MdClose } from 'react-icons/md';

export const MenuButton = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <>
      <StyledMenuButton
        type="button"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        {!isOpenMenu ? (
          <SlMenu size={30} title="Mobile Menu Open" color="inherit" />
        ) : (
          <MdClose size={30} title="Mobile Menu Close" color="inherit" />
        )}
      </StyledMenuButton>
    </>
  );
};
