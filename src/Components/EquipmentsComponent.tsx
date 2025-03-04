import EquiImg from "../assets/login.jpg";
import { Equipments, Requirement, User } from "../types/types";
import "./styles/equipmentPageStyle.css";
import "../shared/styles/normalize.css";
import "./styles/modelWindow.css";
import { useState } from "react";

type Props = {
  equipment?: Equipments;
  owner?: User;
  handleRent: () => void;
  isModalOpen: boolean;
  closeModal: () => void;
  placeOrder: () => void;
};

const EquipmentComponent = ({
  equipment,
  owner,
  handleRent,
  isModalOpen,
  closeModal,
  placeOrder
}: Props) => {
  const [quantity, setQuantity] = useState<number | "">("");
  const [rentStart, setRentStart] = useState<Date | null>(null);
  const [rentEnd, setRentEnd] = useState<Date | null>(null);
  const [error, setError] = useState<string>("");

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      if (equipment?.quantity && value > equipment.quantity) {
        setError("Quantity not available");
      } else {
        setError("");
        setQuantity(value);
      }
    } else {
      setError("");
      setQuantity("");
    }
  };
  // Handle Start Date Selection
  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedDate = event.target.value
      ? new Date(event.target.value)
      : null;
    if (!selectedDate) {
      setError("Please select a start date.");
      return;
    }
    setRentStart(selectedDate);
    setRentEnd(null); // Reset end date when start date changes
    setError(""); // Clear errors when valid
  };

  // Handle End Date Selection
  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value
      ? new Date(event.target.value)
      : null;
    if (!selectedDate) {
      setError("Please select an end date.");
      return;
    }
    if (selectedDate && rentStart && selectedDate <= rentStart) {
      setError("End date must be greater than the start date.");
      return;
    }
    setRentEnd(selectedDate);
    setError(""); // Clear errors when valid
  };

  // Handle Order Placement
  const handlePlaceOrder = () => {
    if (!rentStart || !rentEnd) {
      setError("Both start date and end date are required.");
      return;
    }
    if (!quantity || quantity <= 0) {
      setError("Please select a valid quantity.");
      return;
    }
    console.log("Order Details:", {
      quantity,
      rentStart,
      rentEnd,
      equipment: equipment?.equipment_name,
    });
    closeModal();
    const rentStartISO = new Date(rentStart).toISOString().toString();
  const rentEndISO = new Date(rentEnd).toISOString().toString();

    const obj : Requirement = {
      billingData: {
        rent_at: rentStartISO,
        rent_till: rentEndISO,
        quantity: quantity
      }
    }
    placeOrder(obj)
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
              <a href="#" className="action-link">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/54/54628.png"
                  alt="Share Icon"
                  className="icon"
                />
                Share
              </a>
              <a href="#" className="action-link">
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
          <button className="rent-btn" onClick={handleRent}>
            Rent
          </button>
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
            <div className="form-group">
              <label>Quantity:</label>
            
              <input
                type="number"
                min="1"
                max={equipment?.quantity}
                value={quantity}
                onChange={handleQuantityChange}
              />
         
            </div>

            <div className="form-group">
              <label htmlFor="start-date">Start Date:</label>
              <input
                type="date"
                id="start-date"
                min={new Date().toISOString().split("T")[0]}
                value={rentStart ? rentStart.toISOString().split("T")[0] : ""}
                onChange={handleStartDateChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="end-date">End Date:</label>
              <input
                type="date"
                id="end-date"
                value={rentEnd ? rentEnd.toISOString().split("T")[0] : ""}
                onChange={handleEndDateChange}
                disabled={!rentStart}
                min={rentStart ? rentStart.toISOString().split("T")[0] : ""}
              />
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button onClick={closeModal}>Cancel</button>
            <button onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      )}
    </>
  );
};

export default EquipmentComponent;
