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
          <Link href="#" data-hover="Home">
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#" data-hover="About">
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#" data-hover="Works">
            Works
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#" data-hover="Contacts">
            Contacts
          </Link>
        </ListItem>
      </List>
      <Toggle themeToggler={themeToggler} />
    </Navbar>
  );
};
