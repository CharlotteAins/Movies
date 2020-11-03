import React from 'react';
import styles from './ModalFormWrapper.module.css';

const ModalFormWrapper: React.FC = ( { children } ) => {
  return (
    <div className={styles.modalFormWrapper}>
      {children}
    </div>
  );
};

export default ModalFormWrapper;
