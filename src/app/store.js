import {configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
const middlewares = [cryptoNewsApi.middleware,cryptoApi.middleware,]
export default configureStore({
    reducer:{
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    middleware: (getDefaultMiddleware)=>{
       return getDefaultMiddleware().concat(...middlewares)
    }
})

