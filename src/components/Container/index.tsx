import React from 'react';
import styles from './styles.module.css';

interface IContainer {
  children: React.ReactNode
}

function Container({
  children,
}: IContainer) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Container;
