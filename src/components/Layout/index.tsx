import React, { ReactNode } from 'react';

import Meta from './Meta';

interface IProps {
  children: ReactNode
  title: string
  description: string
  keywords: string
}

function Layout({
  children,
  title,
  description,
  keywords,
}: IProps) {
  return (
    <>
      <Meta
        title={title}
        description={description}
        keywords={keywords}
      />

      {children}
    </>
  );
}

export default Layout;
