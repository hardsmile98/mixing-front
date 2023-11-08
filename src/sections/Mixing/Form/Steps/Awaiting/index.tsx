import React from 'react';
import Link from 'next/link';
import QRCode from 'react-qr-code';
import { Hint, Input, Button } from '@components/index';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import getEnvProps from 'utils/getEnvProps';
import styles from './styles.module.css';

function Awaiting() {
  const order = useSelector((state:RootState) => state.order);

  const letterLink = `${getEnvProps.apiUrl}/api/letters?uuid=${order.uuid}`;

  return (
    <>
      <div className={styles.hint}>
        <Hint text="If no funds are received within the remaining time,
        this link will be deleted and the generated address will become invalid.
        Please be aware of the minimum deposit amount and only make one deposit transaction."
        />
      </div>

      <div>
        <div>
          <h6>
            Order status link
          </h6>

          <Input
            fullWidth
            value="123"
            disabled
          />
        </div>

        <div>
          <h5>
            Letter of guarantee
          </h5>

          <p>
            It is the only proof that the mixing belongs to you.
          </p>

          <Link
            href={letterLink}
            download
            target="_blank"
          >
            Download
          </Link>
        </div>

        <div>
          <h5>
            Transfer bitcoins
          </h5>

          <div>
            <div>
              <QRCode value={order.transferAddress || ''} />
            </div>

            <div>
              <p>
                Transfer between 0.001 BTC and 1000.00 BTC to the following address :
              </p>

              <Input
                fullWidth
                disabled
                value={order.transferAddress || ''}
              />
            </div>
          </div>
        </div>

        <Button onClick={() => {}}>
          Check transactions
        </Button>
      </div>
    </>
  );
}

export default Awaiting;
