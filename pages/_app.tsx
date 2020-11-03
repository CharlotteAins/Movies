import { Provider } from 'react-redux';
import App from '../src/App';
import { useStore } from '../src/redux/makeState';
import '../src/styles.css';

export default function AppNext( { Component, pageProps } ) {

  //PATTERN: Redux
  const store = useStore();

  //PATTERN: JSX Spread Attributes
  return (
    <Provider store={store}>
      <App>
        <Component {...pageProps} />
      </App>
    </Provider>
  );
}
