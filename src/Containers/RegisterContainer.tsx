import CopyRegisterComponent from '../Components/RegisterComponent'
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useRegisterUserMutation } from '../redux/rtk/api';
import { RegistrationData } from '../types/types';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import RegistrationValidation from './validationSchema/register';

const initialValues = {
  username: "",
  password: "",
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  address: "",
  pincode: 0,
  uid: 0,
}

const messages = {
  errorMessage: "Registration failed. Try Again!",
  successMessage: "Registration successful!"
}
const CopyRegisterContainer = () => {

  const [registerUserQuery, {data, error}] = useRegisterUserMutation();
  const navigate = useNavigate()

  const handleRegisterUser = () => {

    const registeredUserData: RegistrationData = {
      ...values,
      id: 0,
      pincode: Number(values.pincode),
      uid: Number(values.uid),
    }

    registerUserQuery(registeredUserData)
    
    useEffect(()=>{
      if(error){
        console.log("Error: ", error)
        toast.error(messages.errorMessage)
      }
      else{
        toast.success(messages.successMessage)
        navigate('/')
      }
    }, [data, error])
  }

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
      initialValues: initialValues,

      validationSchema: RegistrationValidation,
      onSubmit: handleRegisterUser,
    });

  return (
    <CopyRegisterComponent 
    handleChange={handleChange} 
    handleSubmit={handleSubmit} 
    errors={errors} 
    touched={touched} />
  )
}

export default CopyRegisterContainer;