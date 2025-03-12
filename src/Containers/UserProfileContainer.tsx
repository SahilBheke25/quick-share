import UserProfileComponent from "../Components/UserProfileComponent";
import { useFormik } from "formik";
import { User } from "../types/types";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import UserProfileValidation from "./validationSchema/userProfile";
import { useEffect } from "react";
import {
  apiSlice,
  useGetUserProfileByIdQuery,
  useUpdateUserProfileMutation,
} from "../redux/rtk/api";

const messages = {
  errorMessage: "failed to update profile",
  successMessage: "Profile Updated Successfully"
}

const UserProfileContainer = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  const [updatedUserData, { isError }] = useUpdateUserProfileMutation();
  const { data: user } = useGetUserProfileByIdQuery(Number(id ?? "0"));

  useEffect(() => {
    if (isError) {
      toast.error(messages.errorMessage);
    }
  }, [isError])
  
  const updateUser = () => {
    const updatedUser: User = {
      ...user,
      id: user?.data.id as number,
      username: user?.data.username as string,
      phone: user?.data.phone as string,
      uid: user?.data.uid as number,
      firstname: values.firstname as string,
      address: values.address as string,
      pincode: values.pincode as number,
      email: values.email as string,
      lastname: values.lastname as string,
    };
    updatedUserData(updatedUser);
    toast.success(messages.successMessage);
    dispatch(apiSlice.util.invalidateTags(["USER_PROFILE"]));
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      firstname: user?.data.firstname,
      lastname: user?.data.lastname,
      address: user?.data.address,
      pincode: user?.data.pincode,
      email: user?.data.email,
    },
    validationSchema: UserProfileValidation,
    onSubmit: updateUser,
  });

  return (
    <UserProfileComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      values={values}
    />
  );
};

export default UserProfileContainer;
