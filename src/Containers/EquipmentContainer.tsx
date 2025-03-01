import { useParams } from "react-router-dom";
import { useGetEquipmentByIdQuery } from "../redux/slice/slice";
import EquipmentComponent from "../Components/EquipmentComponent";

const EquipmentContainer = () => {
  const { id } = useParams();
  const { data } = useGetEquipmentByIdQuery(id);
  console.log("data: ", data);
  return <EquipmentComponent data={data} />;
};
export default EquipmentContainer;
