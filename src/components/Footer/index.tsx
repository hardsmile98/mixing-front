import React from 'react';
import Container from 'components/Container';
import Link from 'next/link';
import styles from './styles.module.css';

function Footer() {
  return (
    <footer
      id="footer"
      className={styles.root}
    >
      <Container>
        <div className={styles.wrap}>
          <p>
            {'Lepro © '}
            {new Date().getFullYear()}
          </p>

          <Link
            className={styles.scroll}
            href="#"
          >
            Scroll to up
          </Link>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
