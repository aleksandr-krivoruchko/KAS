import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const Toggle = ({ themeToggler }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const switchTheme = () => {
    setIsDarkMode(prev => !prev);
    themeToggler();
  };

  return (
    <DarkModeSwitch
      onChange={switchTheme}
      checked={isDarkMode}
      size={50}
      sunColor="yellow"
      moonColor="#44ddee"
    />
  );
};
