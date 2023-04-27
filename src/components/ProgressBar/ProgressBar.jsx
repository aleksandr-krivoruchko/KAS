import React from 'react';
import { Bar, Circle, Percent } from './ProgressBar.styled.js';

export const ProgressBar = () => {
  return (
    <Bar>
      <Circle>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </Circle>
      <Percent>
        <h2>
          90<span>%</span>
        </h2>
      </Percent>
    </Bar>
  );
};
