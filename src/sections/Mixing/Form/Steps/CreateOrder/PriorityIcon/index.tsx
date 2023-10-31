import React from 'react';
import { getPriority } from 'contants';
import styles from './styles.module.css';

interface Props {
  priority: ReturnType<typeof getPriority>
}

function PriorityIcon({ priority }: Props) {
  return (
    <svg
      className={`${styles.root} ${styles[priority]}`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="4" width="3" height="12" fill="currentColor" />
      <rect x="6" y="4" width="3" height="12" fill="currentColor" />
      <rect x="11" y="4" width="3" height="12" fill="currentColor" />
      <rect x="16" y="4" width="3" height="12" fill="currentColor" />
    </svg>
  );
}

export default PriorityIcon;
