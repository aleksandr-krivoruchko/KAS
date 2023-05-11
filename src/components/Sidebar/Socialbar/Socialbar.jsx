import React from 'react';
import { Box, List, ListItem, Link } from './Socialbar.styled';
import { socialItems } from 'data/data';

export const Socialbar = () => {
  return (
    <Box>
      <List>
        {socialItems.map(item => (
          <ListItem key={item.title}>
            <Link
              href={item.href}
              target="blank"
              rel="noopener noreferrer"
              title={item.title}
            >
              {item.icon}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
