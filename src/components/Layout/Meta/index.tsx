import React from 'react';
import Head from 'next/head';

interface IProps {
  title: string
  description: string
  keywords: string
}

const URL_SITE = process.env.NEXT_PUBLIC_SITE_URL || '';

function Meta({ title, description, keywords }: IProps) {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <title>{title}</title>

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={URL_SITE} />
      <meta property="og:image" content={`${URL_SITE}/preview.png`} />
      <meta property="og:image:width" content="1400" />
      <meta property="og:image:height" content="800" />
      <link rel="canonical" href={URL_SITE} />
    </Head>
  );
}

export default Meta;
