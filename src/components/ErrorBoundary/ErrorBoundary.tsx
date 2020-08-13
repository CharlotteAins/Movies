import React from 'react';
import styles from './ErrorBoundary.module.css';

class ErrorBoundary extends React.Component {
    public state = {
        hasError: false,
    };

    public static getDerivedStateFromError() {
        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={styles.errorBoundary}>
                    Oooops, something went wrong, we`re trying to fix that right now =(
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
