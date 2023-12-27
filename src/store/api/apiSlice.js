import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://app.kagaba.tech' }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/user/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        getRestaurants: builder.query({
            query: (data) => ({
                url: '/admin/restaurants',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
            }),
        }),
    })
})

export const { useLoginMutation, useGetRestaurantsQuery } = apiSlice