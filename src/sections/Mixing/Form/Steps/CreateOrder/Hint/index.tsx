import React from 'react';
import WarningIcon from 'assets/images/icons/warning.svg';
import styles from './styles.module.css';

function Hint() {
  return (
    <p className={styles.root}>
      <WarningIcon />
      {' '}
      <span>
        Attention:
      </span>
      {` Make sure you use addresses that do not
      have any links to you. Or best, create a new wallet address.`}
    </p>
  );
}

export default Hint;
