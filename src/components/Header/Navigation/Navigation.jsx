import React from 'react';
import { Navbar, List, ListItem, Link } from './Navigation.styled';
import { navItems } from 'data/data';
import activeLink from '../../../helpers/activeLink';
export const Navigation = () => {
  return (
    <Navbar>
      <List onClick={e => activeLink(e)}>
        {navItems.map(item => (
          <ListItem key={item.value}>
            <Link
              href={item.href}
              data-hover={item.value}
              className={item.value === 'Home' && 'active'}
            >
              {item.value}
            </Link>
          </ListItem>
        ))}
      </List>
    </Navbar>
  );
};
