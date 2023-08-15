import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './normalize.css';
import './i18n'
import store from './store/store';
import { FormProvider } from './components/FormContext/form.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <FormProvider>
      <BrowserRouter>
        <link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="./index.css" />
        <noscript><link rel="stylesheet" href="./index.css" /></noscript>

        <App />

      </BrowserRouter>
    </FormProvider>
  </Provider>,

);
