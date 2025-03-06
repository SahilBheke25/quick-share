import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ApiData, Bill, Equipments, LoginError, Requirement, Resp, User, UserCredentials, UserDetails } from "../../types/types";

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
        async onQueryStarted(_, { queryFulfilled }) {
          try {
            const { data, meta } = await queryFulfilled; // Get response metadata
            const authHeader = meta?.response?.headers.get("Authorization"); // Extract Authorization header
            console.log("authHeader: ", authHeader)
            if (authHeader) {
              localStorage.setItem("token", authHeader); // Store token in localStorage
              localStorage.setItem("userId", data.data.id.toString())
            }
            // if (authHeader?.startsWith("Bearer ")) {
            //   const token = authHeader.split(" ")[1]; // Extract only the token part
              // localStorage.setItem("token", authHeader); // Store token in localStorage
            // }
          } catch (error) {
            console.error("Error storing token:", error);
          }
        },
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
        }),
        async onQueryStarted(arg, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            dispatch(setUser(data.data));
            if (!data.error_code) {
              // localStorage.setItem("token", data.data.token);
            }
          } catch (error) {
            console.error("User Data fetching failed: ", error);
          }
        }
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
      }),
      updateUserProfile: builder.mutation<UserDetails, User>({
        query: (updateUser) => ({
          url: `/user/edit-profile/${updateUser.id}`,
          method: "PUT",
          body: updateUser,
        }),
        async onQueryStarted(arg, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            dispatch(setUser(data.data));
            if (!data.error_code) {
              // localStorage.setItem("token", data.data.token);
            }
          } catch (error) {
            console.error("Login failed:", error);
          }
        }
      }),
      getLendedEquipments: builder.query<Equipments[], number>({
        query: (id) => ({
          url: `/users/${id}/equipments/lended`
        }),
        async onQueryStarted(arg, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            console.log("lended query: ", data)
           
          } catch (error) {
            console.error("Login failed:", error);
          }
        }
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
  useRentEquipmentMutation,
  useUpdateUserProfileMutation,
  useGetLendedEquipmentsQuery
} = apiSlice;

// export const { login } = loginSlice.actions
// export default loginSlice.reducer
