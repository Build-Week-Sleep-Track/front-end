import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Reducer from './reducers/reducer';

//styles
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'

const store = createStore(Reducer, applyMiddleware(thunk))

ReactDOM.render(
  <ThemeProvider theme={theme}> 
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
