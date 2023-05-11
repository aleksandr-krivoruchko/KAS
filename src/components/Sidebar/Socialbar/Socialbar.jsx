import React from 'react';
import { Box, List, ListItem, Link } from './Socialbar.styled';
import { data } from 'data';

export const Socialbar = () => {
  return (
    <Box>
      <List>
        {data.socialItems.map(item => (
          <ListItem key={item.title}>
            <Link href={item.href} target="blank" title={item.title}>
              {item.icon}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
