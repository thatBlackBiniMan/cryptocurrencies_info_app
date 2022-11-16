import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


const cryptoNewsHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '0dc7bf0385msh98a8901abe94366p112bd3jsna99576616087',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) =>({url, headers: cryptoNewsHeaders})


export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) =>({
      getCryptoNews: builder.query({
        query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      })
  })
});


export const { useGetCryptoNewsQuery } = cryptoNewsApi;