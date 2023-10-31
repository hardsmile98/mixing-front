import React from 'react';
import RefreshIcon from 'assets/images/icons/refresh.svg';
import DollarIcon from 'assets/images/icons/dollar.svg';
import SettingsIcon from 'assets/images/icons/settings.svg';
import styles from './styles.module.css';

const steps = [
  {
    id: 1,
    icon: <SettingsIcon />,
    label: '1. Create order',
  },
  {
    id: 2,
    icon: <DollarIcon />,
    label: '2. Send coins',
  },
  {
    id: 3,
    icon: <RefreshIcon />,
    label: '3. Mixing coins',
  },
];

function UserPath() {
  return (
    <ul className={styles.steps}>
      {steps.map((step) => (
        <li
          key={step.id}
          className={`${styles.step} ${step.id === 1 ? styles.active : ''}`}
        >
          <div className={styles.stepIcon}>
            {step.icon}
          </div>

          <p className={styles.stepTitle}>
            {step.label}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default UserPath;
