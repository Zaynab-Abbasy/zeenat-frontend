import { apiSlice } from "@/redux/api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    // get offer coupon
    getOfferCoupons: builder.query({
      query: () => `http://127.0.0.1:5000/coupons`,
      providesTags:['Coupon'],
      keepUnusedDataFor: 600,
    }),
  }),
});

export const { useGetOfferCouponsQuery } = authApi;
