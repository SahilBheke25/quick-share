import { Equipments } from "../types/types";
import tractorImg from "../assets/Images/tractor.png";
import "../shared/styles/normalize.css";
import "../shared/styles/homeSytle.css";

type Props = {
  data: Equipments[] | undefined
}

const LendedComponent = ({data}: Props) => {
  return (
    <>
      <div className="card-section flex w100 justify-center">
        <div className="card-holder flex">
          {data?.map((equipment) => (
            <div className="card" key={equipment.id}>
              <div className="card-content">
                <img src={tractorImg} alt="Tractor" className="card-img" />
                <h2 className="card-title">{equipment.equipment_name}</h2>
                <p className="card-price">
                  ₹ {equipment.rent_per_day}<text id="future-scope">/day</text>
                </p>
                <p className="card-subtitle">Quantity: <text>{equipment.quantity}</text></p>
                <p className="card-subtitle">Uploaded at: <text>{equipment?.uploaded_at?.split("T")[0]}</text></p>
                <p className="card-subtitle">{equipment.description}</p>
                
              </div>
              {/* <div className="card-buttons flex">
                <button className="rent-btn" onClick={handleRent}>Rent now</button>
                <button className="details-btn" >Details</button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default LendedComponent;