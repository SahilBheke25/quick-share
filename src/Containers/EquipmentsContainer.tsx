import { useParams } from "react-router-dom";
import {
  useGetEquipmentByIdQuery,
  useGetOwnerByEquipIdQuery,
  useGetUserProfileByIdQuery,
  useRentEquipmentMutation,
} from "../redux/rtk/slice";
import EquipmentComponent from "../Components/EquipmentsComponent";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Requirement } from "../types/types";

const EquipmentContainer = () => {

  const { id } = useParams();
  const [userId, setUserId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  console.log("renting user: ", user?.id)

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
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };


  const [rent] = useRentEquipmentMutation();
  // const navigate = useNavigate();

  // const authenticate = async (user: UserCredentials) => {
  //   try {
  //     const response = await userLogin(user).unwrap();
  //     dispatch(setUser(response.data)); // Save user in Redux
  //     console.log("Login successful:", response.data);
  //     navigate("/home");
  //   } catch (err) {
  //     console.error("Login failed:", err);
  //     alert("Login failed. Please check your credentials.");
  //   }
  // };

  const placeOrder =  async (req: Requirement) => {
    req.userId = user?.id
    req.equipmentId = equipmentData?.id
    try{
      const response = await rent(req).unwrap();
      console.log("res: ", response)
    }catch(err){
      console.log("rent failded ", err)
    }
  }

  return (
    <>
      <EquipmentComponent 
      equipment={equipmentData} 
      owner={ownerData?.data} 
      handleRent={handleRent} 
      isModalOpen={isModalOpen} 
      closeModal={closeModal}
      placeOrder={placeOrder}/>
    </>
  );
};
export default EquipmentContainer;
