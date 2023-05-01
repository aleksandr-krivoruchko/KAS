import React from 'react';
import { Box, List, ListItem, Link } from './Socialbar.styled';
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

export const Socialbar = () => {
  return (
    <Box>
      <List>
        <ListItem>
          <Link>
            <BsFacebook size={35} title="Facebook" />
          </Link>
        </ListItem>
        <ListItem>
          <BsGithub size={35} title="GitHub" />
        </ListItem>
        <ListItem>
          <BsLinkedin size={35} title="LinkedIn" />
        </ListItem>
        <ListItem>
          <SiGmail size={35} title="Gmail" />
        </ListItem>
      </List>
    </Box>
  );
};
