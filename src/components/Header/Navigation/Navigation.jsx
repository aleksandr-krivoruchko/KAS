import React from 'react';
import { Header, Navbar, List, ListItem, Link } from './Navigation.styled';
import { Logo } from '../Logo/Logo.jsx';
import { Toggle } from '../Toggle/Toggle.jsx';

export const Navigation = ({ themeToggler }) => {
  return (
    <Header>
      <Navbar>
        <Logo />
        <List>
          <ListItem>
            <Link href="#home" data-hover="Home">
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#about" data-hover="About">
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#works" data-hover="Works">
              Works
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#contacts" data-hover="Contacts">
              Contacts
            </Link>
          </ListItem>
        </List>
        <Toggle themeToggler={themeToggler} />
      </Navbar>
    </Header>
  );
};
