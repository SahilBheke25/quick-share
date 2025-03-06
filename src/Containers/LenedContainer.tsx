import { useSelector } from "react-redux";
import LendedComponent from "../Components/LendedComponent"
import { useGetLendedEquipmentsQuery } from "../redux/rtk/slice";
import { RootState } from "../redux/store";

const LenedContainer = () => {
  const user = useSelector((state: RootState) => state.auth.user)

  const {data} = useGetLendedEquipmentsQuery(user?.id ?? -1, {
    skip: !user?.id,
  })
  console.log("lended data: ", data)
  return (
    <LendedComponent data={data ?? []}/>
  )
}
export  default LenedContainer;