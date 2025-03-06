import { useGetQuipmentsQuery } from "../redux/rtk/slice";
import HomeComponent from "../Components/HomeComponent";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const HomeContainer = () => {

  const { data, isLoading, error } = useGetQuipmentsQuery();
  const navigate = useNavigate();

  if (isLoading){
    toast.loading
  }
  if(error){
    toast.error("Fetching failed")
  }

  console.log("Equipments Data:", data);

  const handleEquipment= (id: number) => {
    navigate(`/equipment/${id}`);
  };

  const handleRent = () => {
    // navigate()
  }

  return <HomeComponent data={data} handleEquipment={handleEquipment} handleRent={handleRent}/>;
};

export default HomeContainer;
