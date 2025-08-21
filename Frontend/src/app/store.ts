import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/home/homeSlice";
import { portfolioApi } from "../shared/api/portfolioApi";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    // ✅ اضافه کردن reducer مربوط به RTK Query
    [portfolioApi.reducerPath]: portfolioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // ✅ اضافه کردن middleware مربوط به RTK Query
    getDefaultMiddleware().concat(portfolioApi.middleware),
});

// Type‌ها
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
