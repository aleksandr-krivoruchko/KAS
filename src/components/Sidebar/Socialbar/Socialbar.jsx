import React from 'react';
import { Box, List, ListItem, Link } from './Socialbar.styled';
import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialGithub,
} from 'react-icons/sl';

export const Socialbar = () => {
  return (
    <Box>
      <List>
        <ListItem>
          <Link
            href="https://www.facebook.com/profile.php?id=100024841694108"
            target="blank"
          >
            <SlSocialFacebook size={35} title="Facebook" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/aleksandr-krivoruchko" target="blank">
            <SlSocialGithub size={35} title="GitHub" />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.linkedin.com/in/krivoruchko-aleksandr/"
            target="blank"
          >
            <SlSocialLinkedin size={35} title="LinkedIn" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.instagram.com/" target="_blank">
            <SlSocialInstagram size={35} title="Gmail" />
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};
