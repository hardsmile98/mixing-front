import React from 'react';
import Link from 'next/link';
import QRCode from 'react-qr-code';
import DownloadIcon from 'assets/images/icons/download.svg';
import RefreshIcon from 'assets/images/icons/refresh.svg';
import { Hint, Input, Button } from '@components/index';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import getEnvProps from 'utils/getEnvProps';
import styles from './styles.module.css';

function Awaiting() {
  const order = useSelector((state:RootState) => state.order);

  const letterLink = `${getEnvProps.apiUrl}/api/letters?uuid=${order.uuid}`;

  const origin = typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : '';

  return (
    <>
      <div className={styles.hint}>
        <Hint text="If no funds are received within the remaining time,
        this link will be deleted and the generated address will become invalid.
        Please be aware of the minimum deposit amount and only make one deposit transaction."
        />
      </div>

      <div className={styles.form}>
        <div className={styles.wrap}>
          <h6>
            Order status link
          </h6>

          <Input
            fullWidth
            value={`${origin}?uuid=${order?.uuid}`}
            disabled
          />
        </div>

        <div className={styles.wrap}>
          <h5>
            Letter of guarantee
          </h5>

          <p className={styles.letterDescription}>
            It is the only proof that the mixing belongs to you.
          </p>

          <Link
            href={letterLink}
            download
            className={styles.download}
            target="_blank"
          >
            <DownloadIcon />
            {' Download'}
          </Link>
        </div>

        <div className={styles.wrap}>
          <h5>
            Transfer bitcoins
          </h5>

          <div className={styles.requisites}>
            <div className={styles.qr}>
              <QRCode
                value={order.transferAddress || ''}
              />
            </div>

            <div className={styles.address}>
              <p>
                Transfer between 0.001 BTC and 100.00 BTC to the following address :
              </p>

              <Input
                fullWidth
                disabled
                value={order.transferAddress || ''}
              />
            </div>
          </div>
        </div>

        <Button className={styles.check} fullWidth onClick={() => {}}>
          <RefreshIcon />
          {' Check transactions'}
        </Button>
      </div>
    </>
  );
}

export default Awaiting;
