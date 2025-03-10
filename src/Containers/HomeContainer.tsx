import { useGetQuipmentsQuery } from "../redux/rtk/api";
import HomeComponent from "../Components/HomeComponent";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const HomeContainer = () => {

  const { data, isLoading } = useGetQuipmentsQuery();

  const navigate = useNavigate();
  if (isLoading){
    toast.loading
  }
  if(data?.error_code){
    toast.error("Fetching failed")
  }

  console.log("Equipments Data:", data?.data);

  const handleEquipment= (id: number) => {
    navigate(`/equipment/${id}`);
  };

  const handleRent = () => {
    // navigate()
  }

  return <HomeComponent data={data?.data} handleEquipment={handleEquipment} handleRent={handleRent}/>;
};

export default HomeContainer;
