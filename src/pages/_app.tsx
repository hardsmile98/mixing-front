import React from 'react';
import 'assets/styles/normalize.css';
import 'assets/styles/fonts.css';
import 'assets/styles/theme.css';
import type { AppProps } from 'next/app';
import { Layout, Header, Footer } from '@components/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout
      title="LEPRO MIXER - BEST CRYPTO MIXER"
      description="LEPRO MIXER - BEST CRYPTO MIXER"
      keywords="LEPRO, CRYPTO MIXER, BETST BITCOIN MIXER"
    >
      <Header />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </Layout>
  );
}
