import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styled from 'styled-components';

const Box = styled.div`
  width: 30px;
  @media screen and (${p => p.theme.media.tablet}) {
    width: 40px;
  }
`;

export const Toggle = ({ themeToggler }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const switchTheme = () => {
    setIsDarkMode(prev => !prev);
    themeToggler();
  };

  return (
    <Box>
      <DarkModeSwitch
        onChange={switchTheme}
        checked={isDarkMode}
        size="100%"
        sunColor="yellow"
        moonColor="#44ddee"
      />
    </Box>
  );
};
