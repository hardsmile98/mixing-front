import React from 'react';
import { Container } from '@components/index';
import Link from 'next/link';
import styles from './styles.module.css';

function NotFound() {
  return (
    <section
      id="error"
      className={styles.root}
    >
      <Container>
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
      </Container>
    </section>
  );
}

export default NotFound;
