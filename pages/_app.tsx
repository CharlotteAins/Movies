import { Provider } from 'react-redux';
import App from '../src/App';
import { useStore } from '../src/redux/makeState';
import '../src/styles.css';

export default function AppNext( { Component, pageProps } ) {
  const store = useStore();

  return (
    <Provider store={store}>
      <App>
        <Component {...pageProps} />
      </App>
    </Provider>
  );
}
