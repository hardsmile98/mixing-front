import React from 'react';
import WarningIcon from 'assets/images/icons/warning.svg';
import styles from './styles.module.css';

interface Props {
  text: string
}

function Hint({ text }: Props) {
  return (
    <p className={styles.root}>
      <WarningIcon />
      {' '}
      <span>
        Attention:
      </span>
      {' '}
      {text}
    </p>
  );
}

export default Hint;
