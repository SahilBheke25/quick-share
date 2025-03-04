import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Bill, Equipments, LoginError, Requirement, Resp, User, UserCredentials, UserDetails } from "../../types/types";

interface AuthState {
  user: User | null;
}

// Initial state
const initialState: AuthState = {
  user: null,
};

// Create user slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload; // Store user data in Redux
    },
    logout: (state) => {
      state.user = null; // Clear user on logout
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

// interface CounterState {
//   value: number;
// }

// const initialState: UserCredentials = { username: "", password: "" };

export const apiSlice = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => {
    return {
      userLogin: builder.mutation<UserDetails, UserCredentials>({
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
      getUserProfileById: builder.query<UserDetails, number>({
        query: (id) => ({
          url: `/user/${id}`,
        })
      }),
      getOwnerByEquipId: builder.query<UserDetails, number>({
        query: (id) => ({
          url: `/owner/equipment/${id}`
        })
      }),
      rentEquipment: builder.mutation<Bill, Requirement>({
        query:(requirement) => ({
          url: `users/${requirement.userId}/equipments/${requirement.equipmentId}/rent`,
          method: "POST",
          body: requirement.billingData,
        })
      })
    };
  },
});

export const {
  useUserLoginMutation,
  useGetQuipmentsQuery,
  useGetEquipmentByIdQuery,
  useGetUserProfileByIdQuery,
  useGetOwnerByEquipIdQuery,
  useRentEquipmentMutation
} = apiSlice;

// export const { login } = loginSlice.actions
// export default loginSlice.reducer
