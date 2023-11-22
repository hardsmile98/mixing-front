import React, { InputHTMLAttributes } from 'react';
import CopyIcon from 'assets/images/icons/copy.svg';
import styles from './styles.module.css';

interface Props {
  value: string | number
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  disabled?: InputHTMLAttributes<HTMLInputElement>['disabled']
  placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder']
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange']
  fullWidth?: boolean
  label?: string
  error?: boolean
  errorMessage?: string
  className?: string
  withCopy?: boolean
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
  className,
  withCopy,
}: Props) {
  return (
    <label htmlFor={label} className={`${fullWidth ? styles.fullWidth : ''}`}>
      {label && (
        <p className={styles.label}>
          {label}
        </p>
      )}

      <div className={styles.wrap}>
        <input
          id={label}
          className={`${styles.root} ${fullWidth ? styles.fullWidth : ''} ${error ? styles.error : ''} ${withCopy ? styles.withCopy : ''} ${className || ''}`}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />

        {withCopy && (
          <button
            className={styles.copy}
            type="button"
            onClick={() => navigator.clipboard.writeText(String(value))}
          >
            <CopyIcon />
          </button>
        )}
      </div>

      {errorMessage && error && (
        <p className={styles.errorMessage}>
          {errorMessage}
        </p>
      )}
    </label>
  );
}

export default Input;
