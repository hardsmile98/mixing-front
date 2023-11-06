import React from 'react';
import RefreshIcon from 'assets/images/icons/refresh.svg';
import DollarIcon from 'assets/images/icons/dollar.svg';
import SettingsIcon from 'assets/images/icons/settings.svg';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import styles from './styles.module.css';

const steps = [
  {
    id: 1,
    icon: <SettingsIcon />,
    label: '1. Create order',
    includeStatus: ['none', 'awaiting', 'mixing'],
  },
  {
    id: 2,
    icon: <DollarIcon />,
    label: '2. Send coins',
    includeStatus: ['awaiting', 'mixing'],
  },
  {
    id: 3,
    icon: <RefreshIcon />,
    label: '3. Mixing coins',
    includeStatus: ['mixing'],
  },
];

function UserPath() {
  const status = useSelector((state: RootState) => state.order.status);

  return (
    <ul className={styles.steps}>
      {steps.map((step) => (
        <li
          key={step.id}
          className={`${styles.step} ${step.includeStatus.includes(status) ? styles.active : ''}`}
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
