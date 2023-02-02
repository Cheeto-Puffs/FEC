import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './state/store';
import './assets/qa.css';
import './assets/pd.css';
import './assets/rr.css';
import './assets/ro.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
