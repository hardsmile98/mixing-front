import React from 'react';
import Form from './Form';
import styles from './styles.module.css';

function Mixing() {
  return (
    <section id="mixing">
      <div className={styles.offer}>
        <h1>
          {'Lepro is best '}
          <span>Bitcoin Mixer</span>
        </h1>

        <p>
          We helps you protect your privacy and identity and mix your
          Bitcoins easily and cheaply without storing any logs from you.
        </p>
      </div>

      <div className={styles.form}>
        <Form />
      </div>
    </section>
  );
}

export default Mixing;
