import React, { useMemo } from 'react';
import Slider from 'rc-slider';
import AddIcon from 'assets/images/icons/add.svg';
import { initialAddresses } from 'contants';
import { Button } from '@components/index';
import styles from './styles.module.css';
import Address from './Address';

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
        percent: Number((100 / (prev.length + 1))),
      }));

      return newState;
    });
  };

  const deleteAddress = (index: number) => {
    setAddresses((prev) => {
      const newState = prev.filter((_, i) => index !== i).map((item) => ({
        ...item,
        percent: Number((100 / (prev.length - 1))),
      }));

      return newState;
    });
  };

  const changeDelay = (value: number | number[], index: number) => {
    setAddresses((prev) => {
      const newState = [...prev];
      newState[index] = {
        ...newState[index],
        delay: Number(value),
      };

      return newState;
    });
  };

  const changeDistribution = (value: number | number[]) => {
    const arrayValue = value as number[];

    if (arrayValue[arrayValue.length - 1] !== 100) return;
    if (arrayValue[0] < 1) return;

    setAddresses((prev) => prev.map((address, index) => {
      if (index === 0) {
        return {
          ...address,
          percent: arrayValue[index],
        };
      }

      return {
        ...address,
        percent: arrayValue[index] - arrayValue[index - 1],
      };
    }));
  };

  const distribution = useMemo(() => addresses
    .reduce((prev: number[], cur, index) => {
      if (index === 0) return [cur.percent];

      return [
        ...prev,
        cur.percent + prev[index - 1],
      ];
    }, []), [addresses]);

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
          <Address
            key={index}
            address={item}
            index={index}
            changeDelay={changeDelay}
            enterAddress={enterAddress}
            deleteAddress={deleteAddress}
          />
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
            step={0.1}
            allowCross={false}
            marks={{
              0: '0%',
              100: '100%',
            }}
            onChange={changeDistribution}
            dotStyle={sliderStyles.dotStyle}
            activeDotStyle={sliderStyles.activeDotStyle}
            styles={{
              handle: sliderStyles.handle,
              track: sliderStyles.track,
              rail: sliderStyles.rail,
            }}
            value={distribution}
          />
        </div>
      )}
    </>
  );
}

export default Addresses;
