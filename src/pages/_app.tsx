import React from 'react';
import { wrapper } from 'store/store';
import { Provider } from 'react-redux';
import 'rc-slider/assets/index.css';
import 'assets/styles/normalize.css';
import 'assets/styles/fonts.css';
import 'assets/styles/theme.css';
import type { AppProps } from 'next/app';
import {
  Layout,
  Header,
  Footer,
  Container,
} from '@components/index';

interface PageProps {
  pageProps: {
    id: number;
  };
}

export default function App({ Component, ...rest }: Omit<AppProps, 'pageProps'> & PageProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Layout
        title="LEPRO MIXER - BEST CRYPTO MIXER"
        description="LEPRO MIXER - BEST CRYPTO MIXER"
        keywords="LEPRO, CRYPTO MIXER, BETST BITCOIN MIXER"
      >
        <Header />

        <main>
          <Container>
            <Component {...props.pageProps} />
          </Container>
        </main>

        <Footer />
      </Layout>
    </Provider>
  );
}
