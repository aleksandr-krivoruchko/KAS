import React, { useState } from 'react';
import { Header, Navbar, List, ListItem, Link, Box } from './Navigation.styled';
import { Logo } from '../Logo/Logo.jsx';
import { Toggle } from '../Toggle/Toggle.jsx';
import { StyledMenuButton } from '../MobileMenu/MenuButton';
import { Menu } from '../MobileMenu/Menu';

export const Navigation = ({ themeToggler }) => {
  const items = [
    { value: 'Home', href: '#home' },
    { value: 'About', href: '#about' },
    { value: 'Works', href: '#works' },
    { value: 'Contacts', href: '#contacts' },
  ];

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <Header>
      <Navbar>
        <Box>
          <StyledMenuButton
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
          />
          <Logo />
          {isOpenMenu && (
            <Menu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
          )}
        </Box>
        <List>
          {items.map(item => (
            <ListItem>
              <Link href={item.href} data-hover={item.value}>
                {item.value}
              </Link>
            </ListItem>
          ))}
        </List>
        <Toggle themeToggler={themeToggler} />
      </Navbar>
    </Header>
  );
};
