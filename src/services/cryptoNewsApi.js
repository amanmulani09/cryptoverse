import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'cf9bbd9832msh98b0b946569782dp1020fajsn63c18dd7a755',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseCryptoNewsApi = 'https://bing-news-search1.p.rapidapi.com/news';
const createRequest = (url)=> ({url,headers:cryptoNewsHeaders});
export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseCryptoNewsApi}),
    endpoints: (builder)=> ({
        getCryptoNews: builder.query({
            query: ({newsCategory,count})=> createRequest(`/news/search?q=${newsCategory ? newsCategory : 'Cryptocurrencies'}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count ? count : 100}`),
        })
    })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi