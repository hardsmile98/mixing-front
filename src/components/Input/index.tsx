import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface Props {
  value: string | number
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  disabled?: InputHTMLAttributes<HTMLInputElement>['disabled']
  placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder']
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange']
  fullWidth?: boolean
  label?: string
  error?: boolean
  errorMessage?: string
}

function Input({
  value,
  type = 'text',
  disabled,
  placeholder,
  onChange,
  fullWidth,
  label,
  error,
  errorMessage,
}: Props) {
  return (
    <label htmlFor={label}>
      {label && (
        <p className={styles.label}>
          {label}
        </p>
      )}

      <input
        id={label}
        className={`${styles.root} ${fullWidth ? styles.fullWidth : ''} ${error ? styles.error : ''}`}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />

      {errorMessage && (
        <p className={styles.errorMessage}>
          {errorMessage}
        </p>
      )}
    </label>
  );
}

export default Input;
