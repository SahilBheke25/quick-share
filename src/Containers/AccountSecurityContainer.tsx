import { useSelector } from "react-redux";
import AccountSecurityComponent from "../Components/AccountSecurityComponent";
import { RootState } from "../redux/store";
import { useFormik } from "formik";
import * as Yup from "yup";


const AccountSecurityContainer = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log("usreprofile: ", user);
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: user?.email,
      password: "",
      newPassword: "",
      reTypeNewPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(8, `Must be atleast 8 characters`)
        .required("Required"),
      newPassword: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(8, `Must be atleast 8 characters`)
        .required("Required"),
      reTypePassword: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(8, `Must be atleast 8 characters`)
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <AccountSecurityComponent
      values={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default AccountSecurityContainer;
