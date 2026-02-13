import { ReactComponent as Calendar } from "../assets/calendar.svg";
import { ReactComponent as ChevronRight } from "../assets/chevron-right.svg";
import { ReactComponent as Van } from "../assets/van.svg";

export default function DeliveryDateInput() {
  return (
    <div className="delivery-input--container">
      <div className="title--container">
        <h1 className="title--heading">Choose your delivery day</h1>
        <p className="title--hint p-1">Delivery is always free</p>
      </div>
      <button className="selected-delivery--container">
        <div className="selected-delivery--date">
          <p>Fri Feb 13</p>
          <div className="delivery--hint">
            <Van aria-label="delivery van" />
            <p>Earliest delivery</p>
          </div>
        </div>
        <div className="delivery--button">
          <div className="button--icon">
            <Calendar aria-label="day of calendar month" />
          </div>
          <div className="button--text">
            <span>Change</span>
            <ChevronRight aria-label="arrow" />
          </div>
        </div>
      </button>
    </div>
  );
}
