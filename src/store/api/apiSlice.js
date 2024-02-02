import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://app.kagaba.tech" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/user/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getRestaurants: builder.query({
      query: (data) => ({
        url: "/admin/restaurants",
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    approveRestaurant: builder.mutation({
      query: (data) => ({
        url: `/auth/restaurant/verify/${data?.phone}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data?.token}`,
        },
      }),
    }),
    approveRider: builder.mutation({
      query: (data) => ({
        url: `/auth/bike/verify/${data?.phone}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data?.token}`,
        },
      }),
    }),
    getDeliveries: builder.query({
      query: (data) => ({
        url: `/admin/sales/deliveries?restaurant_id=${data.restaurant_id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getDrivers: builder.query({
      query: (data) => ({
        url: `/admin/users?role=rider`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getRestaurantMenu: builder.query({
      query: (data) => ({
        url: `/customer/menu?restaurant_id=${data.restaurant_id}&page=${data.page}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getRestaurantReviews: builder.query({
      query: (data) => ({
        url: `/customer/add-review/${data.reviewee_type}/${data.reviewee_id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getDriverDeliveries: builder.query({
      query: (data) => ({
        url: `/admin/sales/deliveries?rider_id=${data.driver_id}&page=${data.page}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getOrders: builder.query({
      query: (data) => ({
        url: "/admin/sales/orders",
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getSingleOrder: builder.query({
      query: (data) => ({
        url: `/admin/sales/orders/${data.order_id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getTotalOrdersCount: builder.query({
      query: (data) => ({
        url: `/admin/sales/statistics/total-orders`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getCompletedOrdersCount: builder.query({
      query: (data) => ({
        url: `/admin/sales/statistics/total-orders?status=delivered`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getDeliveringOrdersCount: builder.query({
      query: (data) => ({
        url: `/admin/sales/statistics/total-orders?status=paid`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getPendingOrdersCount: builder.query({
      query: (data) => ({
        url: `/admin/sales/statistics/total-orders?status=pending`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getTotalIncome: builder.query({
      query: (data) => ({
        url: `/admin/sales/statistics/total-cash-in`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getIncomeFromFood: builder.query({
      query: (data) => ({
        url: `/admin/sales/statistics/total-purchase`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getIncomeFromDeliveries: builder.query({
      query: (data) => ({
        url: `/admin/sales/statistics/total-delivery-fees`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getTotalUsers: builder.query({
      query: (data) => ({
        url: `/admin/sales/statistics/number-of-users`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getTotalUsersWhoOrdered: builder.query({
      query: (data) => ({
        url: `/admin/sales/statistics/number-of-users?withOrders=true`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getTotalApprovedDrivers: builder.query({
      query: (data) => ({
        url: `/admin/sales/statistics/number-of-riders?verified=true`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getTotalUnApprovedDrivers: builder.query({
      query: (data) => ({
        url: `/admin/sales/statistics/number-of-riders?verified=false`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getTotalVerifiedRestaurants: builder.query({
      query: (data) => ({
        url: `/admin/sales/statistics/number-of-restaurants?verified=true`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getTotalUnVerifiedRestaurants: builder.query({
      query: (data) => ({
        url: `/admin/sales/statistics/number-of-restaurants?verified=false`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetRestaurantsQuery,
  useApproveRestaurantMutation,
  useApproveRiderMutation,
  useGetDeliveriesQuery,
  useGetDriversQuery,
  useGetRestaurantMenuQuery,
  useGetRestaurantReviewsQuery,
  useGetDriverDeliveriesQuery,
  useGetOrdersQuery,
  useGetSingleOrderQuery,
  useGetCompletedOrdersCountQuery,
  useGetDeliveringOrdersCountQuery,
  useGetPendingOrdersCountQuery,
  useGetTotalOrdersCountQuery,
  useGetTotalIncomeQuery,
  useGetIncomeFromFoodQuery,
  useGetIncomeFromDeliveriesQuery,
  useGetTotalUsersQuery,
  useGetTotalUsersWhoOrderedQuery,
  useGetTotalApprovedDriversQuery,
  useGetTotalUnApprovedDriversQuery,
  useGetTotalVerifiedRestaurantsQuery,
  useGetTotalUnVerifiedRestaurantsQuery,
} = apiSlice;
