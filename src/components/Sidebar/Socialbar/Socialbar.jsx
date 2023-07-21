import React from 'react';
import { Box, List, ListItem, Link } from './Socialbar.styled';
import { socialItems } from 'data/data';

export const Socialbar = () => {
  return (
    <Box>
      <List>
        {socialItems.map(({ title, href, icon }) => (
          <ListItem key={title}>
            <Link
              href={href}
              target="blank"
              rel="noopener noreferrer"
              title={title}
            >
              {icon}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
