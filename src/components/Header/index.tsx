import React from 'react';
import { useRouter } from 'next/router';
import logoIcon from 'assets/images/logo.svg';
import Container from 'components/Container';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

const menuLinks = [
  { href: '/', label: 'Mixer' },
  { href: '/faq', label: 'FAQ' },
];

function Header() {
  const router = useRouter();

  return (
    <header
      id="header"
      className={styles.root}
    >
      <Container>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src={logoIcon}
                alt="LEPRO"
                width={36}
                height={36}
              />
            </Link>

            <p>
              Your anonymity is our concern
            </p>
          </div>

          <ul className={styles.menu}>
            {menuLinks.map((link) => (
              <li
                key={link.label}
                className={router.pathname === link.href ? styles.active : ''}
              >
                <Link href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
}

export default Header;
