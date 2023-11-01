import React from 'react';
import styles from './styles.module.css';

interface Props {
  size?: number
  width?: number
}

function Loader({
  size = 48,
  width = 5,
}: Props) {
  return (
    <span
      className={styles.loader}
      style={{
        width: size,
        height: size,
        borderWidth: width,
      }}
    />
  );
}

export default Loader;
