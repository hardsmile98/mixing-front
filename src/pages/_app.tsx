import React from 'react';
import 'assets/styles/normalize.css';
import type { AppProps } from 'next/app';
import { Layout } from '@components/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout
      title="LEPRO MIXER - BEST CRYPTO MIXER"
      description="LEPRO MIXER - BEST CRYPTO MIXER"
      keywords="LEPRO, CRYPTO MIXER, BETST BITCOIN MIXER"
    >
      <Component {...pageProps} />
    </Layout>
  );
}
