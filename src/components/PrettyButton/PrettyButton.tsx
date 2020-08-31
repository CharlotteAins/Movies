import React from 'react';
import styles from './PrettyButton.module.css';

interface ButtonProps {
    text: String
}

const PrettyButton: React.FC<ButtonProps> = ({text}) => {
    return <button className={styles.btnPretty}>{text}</button>;
};

export default PrettyButton;
