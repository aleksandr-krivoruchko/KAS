import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Themes';
import { useDarkMode } from '../hooks/useDarkMode';
import { Layout } from './Layout/Layout';
import { Navigation } from './Navigation/Navigation';
import { Sidebar } from './Aside/Sidebar';
import { MainSection } from './Main/Main';

export const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <Navigation themeToggler={themeToggler} />
      <Layout>
        <Sidebar />
        <MainSection />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
};
