import React, { useState } from 'react';
import { Header, Navbar, List, ListItem, Link, Box } from './Navigation.styled';
import { Logo } from '../Logo/Logo.jsx';
import { Toggle } from '../Toggle/Toggle.jsx';
import { StyledMenuButton } from '../MobileMenu/MenuButton';
import { Menu } from '../MobileMenu/Menu';

export const Navigation = ({ themeToggler }) => {
  const items = [
    { value: 'Home', href: '#home', active: false },
    { value: 'About', href: '#about', active: false },
    { value: 'Works', href: '#works', active: false },
    { value: 'Contacts', href: '#contacts', active: false },
  ];

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);

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
            <ListItem key={item.value}>
              <Link
                href={item.href}
                data-hover={item.value}
                active={isActive}
                onClick={() => setIsActive(!isActive)}
              >
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
