import CreateEquipmentComponent from '../Components/CreateEquipmentComponent'
import { useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useCreateEquipmentMutation } from '../redux/rtk/slice';
import { CreateEquipmentsType } from '../types/types';


export const CreateEquipmentContainer = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const [createEquipment] = useCreateEquipmentMutation();

  if (!userId) {
    toast.error('Please Login First');
    navigate('/');
  }

  const handleCreateEquipment = async () => {
    console.log("sdafasfas")
    const equipmentData: CreateEquipmentsType = {
      equipment_name: values.name,
      description: values.description,
      rent_per_day: Number(values.price),
      quantity: Number(values.quantity),
      equipment_img: "dummyImg",
      user_id: Number(userId),
    }
    console.log("Equipment data: ", equipmentData)

    try{
      const result = await createEquipment(equipmentData).unwrap();
      console.log("response: ", result);

      if (result.error_code) {
        toast.error("Equipment Creation failed. Try Again!!!!!");
      } else if (result.data.id) {
        toast.success("Equipment Created Successfully");
        navigate("/home", { replace: true });
      }
    }
    catch(error){
      console.error("Failed to create equipment: ", error);
      toast.error("Equipment Creation failed. Try Again!");
    }
  }

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: 0,
      quantity: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, " mustbe atleast 3 characters")
        .max(15, "mustbe at most 15 characters")
        .required("*required"),
      description: Yup.string()
        .min(3, "mustbe at least 3 characters")
        .max(30, "mustbe at most 15 characters")
        .required("*required"),
      price: Yup.number()
        .min(1, "mustbe at least 1")
        .required("*required"),
      quantity: Yup.number()
        .min(1, "mustbe at least 1")
        .required("*required"),
    }),
    onSubmit: handleCreateEquipment

  });
  return (
    <CreateEquipmentComponent handleChange={handleChange} handleSubmit={handleSubmit} touched={touched} errors={errors}/>
  )
}

export default CreateEquipmentContainer;
