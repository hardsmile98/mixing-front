import React from 'react';
import Slider from 'rc-slider';
import PriorityIcon from './PriorityIcon';
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

interface Props {
  feePercent: number
  priority: string
  setFeePercent: React.Dispatch<React.SetStateAction<number>>
}

function ServiceFee({
  feePercent,
  setFeePercent,
  priority,
}: Props) {
  return (
    <>
      <h5>
        Select service fee
      </h5>

      <p className={styles.feeForAddress}>
        + 0.0001 BTC per each address
      </p>

      <div className={styles.feeSlider}>
        <Slider
          value={feePercent}
          onChange={(nextValues) => setFeePercent(Number(nextValues))}
          marks={{
            0.5: '0.5%',
            2.5: '2.5%',
          }}
          dotStyle={sliderStyles.dotStyle}
          activeDotStyle={sliderStyles.activeDotStyle}
          styles={{
            handle: sliderStyles.handle,
            track: sliderStyles.track,
            rail: sliderStyles.rail,
          }}
          step={0.01}
          min={0.5}
          max={2.5}
        />
      </div>

      <div className={styles.commission}>
        <p>
          {'Commission: '}
          <span>
            {feePercent}
            %
          </span>
        </p>
      </div>

      <div className={styles.priority}>
        <PriorityIcon priority={priority} />

        {' The priority of the outgoing transaction: '}
        <span>
          {priority}
        </span>
      </div>
    </>
  );
}

export default ServiceFee;
