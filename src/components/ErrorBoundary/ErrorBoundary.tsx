import React from 'react';
import styles from './ErrorBoundary.module.css';


//PATTERN: Higher-Order Component
class ErrorBoundary extends React.Component {
  public state = {
    hasError: false,
  };

  public static getDerivedStateFromError(): any {
    return {hasError: true};
  }

  render(): React.ReactNode {
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
