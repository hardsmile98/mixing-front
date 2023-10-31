import React from 'react';
import styles from './styles.module.css';
import Steps from './Steps';

function Form() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();

  return (
    <form
      onSubmit={onSubmit}
      className={styles.form}
    >
      <div>
        <Steps />
      </div>
    </form>
  );
}

export default Form;
