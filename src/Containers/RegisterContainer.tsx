import { useFormik } from "formik";
import * as Yup from "yup";
import RegisterComponent from "../Components/RegisterComponent";
import { useRegisterUserMutation } from "../redux/rtk/slice";
import { RegistrationData } from "../types/types";
import { replace, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RegisterContainer = (e: any) => {
  // e.preventDefault


  const [registerUserQuery, {data, error}] = useRegisterUserMutation();
  const navigate = useNavigate()

  const handleRegisterUser = () => {
    console.log("sdafasfas")
    const registeredUserData: RegistrationData = {
      id: 0,
      username: values.username,
      password: values.password,
      firstname: values.firstName,
      lastname: values.lastName,
      email: values.email,
      phone: values.phone,
      address: values.address,
      pincode: values.pincode,
      uid: values.uid,
    }
    console.log("Registration data: ", registeredUserData)
    registerUserQuery(registeredUserData)
    if(!data?.error_code){
      toast.success("Registration Successfull")
      navigate("/", {replace: true})
    }
    if(error){
      toast.error("Registration failed. Try Again!!!!!")
    }
    else{
      toast.error("Registration failed. Try Again!")
    }
    
  }

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      pincode: 0,
      uid: 0,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .max(15, "Username must be at most 15 characters")
        .required("Username is required"),

      password: Yup.string()
        .min(8, "Password must be at least 3 characters")
        .required("Password is required"),

      firstName: Yup.string()
        .min(3, "First name must be at least 3 characters")
        .max(15, "First name must be at most 15 characters")
        .required("First name is required"),
  
      lastName: Yup.string()
        .min(3, "Last name must be at least 3 characters")
        .max(15, "Last name must be at most 15 characters")
        .required("Last name is required"),
  
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
  
      phone: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone number is required"),
  
      address: Yup.string()
        .min(5, "Address must be at least 5 characters")
        .max(50, "Address must be at most 50 characters")
        .required("Address is required"),
  
      pincode: Yup.number()
        .typeError("Pincode must be a number")
        .integer("Pincode must be an integer")
        .positive("Pincode must be positive")
        .test(
          "len",
          "Enter a valid 6-digit pincode",
          (val) => val?.toString().length === 6
        )
        .required("Pincode is required"),
  
      uid: Yup.number()
        .typeError("UID must be a number")
        .integer("UID must be an integer")
        .positive("UID must be positive")
        .test(
          "len",
          "UID must be exactly 12 digits",
          (val) => val?.toString().length === 12
        )
        .required("UID is required"),
    }),
    onSubmit: handleRegisterUser,
  });

  return <RegisterComponent 
  handleChange={handleChange}
  handleRegisterUser={handleRegisterUser}
  errors= {errors}
  // touched= {touched}
 />;
};

export default RegisterContainer;
