import UserProfileComponent from "../Components/UserProfileComponent";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { User } from "../types/types";
import { useUpdateUserProfileMutation } from "../redux/rtk/slice";
import toast from "react-hot-toast";

const UserProfileContainer = () => {
  const [updatedUserData, { data, isError}] = useUpdateUserProfileMutation();
  const user = useSelector((state: RootState) => state?.auth.user);
  console.log("usreprofile: ", user)

  if(isError){
    toast.error("failed to update profile")
  }
  const updateUser = () => {
    const updatedUser: User = {
      ...user,
      id : user?.id as number,
      username : user?.username as string,
      phone: user?.phone as string,
      uid: user?.uid as number,
      firstname: values.firstName as string,
      address: values?.address as string,
      pincode: values?.pincode as number,
      email: values?.email as string,
      lastname: values?.lastName as string,
    };
    console.log("type of pincode: ", typeof updatedUser.pincode);
    updatedUserData(updatedUser);
    console.log("newUser: ", data);
    alert(JSON.stringify(values, null, 2));
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      firstName: user?.firstname,
      lastName: user?.lastname,
      address: user?.address,
      pincode: user?.pincode,
      email: user?.email
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be atleast 3 characters")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      address: Yup.string()
        .min(5, "Must be 5 characters")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      // pincode: Yup.string().length(6, 'Enter valid pincode of 6 digit').required('Required')
      pincode: Yup.number()
        .typeError("Pincode must be a number") // Ensure it's a number
        .integer("Pincode must be an integer")
        .positive("Pincode must be positive")
        .test(
          "len",
          "Enter valid pincode of 6 digits",
          (val) => val?.toString().length === 6
        )
        .required("Required"),
    }),
    onSubmit: updateUser,
  });

  return (
    <UserProfileComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      user={user}
      values={values}
    />
  );
};

export default UserProfileContainer;
