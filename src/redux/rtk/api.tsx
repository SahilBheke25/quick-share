import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Bill, CreateEquipmentsType, EquipmentDetails, RegisterSuccess, RegistrationData, Requirement, SingleEquipment, User, UserCredentials, UserDetails } from "../../types/types";
import toast from "react-hot-toast";
import { setUser } from "./slice";

export const apiSlice = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["USER_PROFILE"],
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

      getQuipments: builder.query<EquipmentDetails, void>({
        query: () => ({
          url: "/equipments",
        }),
      }),
      getEquipmentById: builder.query<SingleEquipment, string>({
        query: (id) => ({
          url: `/equipments/${id}`,
        }),
      }),
      getUserProfileById: builder.query<UserDetails, number>({
        query: (id) => ({
          url: `/user/${id}`,
        }),
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            dispatch(setUser(data.data));
            if (!data.error_code) {
              // localStorage.setItem("UserData", data.data);
            }
          } catch (error) {
            console.error("User Data fetching failed: ", error);
          }
        },
        providesTags: ["USER_PROFILE"]
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
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
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
      getLendedEquipments: builder.query<EquipmentDetails, number>({
        query: (id) => ({
          url: `/users/${id}/equipments/lended`
        }),
        async onQueryStarted(_, { queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            console.log("lended query: ", data)
           
          } catch (error) {
            console.error("Login failed:", error);
          }
        }
      }),
      registerUser: builder.mutation<RegisterSuccess, RegistrationData>({
        query: (user) => ({
          url: `/user/register`,
          method: "POST",
          body: user,
        }),
        async onQueryStarted(_, { queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            console.log("User Registered: ")
            if (!data.error_code) {
              // localStorage.setItem("token", data.data.token);
            }
          } catch (error) {
            console.error("Login failed:", error);
          }
        }
      }),
      createEquipment: builder.mutation<SingleEquipment, CreateEquipmentsType>({
        query: (equipment) => ({
          url: `/equipments`,
          method: "POST",
          body: equipment,
        }),
        async onQueryStarted(_, { queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;    
            console.log("response: ", data)
                    
            if(data?.error_code){
              toast.error("Equipment Creation failed. Try Again!!!!!")
            }
            else if(data?.data.id){
            }
            else{
              toast.error("Equipment Creation failed. Try Again!")
            }
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
  useGetLendedEquipmentsQuery,
  useRegisterUserMutation,
  useCreateEquipmentMutation
} = apiSlice;

// export const { login } = loginSlice.actions
// export default loginSlice.reducer
