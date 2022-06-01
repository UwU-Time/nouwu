import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * 
 * RTK query API service for fetching data from the server
 * neeeds to be called with the following parameters:
 * reducerPath: the reducer path to be used
 * baseQuery: the base query to be used
 * baseUrl: the base url to be used
 * 
 * We are using this to create an API service for a livestreaming app that has chat and messageboard in addition to the main video feed.
 * This will query our own custom API that we have created for the livestreaming app.
 * 
 * 
 * In types folder we will create a file called nouwu.d.ts that will contain the types for the API.
 */ 

export const noUwUAPI = createApi({
    reducerPath: 'nouwuAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.nouwu.com/v1/' }),
    endpoints: (builder) => ({
        getStream: builder.query<

    })