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
        approveRestaurant: builder.mutation({
            query: (data) => ({
                url: `/auth/restaurant/verify/${data?.phone}`,
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${data?.token}`,
                },
            }),
        }),
        getDeliveries: builder.query({
            query: (data) => ({
                url: `/admin/sales/deliveries?restaurant_id=${data.restaurant_id}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
            }),
        }),
        getDrivers: builder.query({
            query: (data) => ({
                url: `/admin/users?role=rider`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
            }),
        }),
        getRestaurantMenu: builder.query({
            query: (data) => ({
                url: `/customer/menu?restaurant_id=${data.restaurant_id}&page=${data.page}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
            })
        }),
        getRestaurantReviews: builder.query({
            query: (data) => ({
                url: `/customer/add-review/${data.reviewee_type}/${data.reviewee_id}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
            })
        }),
        getDriverDeliveries: builder.query({
            query: (data) => ({
                url: `/admin/sales/deliveries?rider_id=${data.driver_id}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
            })
        }),
        getOrders: builder.query({
            query: (data) => ({
                url: '/admin/sales/orders',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
            }),
        }),
        getSingleOrder: builder.query({
            query: (data) => ({
                url: `/admin/sales/orders/${data.order_id}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
            }),
        }),
    }),
})

export const {
    useLoginMutation,
    useGetRestaurantsQuery,
    useApproveRestaurantMutation,
    useGetDeliveriesQuery,
    useGetDriversQuery,
    useGetRestaurantMenuQuery,
    useGetRestaurantReviewsQuery,
    useGetDriverDeliveriesQuery,
    useGetOrdersQuery,
    useGetSingleOrderQuery
} = apiSlice
