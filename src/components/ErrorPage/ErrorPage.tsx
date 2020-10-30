import Router from 'next/router';
import React from 'react';
import Footer from '../Footer';
import Logo from '../Logo';
import PrettyButton from '../PrettyButton';
import styles from './ErrorPage.module.css';

const ErrorPage: React.FC = () => {
    const backHome = () => Router.push( '/' );

    return (
        <>
            <div className={styles.errorWrapper}>
                <Logo/>
                <div className={styles.errorCenter}>
                    <h3>page not found</h3>
                    <img src='/images/404.jpg' width='600' height='240' />
                    <PrettyButton clickHandler={backHome} text='Go back to home' />
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ErrorPage;
