import CopyRegisterComponent from '../Components/CopyRegisterComponent'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useRegisterUserMutation } from '../redux/rtk/slice';
import { RegistrationData } from '../types/types';
import { useNavigate } from 'react-router-dom';

const CopyRegisterContainer = () => {

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
      pincode: Number(values.pincode),
      uid: Number(values.uid),
    }
    console.log("Registration data: ", registeredUserData)
    registerUserQuery(registeredUserData)
   
    if(error){
      console.log("Error: ", error)
      toast.error("Registration failed. Try Again!")
    }
    else if(data){
      toast.success("Registration successful!")
      navigate('/')
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
          .min(3, "atleast 3 characters")
          .max(15, "atmost 15 characters")
          .required("*required"),
  
        password: Yup.string()
          .min(8, "atleast 8 characters")
          .required("*required"),
  
        firstName: Yup.string()
          .min(3, "atleast 3 characters")
          .max(15, "atmost 15 characters")
          .required("*required"),
    
        lastName: Yup.string()
          .min(3, "atleast 3 characters")
          .max(15, "atmost 15 characters")
          .required("*required"),
    
        email: Yup.string()
          .email("Invalid")
          .required("*required"),
    
        phone: Yup.string()
          .matches(/^\d{10}$/, "must be 10 digits")
          .required("*is required"),
    
        address: Yup.string()
          .min(5, "atleast 5 characters")
          .max(50, "atmost 50 characters")
          .required("*required"),
    
        pincode: Yup.number()
          .typeError("must be a number")
          .integer("must be an integer")
          .positive("must be positive")
          .test(
            "len",
            "Enter a valid 6-digit pincode",
            (val) => val?.toString().length === 6
          )
          .required("*required"),
    
        uid: Yup.number()
          .typeError("mustbe a number")
          .integer("mustbe an integer")
          .positive("mustbe positive")
          .test(
            "len",
            "mustbe be 12 digits",
            (val) => val?.toString().length === 12
          )
          .required("*required"),
      }),
      onSubmit: handleRegisterUser,
    });
  return (
    <CopyRegisterComponent handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} touched={touched} />
  )
}

export default CopyRegisterContainer;