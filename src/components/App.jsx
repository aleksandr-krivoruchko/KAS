import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './Themes';
import { useDarkMode } from '../hooks/useDarkMode';
import { Layout } from './Layout/Layout';
import { Wrapper } from './Layout/Layout.styled';
import { Navigation } from './Header/Navigation/Navigation';
import { Sidebar } from './Sidebar/Sidebar';
import { MainSection } from './Main/Main';

export const App = () => {
  const [themeT, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = themeT === 'light' ? theme.lightTheme : theme.darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <Layout>
        <Navigation themeToggler={themeToggler} />
        <Wrapper>
          <Sidebar />
          <MainSection></MainSection>
        </Wrapper>
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
};
