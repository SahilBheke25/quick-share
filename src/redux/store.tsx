import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './rtk/api'
import authReducer from "./rtk/slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]:  apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;