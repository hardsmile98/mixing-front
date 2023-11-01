import React, { useState } from 'react';
import { getPriority } from 'contants';
import Hint from './Hint';
import ServiceFee from './ServiceFee';
import styles from './styles.module.css';

const initialAddresses = [{
  address: '',
  delay: 0,
  percent: 100,
}];

function CreateOrder() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [feePercent, setFeePercent] = useState<number>(1.3);
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
          <ServiceFee
            priority={priority}
            feePercent={feePercent}
            setFeePercent={setFeePercent}
          />
        </div>

        <div>
          mix Code
        </div>
      </div>
    </>
  );
}

export default CreateOrder;
