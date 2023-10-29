import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

interface LinkProps {
  children: React.ReactNode
  href: string
  target?: '_blank' | '_self'
}

function CustomLink({
  children,
  href,
  target = '_blank',
}: LinkProps) {
  return (
    <Link
      target={target}
      href={href}
      className={styles.link}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
