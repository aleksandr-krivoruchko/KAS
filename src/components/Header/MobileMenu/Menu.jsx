import React, { useState } from 'react';
import { MenuButton } from './Menu.styled';
import { SlMenu } from 'react-icons/sl';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MenuButton type="button" onClick={prev => setIsOpen(!prev)}>
        <SlMenu size={30} title="Mobile Menu" color="inherit" />
      </MenuButton>
      {isOpen && <h1>menu</h1>}
    </>
  );
};
