import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

function NotFound() {
  return (
    <section
      id="error"
      className={styles.root}
    >
      <div className={styles.wrap}>
        <h1>
          Page not found
        </h1>
        <p>
          Unable to load. Something went wrong.
        </p>

        <Link href="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
