import React, { useState } from 'react';
import RightIcon from 'assets/images/icons/right.svg';
import { getPriority, initialAddresses } from 'contants';
import { Button, Input } from '@components/index';
import Hint from './Hint';
import ServiceFee from './ServiceFee';
import Addresses from './Addresses';
import styles from './styles.module.css';

function CreateOrder() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [feePercent, setFeePercent] = useState(1.3);
  const [mixCode, setMixCode] = useState('');

  const priority = getPriority(feePercent);

  return (
    <>
      <div className={styles.hint}>
        <Hint />
      </div>

      <div className={styles.form}>
        <div>
          <Addresses
            addresses={addresses}
            setAddresses={setAddresses}
          />
        </div>

        <div>
          <ServiceFee
            priority={priority}
            feePercent={feePercent}
            setFeePercent={setFeePercent}
          />
        </div>

        <div>
          <h5>
            Enter mix code
          </h5>

          <div className={styles.mixCode}>
            <Input
              fullWidth
              value={mixCode}
              onChange={(e) => setMixCode(e.target.value)}
              placeholder="Mix code"
            />
          </div>
        </div>

        <Button
          fullWidth
          className={styles.button}
        >
          Сontinue
          <RightIcon />
        </Button>
      </div>
    </>
  );
}

export default CreateOrder;
