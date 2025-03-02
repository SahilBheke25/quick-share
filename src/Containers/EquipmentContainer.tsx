import { useParams } from "react-router-dom";
import { useGetEquipmentByIdQuery } from "../redux/slice/slice";
import EquipmentComponent from "../Components/EquipmentComponent";

const EquipmentContainer = () => {
  // const { id } = useParams();
  const id:number = 18
  const { data } = useGetEquipmentByIdQuery(id);
  console.log("data: ", data);
  return (
    <>
    <h1>Fetching Equipment</h1>
  <EquipmentComponent data={data} />
  </>
);
};
export default EquipmentContainer;
