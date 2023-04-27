import React from 'react';
import { Aside, Photo, Meter } from './Sidebar.styled';
import { ProgressBar } from '../ProgressBar/ProgressBar';

export const Sidebar = () => {
  return (
    <Aside>
      <h2>Sidebar</h2>
      <label for="fuel">HTML</label>
      <Meter id="fuel" min="0" max="100" value="80">
        at 80/100
      </Meter>
      <ProgressBar />
    </Aside>
  );
};
