import React from 'react';
import Slider from 'rc-slider';
import AddIcon from 'assets/images/icons/add.svg';
import CloseIcon from 'assets/images/icons/close.svg';
import DownIcon from 'assets/images/icons/down.svg';
import { initialAddresses } from 'contants';
import { Button, Input } from '@components/index';
import styles from './styles.module.css';

const sliderStyles = {
  dotStyle: { borderColor: 'var(--grey)', backgroundColor: 'var(--grey)' },
  activeDotStyle: { borderColor: 'var(--grey)', backgroundColor: 'var(--grey)' },
  handle: {
    opacity: 1,
    border: 'none',
    width: '12px',
    height: '12px',
    marginTop: '-4px',
    background: 'var(--primary)',
    boxShadow: 'none',
  },
  track: { background: 'var(--grey1)' },
  rail: { backgroundColor: 'var(--grey1)' },
};

type AddressesType = typeof initialAddresses;

interface Props {
  addresses: AddressesType
  setAddresses: React.Dispatch<React.SetStateAction<AddressesType>>
}

function Addresses({ addresses, setAddresses }: Props) {
  const isLimitAddresses = addresses.length >= 8;

  const enterAddress = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setAddresses((prev) => {
      const newState = [...prev];
      newState[index] = {
        ...newState[index],
        address: e.target.value,
      };

      return newState;
    });
  };

  const addAddress = () => {
    if (isLimitAddresses) return;

    setAddresses((prev) => {
      const newState = [...prev, ...initialAddresses].map((item) => ({
        ...item,
        percent: Number((100 / (prev.length + 1)).toFixed(2)),
      }));

      return newState;
    });
  };

  const deleteAddress = (index: number) => {
    setAddresses((prev) => {
      const newState = prev.filter((_, i) => index !== i).map((item) => ({
        ...item,
        percent: Number((100 / (prev.length - 1)).toFixed(2)),
      }));

      return newState;
    });
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
                <button
                  type="button"
                  className={styles.delay}
                >
                  {`${item.delay}h`}
                  <DownIcon />
                </button>

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

      {addresses.length > 1 && (
        <div className={styles.distribution}>
          <p>
            Select distribution
          </p>

          <Slider
            range
            min={0}
            max={100}
            step={0.01}
            allowCross={false}
            marks={{
              0: '0%',
              100: '100%',
            }}
            dotStyle={sliderStyles.dotStyle}
            activeDotStyle={sliderStyles.activeDotStyle}
            styles={{
              handle: sliderStyles.handle,
              track: sliderStyles.track,
              rail: sliderStyles.rail,
            }}
            value={addresses.map((item) => item.percent)}
          />
        </div>
      )}
    </>
  );
}

export default Addresses;
