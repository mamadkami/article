import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const portfolioApi = createApi({
  reducerPath: "portfolioApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["Category", "PortfolioItem", "Service", "Stat"],
  endpoints: (builder) => ({
    // Categories
    getCategories: builder.query<any[], void>({
      query: () => "/categories",
      providesTags: ["Category"],
    }),
    createCategory: builder.mutation<void, { name: string }>({
      query: (body) => ({
        url: "/categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation<void, { id: number; name: string }>({
      query: ({ id, ...body }) => ({
        url: `/categories/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation<void, number>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),

    // Portfolio Items
    getPortfolioItems: builder.query<any[], void>({
      query: () => "/portfolio_items",
      providesTags: ["PortfolioItem"],
    }),
    createPortfolioItem: builder.mutation<any, any>({
      query: (body) => ({
        url: "/portfolio_items",
        method: "POST",
        body,
      }),
      invalidatesTags: ["PortfolioItem"],
    }),
    updatePortfolioItem: builder.mutation<any, { id: number; data: any }>({
      query: ({ id, data }) => ({
        url: `/portfolio_items/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["PortfolioItem"],
    }),
    deletePortfolioItem: builder.mutation<void, number>({
      query: (id) => ({
        url: `/portfolio_items/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PortfolioItem"],
    }),

    // Services
    getServices: builder.query<any[], void>({
      query: () => "/services",
      providesTags: ["Service"],
    }),
    createService: builder.mutation<any, any>({
      query: (body) => ({
        url: "/services",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Service"],
    }),
    updateService: builder.mutation<any, { id: number; data: any }>({
      query: ({ id, data }) => ({
        url: `/services/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Service"],
    }),
    deleteService: builder.mutation<void, number>({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Service"],
    }),

    // Stats
    getStats: builder.query<any[], void>({
      query: () => "/stats",
      providesTags: ["Stat"],
    }),
    createStat: builder.mutation<any, any>({
      query: (body) => ({
        url: "/stats",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Stat"],
    }),
    updateStat: builder.mutation<any, { id: number; data: any }>({
      query: ({ id, data }) => ({
        url: `/stats/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Stat"],
    }),
    deleteStat: builder.mutation<void, number>({
      query: (id) => ({
        url: `/stats/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Stat"],
    }),
  }),
});

// Export hooks
export const {
  // Categories
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  // PortfolioItems
  useGetPortfolioItemsQuery,
  useCreatePortfolioItemMutation,
  useUpdatePortfolioItemMutation,
  useDeletePortfolioItemMutation,
  // Services
  useGetServicesQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  // Stats
  useGetStatsQuery,
  useCreateStatMutation,
  useUpdateStatMutation,
  useDeleteStatMutation,
} = portfolioApi;
