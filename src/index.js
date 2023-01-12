import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import { ValueContext } from './app/ValueContext';

ReactDOM.render(
    <BrowserRouter>
    <ValueContext>

    <Provider store={store}>
<App/>
    </Provider>
    </ValueContext>
    </BrowserRouter>
,document.getElementById('root'));