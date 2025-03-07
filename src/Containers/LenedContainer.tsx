import LendedComponent from "../Components/LendedComponent";
import { useGetLendedEquipmentsQuery } from "../redux/rtk/slice";

const LenedContainer = () => {

  const userId = localStorage.getItem("userId");

  if (!userId) {
    console.log("User not found");
    return (
      <div className="card-section flex w100 justify-center">
        <h1>No Equipment Lended</h1>
      </div>
    );
  }

  const { data } = useGetLendedEquipmentsQuery(Number(userId) ?? -1, {
    skip: !userId, 
  });  

  console.log("Lended Data:", data);

  if (!data?.data || data?.data.length === 0) {
    console.log("No Equipment Lended");
    return (
      <div className="card-section flex w100 justify-center">
        <h1>No Equipment Lended</h1>
      </div>
    );
  }

  console.log(
    'hello'
  )
  return <LendedComponent data={data.data ?? []} />;
};

export default LenedContainer;
