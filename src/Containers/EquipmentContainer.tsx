import { useParams } from "react-router-dom";
import { useGetEquipmentByIdQuery, useGetUserProfileByIdQuery } from "../redux/slice/slice";
import EquipmentComponent from "../Components/EquipmentComponent";

const EquipmentContainer = () => {
  // const { id } = useParams();
  const id:number = 18
  const {data}= useGetEquipmentByIdQuery(id);
  // console.log("data: ", data);
  
  return (
    <>
    <h1>{data?.equipment_name}</h1>
  <EquipmentComponent/>
  </>
);
};
export default EquipmentContainer;
