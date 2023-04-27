import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Themes';
import { Layout } from './Layout/Layout';
import { Navigation } from './Navigation/Navigation';
import { Sidebar } from './Aside/Sidebar';
import { useDarkMode } from '../hooks/useDarkMode';

export const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <Layout>
        <Navigation themeToggler={themeToggler} />
        <GlobalStyle />
        <Sidebar />
      </Layout>
    </ThemeProvider>
  );
};
