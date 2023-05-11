import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './Themes';
import { useDarkMode } from '../hooks/useDarkMode';
import { Layout } from './Layout/Layout';
import { Wrapper } from './Layout/Layout.styled';
import { HeaderSection } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { MainSection } from './Main/Main';

export const App = () => {
  const [themeT, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = themeT === 'light' ? theme.lightTheme : theme.darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <Layout>
        <HeaderSection themeToggler={themeToggler} />
        <Wrapper>
          <Sidebar />
          <MainSection />
        </Wrapper>
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
};
