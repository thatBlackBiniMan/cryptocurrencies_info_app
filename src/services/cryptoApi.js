import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '0dc7bf0385msh98a8901abe94366p112bd3jsna99576616087', 
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';


const createRequest = (url) =>({url, headers: cryptoApiHeaders})


export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) =>({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      })
  })
});



export const {
  useGetCryptosQuery,
} = cryptoApi;

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     limit: '50',
//     offset: '0',
//     orderBy: '24hVolume',
//     orderDirection: 'desc'
//   },
//   headers: {
//     'X-RapidAPI-Key': '0dc7bf0385msh98a8901abe94366p112bd3jsna99576616087',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// }

