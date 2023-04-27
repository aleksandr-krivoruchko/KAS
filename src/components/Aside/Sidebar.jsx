import React from 'react';
import { Aside, Photo, Meter } from './Sidebar.styled';
import { ProgressBar } from '../ProgressBar/ProgressBar';

export const Sidebar = () => {
  return (
    <Aside>
      <ProgressBar />
    </Aside>
  );
};
