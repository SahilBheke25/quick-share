
import EquiImg from "../assets/login.jpg";
import { Equipments, User } from "../types/types";
import "./styles/equipmentPageStyle.css";
import "../shared/styles/normalize.css";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";

type Props = {
  equipment?: Equipments;
  owner?: User;
  handleRent: () => void;
  isModalOpen: boolean;
  closeModal: () => void;
};
const EquipmentComponent = ({
  equipment,
  owner,
  handleRent,
  isModalOpen,
  closeModal,
}: Props) => {
  const [quantity, setQuantity] = useState<number | "">("");
  const [rentStart, setRentStart] = useState<Date | null>(null);
  const [rentEnd, setRentEnd] = useState<Date | null>(null);

  const handlePlaceOrder = () => {
    console.log("Order Details:", {
      quantity,
      rentStart,
      rentEnd,
      equipment: equipment?.equipment_name,
    });
    closeModal(); // Close modal after submitting
  };
  return (
    <>
      <div className="image-container">
        <img src={EquiImg} alt="Tractor" className="main-image" />
        <div className="thumbnail-container">
          <div className="thumbnail">Img</div>
          <div className="thumbnail">Img</div>
          <div className="thumbnail">Img</div>
          <div className="thumbnail">Img</div>
        </div>
      </div>
      {/* <!-- IMAGES SECTION END --> */}

      {/* <!-- PRODUCT CARD --> */}
      <div className="product-card">
        <div className="first">
          <div className="top-section">
            <span>{equipment?.status}</span>
            <span>Published on: {equipment?.uploaded_at?.split("T")[0]}</span>
          </div>
          <h1 className="title">{equipment?.equipment_name}</h1>
          <h3 className="subtitle">Summary</h3>
          <p className="description">{equipment?.description}</p>
          <div className="price-section">
            <p>₹ {equipment?.rent_per_day}/day</p>
          </div>
          <div className="details">
            <span>Quantity {equipment?.quantity}</span>
            <div className="actions">
              <a
                href="https://www.flaticon.com/free-icons/share"
                title="Share icons"
                className="action-link"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/54/54628.png"
                  alt="Share Icon"
                  className="icon"
                />
                Share
              </a>
              <a
                href="https://www.flaticon.com/free-icons/heart"
                title="Heart icons"
                className="action-link"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                  alt="Save Icon"
                  className="icon"
                />
                Save
              </a>
            </div>
          </div>
          <div className="action">
            <button className="grey-btn">Schedule Tour</button>
            <button className="grey-btn">Message Agent</button>
          </div>
          <button className="rent-btn" onClick={handleRent}>Rent</button>
        </div>
        <div className="last">
          <h3 className="subtitle">Listing Agent</h3>
          <div className="listing-agent">
            <img
              src="Images/profile pic.jpg"
              alt="Agent"
              className="agent-img"
            />
            <div className="agent-info">
              <h4>{owner?.firstname + " " + owner?.lastname}</h4>
              <p>Pune, Maharashtra</p>
            </div>
            <div className="contact-info">
              <p>{owner ? owner?.email : "example@gmail.com"}</p>
              <p>+91 {owner ? owner.phone : "4893240983"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Renting */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Rent Equipment</h2>
            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              max={equipment?.quantity || 10}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />

            <label>Start Date:</label>
            <ReactDatePicker selected={rentStart} onChange={(date) => setRentStart(date)} />

            <label>End Date:</label>
            <ReactDatePicker selected={rentEnd} onChange={(date) => setRentEnd(date)} />

            <button onClick={closeModal}>Cancel</button>
            <button onClick={() => console.log("Order Placed!")}>Place Order</button>
          </div>
        </div>
      )}

      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .modal {
            background: white;
            padding: 20px;
            border-radius: 8px;
            width: 300px;
          }
        `}
      </style>
    </>
  );
};
export default EquipmentComponent;
