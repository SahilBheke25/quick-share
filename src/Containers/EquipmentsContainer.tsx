import { useParams } from "react-router-dom";
import {
  useGetEquipmentByIdQuery,
  useGetOwnerByEquipIdQuery,
  useGetUserProfileByIdQuery,
} from "../redux/rtk/slice";
import EquipmentComponent from "../Components/EquipmentsComponent";
import { useEffect, useState } from "react";

const EquipmentContainer = () => {

  const { id } = useParams();
  const [userId, setUserId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { data: equipmentData } = useGetEquipmentByIdQuery(id ?? "-1");

  // Update userId when equipmentData is available
  useEffect(() => {
    if (equipmentData?.user_id) {
      setUserId(equipmentData.user_id);
    }
  }, [equipmentData]);

  // Fetch user data only when userId is set
  const { data: ownerData } = useGetUserProfileByIdQuery(userId ?? -1, {
    skip: !userId,
  });

  const handleRent = () => {
    setIsModalOpen(true);  // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <>
      <EquipmentComponent 
      equipment={equipmentData} 
      owner={ownerData?.data} 
      handleRent={handleRent} 
      isModalOpen={isModalOpen} 
      closeModal={closeModal}/>
    </>
  );
};
export default EquipmentContainer;
