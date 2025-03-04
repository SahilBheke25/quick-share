import { useGetQuipmentsQuery } from "../redux/rtk/slice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import tractorImg from "../assets/login.jpg";
import "../shared/styles/normalize.css";
import "../shared/styles/homeSytle.css";

const HomeComponent = () => {
  const { data, isLoading, error } = useGetQuipmentsQuery();
  const navigate = useNavigate();

  if (isLoading) return <div>Loading.....</div>;

  console.log("Equipments Data:", data);

  const handleEquipmentDetails = (id: number) => {
    navigate(`/equipment/${id}`);
  };

  return (
    <>
      <div className="card-section flex w100 justify-center">
        <div className="card-holder flex">
          {data?.map((equipment) => (
            <div className="card" key={equipment.id}>
              <div className="card-content">
                <img src={tractorImg} alt="Tractor" className="card-img" />
                <h2 className="card-title">{equipment.equipment_name}</h2>
                <p className="card-subtitle">{equipment.description}</p>
                <p className="card-price">
                  ₹ {equipment.rent_per_day}<text id="future-scope">/day</text>
                </p>
              </div>
              <div className="card-buttons flex">
                <button className="rent-btn">Rent now</button>
                <button className="details-btn" onClick={() => handleEquipmentDetails(equipment.id)}>Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
