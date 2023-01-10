import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import { ValueContext } from './app/ValueContext';

ReactDOM.render(
    <ValueContext>

    <BrowserRouter>
    <Provider store={store}>
<App/>
    </Provider>
    </BrowserRouter>
    </ValueContext>
,document.getElementById('root'));