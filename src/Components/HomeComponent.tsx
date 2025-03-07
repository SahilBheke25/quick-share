import tractorImg from "../assets/Images/tractor.png";
import "../shared/styles/normalize.css";
import "../shared/styles/homeSytle.css";
import { Equipments } from "../types/types";

type Props = {
  data : Equipments[] | undefined,
  handleEquipment: (id:number) => void
  handleRent: () => void
}
const HomeComponent = ({data, handleEquipment}: Props) => {
  console.log("data: ", data)
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
                {/* <button className="rent-btn" onClick={handleRent}>Rent now</button> */}
                <button className="details-btn" onClick={() => handleEquipment(equipment.id)}>Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
