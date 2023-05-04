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
            <SlSocialFacebook size={30} title="Facebook" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/aleksandr-krivoruchko" target="blank">
            <SlSocialGithub size={30} title="GitHub" />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.linkedin.com/in/krivoruchko-aleksandr/"
            target="blank"
          >
            <SlSocialLinkedin size={30} title="LinkedIn" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.instagram.com/" target="_blank">
            <SlSocialInstagram size={30} title="Gmail" />
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};
