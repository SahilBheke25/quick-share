import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Equipments, LoginError, UserCredentials } from "../../types/types";

interface CounterState {
  value: number;
}

const initialState: UserCredentials = { username: "", password: "" };

export const apiSlice = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => {
    return {
      userLogin: builder.mutation<LoginError, UserCredentials>({
        query: (userCredential) => ({
          url: "/user/login",
          method: "POST",
          body: userCredential,
        }),
      }),
      getQuipments: builder.query<Equipments[], void>({
        query: () => ({
          url: "/equipments",
        }),
      }),
      getEquipmentById: builder.query<Equipments, string>({
        query: (id) => ({
          url: `/equipments/${id}`,
        }),
      }),
    };
  },
});

export const {
  useUserLoginMutation,
  useGetQuipmentsQuery,
  useGetEquipmentByIdQuery,
} = apiSlice;

// export const { login } = loginSlice.actions
// export default loginSlice.reducer
