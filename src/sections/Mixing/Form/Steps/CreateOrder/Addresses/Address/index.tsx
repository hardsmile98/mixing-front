import React from 'react';
import { useComponentVisible } from 'hooks';
import Slider from 'rc-slider';
import CloseIcon from 'assets/images/icons/close.svg';
import DownIcon from 'assets/images/icons/down.svg';
import { Input } from '@components/index';
import { initialAddresses } from 'contants';
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
  track: { background: 'var(--primary)' },
  rail: { backgroundColor: 'var(--grey1)' },
};

type AddressesType = typeof initialAddresses[0];

interface Props {
  address: AddressesType
  index: number,
  enterAddress: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
  deleteAddress: (index: number) => void
  changeDelay: (value: number | number[], index: number) => void
}

function Address({
  address,
  index,
  enterAddress,
  deleteAddress,
  changeDelay,
}: Props) {
  const { setVisible, isVisible, ref } = useComponentVisible(false);

  return (
    <div className={styles.root}>
      <Input
        className={styles.address}
        value={address.address}
        onChange={(e) => enterAddress(e, index)}
        fullWidth
        error={address.error}
        errorMessage="Please enter a valid Bitcoin address"
        placeholder={`#${index + 1} Receiving address`}
      />

      <div className={styles.addressActions}>
        <div className={styles.addressStats}>
          <div className={styles.delaySelect}>
            <button
              type="button"
              className={styles.delay}
              onClick={() => setVisible(true)}
            >
              {`${address.delay}h`}
              <DownIcon />
            </button>

            <div
              ref={ref}
              className={`${styles.delaySlider} ${isVisible ? styles.visible : ''}`}
            >
              <Slider
                value={address.delay}
                onChange={(value) => changeDelay(value, index)}
                marks={{
                  0: '0h',
                  72: '72h',
                }}
                dotStyle={sliderStyles.dotStyle}
                activeDotStyle={sliderStyles.activeDotStyle}
                styles={{
                  handle: sliderStyles.handle,
                  track: sliderStyles.track,
                  rail: sliderStyles.rail,
                }}
                step={1}
                min={0}
                max={72}
              />
            </div>
          </div>

          <div className={styles.percent}>
            {`${address.percent.toFixed(1)}%`}
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
  );
}

export default Address;
