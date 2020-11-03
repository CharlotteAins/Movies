import React from 'react';
import styles from './PrettyButton.module.css';

export interface ButtonProps {
  clickHandler: () => void;
  text: String;
}

const PrettyButton: React.FC<ButtonProps> = ( { clickHandler, text } ) => {
  return <button type={'button'} onClick={clickHandler} className={styles.btnPretty}>{text}</button>;
};

export default PrettyButton;
