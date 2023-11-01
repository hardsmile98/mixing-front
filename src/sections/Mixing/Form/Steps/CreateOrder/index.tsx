import React, { useState } from 'react';
import { getPriority } from 'contants';
import Slider from 'rc-slider';
import Hint from './Hint';
import PriorityIcon from './PriorityIcon';
import styles from './styles.module.css';

const initialAddresses = [{
  address: '',
  delay: 0,
  percent: 100,
}];

function CreateOrder() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [feePercent, setFeePercent] = useState(2);
  const [mixCode, setMixCode] = useState('');

  const priority = getPriority(feePercent);

  return (
    <>
      <div className={styles.hint}>
        <Hint />
      </div>

      <div className={styles.form}>
        <div>
          <h5>
            Enter receiver's bitcoin address
          </h5>
        </div>

        <div>
          <h5>
            Select service fee
          </h5>

          <p className={styles.feeForAddress}>
            + 0.0001 BTC per each address
          </p>

          <div>
            <Slider />
          </div>

          <div className={styles.priority}>
            <PriorityIcon priority={priority} />

            {' The priority of the outgoing transaction: '}
            <span>
              {priority}
            </span>
          </div>
        </div>

        <div>
          mix Code
        </div>
      </div>
    </>
  );
}

export default CreateOrder;
