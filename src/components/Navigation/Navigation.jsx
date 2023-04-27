import React from 'react';
import { Navbar, List, ListItem, Link } from './Navigation.styled';
import { Logo } from '../Logo/Logo.jsx';
import { Toggle } from '../Toggle/Toggle.jsx';

export const Navigation = ({ themeToggler }) => {
  return (
    <Navbar>
      <Logo />
      <List>
        <ListItem>
          <Link href="#">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="#">About</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Works</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Contacts</Link>
        </ListItem>
      </List>
      <Toggle themeToggler={themeToggler} />
    </Navbar>
  );
};
