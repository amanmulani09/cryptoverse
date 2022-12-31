import {configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    middleware: (getDefaultMiddleware)=>{
       return getDefaultMiddleware().concat(cryptoApi.middleware)
    }
})

