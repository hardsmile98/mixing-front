import React from 'react';
import Hint from './Hint';
import styles from './styles.module.css';

function CreateOrder() {
  return (
    <>
      <div className={styles.hint}>
        <Hint />
      </div>

      <div>
        form
      </div>
    </>
  );
}

export default CreateOrder;
