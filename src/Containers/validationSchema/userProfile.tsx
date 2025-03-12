import * as Yup from "yup";

const UserProfileValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  firstname: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(3, "Must be atleast 3 characters")
    .required("Required"),
  lastname: Yup.string()
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
});

export default UserProfileValidation