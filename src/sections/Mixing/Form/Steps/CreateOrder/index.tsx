import React, { useEffect, useState } from 'react';
import { validate } from 'bitcoin-address-validation';
import RightIcon from 'assets/images/icons/right.svg';
import { getPriority, initialAddresses } from 'contants';
import { Button, Input, Hint } from '@components/index';
import { useCreateOrderMutation } from 'api/publicApi';
import { useDispatch } from 'react-redux';
import { setOrder } from 'store/slices/order';
import { useRouter } from 'next/router';
import ServiceFee from './ServiceFee';
import Addresses from './Addresses';
import styles from './styles.module.css';

function CreateOrder() {
  const dipatch = useDispatch();
  const router = useRouter();

  const [addresses, setAddresses] = useState(initialAddresses);
  const [feePercent, setFeePercent] = useState(1.3);
  const [mixCode, setMixCode] = useState('');

  const priority = getPriority(feePercent);

  const [create, {
    data,
    isSuccess,
    isLoading,
  }] = useCreateOrderMutation();

  useEffect(() => {
    if (isSuccess) {
      dipatch(setOrder(data?.order));

      router.replace({
        pathname: router.pathname,
        query: {
          ...router.query,
          uuid: data?.order.uuid,
        },
      }, undefined, { shallow: true });
    }
  }, [isSuccess]);

  const createOrder = () => {
    const filteredAddresses = addresses.map((item) => ({
      ...item,
      error: !validate(item.address),
    }));

    setAddresses(filteredAddresses);

    const isInvalid = filteredAddresses.some((item) => item.error);

    if (isInvalid) return;

    create({
      addresses,
      feePercent,
      mixCode,
    });
  };

  return (
    <>
      <div className={styles.hint}>
        <Hint text="Make sure you use addresses that do not
        have any links to you. Or best, create a new wallet address."
        />
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
          onClick={createOrder}
          loading={isLoading}
        >
          Сontinue
          <RightIcon />
        </Button>
      </div>
    </>
  );
}

export default CreateOrder;
