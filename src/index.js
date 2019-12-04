import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import rootReducers from "./reducers/reducers";

const store = createStore(rootReducers);

ReactDOM.render(
    <Provider store={store}>
  <App />
    </Provider>  ,
  document.getElementById('root')
);

