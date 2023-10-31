import React from 'react';
import UserPath from './UserPath';
import Steps from './Steps';
import styles from './styles.module.css';

function Form() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();

  return (
    <form
      onSubmit={onSubmit}
      className={styles.form}
    >
      <div className={styles.path}>
        <UserPath />
      </div>

      <div className={styles.steps}>
        <Steps />
      </div>
    </form>
  );
}

export default Form;
