import React from 'react';
import { Hint } from '@components/index';
import styles from './styles.module.css';

function Mixing() {
  return (
    <>
      <div className={styles.hint}>
        <Hint text="After mixing the coins, we will send them to the addresses you provided" />
      </div>

      <div className={styles.wrap}>
        <h5>
          Thank you for using our service
        </h5>

        <p>Coins are mixed, you will receive coins to the specified addresses</p>
      </div>
    </>
  );
}

export default Mixing;
