import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-key': '34ab6c084bmsha05cfc05aecd44ep13f79cjsn7da6d2a010a7', /*  34ab6c084bmsha05cfc05aecd44ep13f79cjsn7da6d2a010a7 */
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({
    url,
    headers: cryptoNewsHeaders
});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
  });

export const { useGetCryptoNewsQuery } = cryptoNewsApi;