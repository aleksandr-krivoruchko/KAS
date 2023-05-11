import React from 'react';
import { Navbar, List, ListItem, Link } from './Navigation.styled';
import { data } from 'data';

export const Navigation = () => {
  return (
    <Navbar>
      <List>
        {data.navItems.map(item => (
          <ListItem key={item.value}>
            <Link href={item.href} data-hover={item.value}>
              {item.value}
            </Link>
          </ListItem>
        ))}
      </List>
    </Navbar>
  );
};
