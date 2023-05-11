import React from 'react';
import { Aside, Title, Subtitle } from './Sidebar.styled';
import { Photo } from '../Sidebar/Photo/Photo';
import { Socialbar } from '../Sidebar/Socialbar/Socialbar';

export const Sidebar = () => {
  return (
    <Aside>
      <Photo />
      <Title>Oleksandr Krivoruchko</Title>
      <Subtitle>Front-End Developer</Subtitle>
      <Socialbar />
    </Aside>
  );
};
