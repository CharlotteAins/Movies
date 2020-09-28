import React from 'react';
import styles from './ErrorPage.module.css';
import Footer from "../Footer";
import Logo from "../Logo";
import {useHistory} from 'react-router-dom';
import PrettyButton from "../PrettyButton";

const ErrorPage: React.FC = () => {

    const history = useHistory();

    return (
        <>
            <div className={styles.errorWrapper}>
                <Logo/>
                <div className={styles.errorCenter}>
                    <h3>page not found</h3>
                    <img src='/src/images/404.jpg' width='600' height='240'/>
                    <PrettyButton clickHandler={() => history.push('/')} text='Go back to home' />
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ErrorPage;
