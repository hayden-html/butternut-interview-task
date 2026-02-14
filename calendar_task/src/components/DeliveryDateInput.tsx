import { useState } from "react";
import { ReactComponent as Calendar } from "../assets/calendar.svg";
import { ReactComponent as ChevronRight } from "../assets/chevron-right.svg";
import { ReactComponent as Van } from "../assets/van.svg";
import "../styles/deliveryDateInput.sass";
import SelectDeliveryDateModal from "./SelectDeliveryDateModal";

export default function DeliveryDateInput() {
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(true);

  return (
    <>
      <div className="delivery_input">
        <div className="title">
          <h1 className="title_heading">Choose your delivery day</h1>
          <p className="title_hint">Delivery is always free</p>
        </div>
        <button
          className="selected_delivery"
          onClick={() => setIsDeliveryModalOpen(true)}
        >
          <div className="selected_delivery__date">
            <p className="delivery_date">Fri Feb 13</p>
            <div className="delivery_hint">
              <Van aria-label="delivery van" className="van_icon" />
              <p className="">Earliest delivery</p>
            </div>
          </div>
          <div className="delivery_change_date">
            <div className="button_icon">
              <Calendar
                aria-label="day of calendar month"
                className="calendar_icon"
              />
              <div className="calendar_text">10</div>
            </div>
            <div className="button">
              <span className="button_text">Change</span>
              <ChevronRight aria-label="arrow" className="chevron" />
            </div>
          </div>
        </button>
      </div>

      {isDeliveryModalOpen && (
        <SelectDeliveryDateModal setIsOpen={setIsDeliveryModalOpen} />
      )}
    </>
  );
}
