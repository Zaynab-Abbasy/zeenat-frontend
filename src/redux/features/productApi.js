import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ category, color, subCategory }) => {
        const categoryParam = category ? `category=${category.toLowerCase()}` : '';
        const subcategoryParam = subCategory ? `subCategory=${subCategory.toLowerCase()}` : '';
        const colorParam = color ? `color=${color.toLowerCase()}` : '';
        const queryString = [categoryParam, subcategoryParam, colorParam].filter(Boolean).join('&');
        return `http://127.0.0.1:5000/productall?${queryString}`;
      },
      providesTags: ['Products']
    }),
  // Add more endpoints if needed
  

    getProductType: builder.query({
      query: ({ type, query }) => `http://127.0.0.1:5000/getproductbytype/${type}?query=${query}`,



      providesTags:['ProductType']
    }),
    getOfferProducts: builder.query({
      query: (type) => `/offer?type=${type}`,
      providesTags:['OfferProducts']
    }),
    getPopularProductByType: builder.query({
      query: (type) => `/popular/${type}`,
      providesTags:['PopularProducts']
    }),
    getTopRatedProducts: builder.query({
      query: () => `http://127.0.0.1:5000/top-rated-products`,
      providesTags:['TopRatedProducts']
    }),
    
    // get single product
    getProduct: builder.query({
      query: (id) => `http://127.0.0.1:5000/productdetails/${id}`,
      providesTags: (result, error, arg) => [{ type: "Product", id: arg }],
      invalidatesTags: (result, error, arg) => [
        { type: "RelatedProducts", id: arg },
      ],
    }),
    
    // get related products
    getRelatedProducts: builder.query({
      query: (id) => `related-product/${id}`,
      providesTags: (result, error, arg) => [
        { type: "RelatedProducts", id: arg },
      ],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductTypeQuery,
  useGetOfferProductsQuery,
  useGetPopularProductByTypeQuery,
  useGetTopRatedProductsQuery,
  useGetProductQuery,
  useGetRelatedProductsQuery,
} = productApi;
