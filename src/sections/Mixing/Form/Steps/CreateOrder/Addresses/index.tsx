import React from 'react';
import AddIcon from 'assets/images/icons/add.svg';
import CloseIcon from 'assets/images/icons/close.svg';
import { initialAddresses } from 'contants';
import { Button, Input } from '@components/index';
import styles from './styles.module.css';

type AddressesType = typeof initialAddresses;

interface Props {
  addresses: AddressesType
  setAddresses: React.Dispatch<React.SetStateAction<AddressesType>>
}

function Addresses({ addresses, setAddresses }: Props) {
  const isLimitAddresses = addresses.length >= 8;

  const enterAddress = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setAddresses((prev) => {
      const state = [...prev];
      state[index] = {
        ...state[index],
        address: e.target.value,
      };

      return state;
    });
  };

  const addAddress = () => {
    if (isLimitAddresses) return;

    setAddresses((prev) => [...prev, ...initialAddresses]);
  };

  const deleteAddress = (index: number) => {
    setAddresses((prev) => prev.filter((_, i) => index !== i));
  };

  return (
    <>
      <h5>
        Enter receiver's bitcoin address
      </h5>

      <p className={styles.minimum}>
        Minimum amount for mixing: 0.001 BTC
      </p>

      <div className={styles.addresses}>
        {addresses.map((item, index) => (
          <div
            key={index}
            className={styles.addressWrap}
          >
            <Input
              className={styles.address}
              value={item.address}
              onChange={(e) => enterAddress(e, index)}
              fullWidth
              error={item.error}
              errorMessage="Please enter a valid Bitcoin address"
              placeholder={`#${index + 1} Receiving address`}
            />

            <div className={styles.addressActions}>
              <div className={styles.addressStats}>
                <div className={styles.delay}>
                  {`${item.delay}h`}
                </div>

                <div className={styles.percent}>
                  {`${item.percent}%`}
                </div>
              </div>

              {index !== 0 && (
                <button
                  className={styles.delete}
                  type="button"
                  onClick={() => deleteAddress(index)}
                >
                  <CloseIcon />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <Button
        className={styles.addButton}
        disabled={isLimitAddresses}
        fullWidth
        onClick={addAddress}
      >
        <AddIcon />
        Add address
      </Button>
    </>
  );
}

export default Addresses;
