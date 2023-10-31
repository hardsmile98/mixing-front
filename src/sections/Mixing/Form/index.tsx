import React from 'react';
import styles from './styles.module.css';

function Form() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();

  return (
    <form
      onSubmit={onSubmit}
      className={styles.form}
    >
      12313213
    </form>
  );
}

export default Form;
