import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Navigation } from './Navigation/Navigation';

export const App = () => {
  return (
    <Layout>
      <Navigation />
      <GlobalStyle />
    </Layout>
  );
};
