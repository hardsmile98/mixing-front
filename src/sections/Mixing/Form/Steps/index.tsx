import React from 'react';
import styles from './styles.module.css';

const steps = [
  {
    icon: '1',
    label: '1. Create order',
  },
  {
    icon: '2',
    label: '2. Send coins',
  },
  {
    icon: '3',
    label: '3. Mixing coins',
  },
];

function Steps() {
  return (
    <ul className={styles.steps}>
      {steps.map((step) => (
        <li
          key={step.label}
          className={styles.step}
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

export default Steps;
