import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Requirement } from "../types/types";
import EquipmentComponent from "../Components/EquipmentsComponent";
import {
  useGetEquipmentByIdQuery,
  useGetUserProfileByIdQuery,
  useRentEquipmentMutation,
} from "../redux/rtk/api";
import toast from "react-hot-toast";

const EquipmentContainer = () => {

  const { id } = useParams();
  const [userId, setUserId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // my user is coming empty
  // const user = useSelector((state: RootState) => state.auth.user);
  
  const rentingUserId:number =  Number(localStorage.getItem("userId"))

  const { data: equipmentData, refetch} = useGetEquipmentByIdQuery(id ?? "0");
  // Update userId when equipmentData is available
  useEffect(() => {
    if (equipmentData?.data.user_id) {
      setUserId(equipmentData?.data.user_id);
    }
  }, [equipmentData]);

  // Fetch user data only when userId is set
  const { data: ownerData } = useGetUserProfileByIdQuery(userId ?? -1, {
    skip: !userId,
  });

  const handleRent = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };


  const [rent] = useRentEquipmentMutation();

  const placeOrder =  async (req: Requirement) => {
    req.userId = rentingUserId 
    req.equipmentId = equipmentData?.data.id as number
    console.log("placeOrder: ", req)
    try{
      const response = await rent(req).unwrap();
      toast.success("Order Placed Successfully")
      refetch()
      console.log("res: ", response)
    }catch(err){
      console.log("rent failded ", err)
    }
  }

  return (
    <>
      <EquipmentComponent 
      equipment={equipmentData?.data} 
      owner={ownerData?.data} 
      handleRent={handleRent} 
      isModalOpen={isModalOpen} 
      closeModal={closeModal}
      placeOrder={placeOrder}/>
    </>
  );
};
export default EquipmentContainer;
