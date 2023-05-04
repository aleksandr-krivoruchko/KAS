import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Themes';
import { useDarkMode } from '../hooks/useDarkMode';
import { Layout } from './Layout/Layout';
import { Wrapper } from './Layout/Layout.styled';
import { Navigation } from './Header/Navigation/Navigation';
import { Sidebar } from './Sidebar/Sidebar';
import { MainSection } from './Main/Main';

export const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <Layout>
        <Navigation themeToggler={themeToggler} />
        <Wrapper>
          <Sidebar />
          <MainSection />
        </Wrapper>
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
};
