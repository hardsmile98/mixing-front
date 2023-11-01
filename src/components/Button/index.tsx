import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import Loader from 'components/Loader';
import styles from './styles.module.css';

interface Props {
  variant?: 'contained' | 'outlined'
  fullWidth?: boolean
  children: ReactNode
  className?: string
  loading?: boolean
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled']
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
}

function Button({
  children,
  variant = 'contained',
  fullWidth,
  className,
  disabled,
  loading,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={`${styles.root} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''} ${className || ''}`}
      onClick={onClick}
    >
      {loading ? <Loader size={20} width={3} /> : children}
    </button>
  );
}

export default Button;
