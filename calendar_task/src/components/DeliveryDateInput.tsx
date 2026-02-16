import { useState } from "react";
import { ReactComponent as Calendar } from "../assets/calendar.svg";
import { ReactComponent as ChevronRight } from "../assets/chevron-right.svg";
import { ReactComponent as Van } from "../assets/van.svg";
import "../styles/deliveryDateInput.sass";
import SelectDeliveryDateModal from "./SelectDeliveryDateModal";

export default function DeliveryDateInput() {
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(true);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const dateNumber = date.getDate();
  let day = date.getDay();

  const findNextDeliverableDay = () => {
    const thirtySixHoursLater = new Date(date.getTime() + 36 * 60 * 60 * 1000);
    const nextDeliverableDate = new Date(thirtySixHoursLater);
    if (
      thirtySixHoursLater.getDay() === 0 ||
      thirtySixHoursLater.getDay() === 2
    ) {
      nextDeliverableDate.setDate(thirtySixHoursLater.getDate() + 1);
    }

    if (thirtySixHoursLater.getDay() === 6) {
      nextDeliverableDate.setDate(thirtySixHoursLater.getDate() + 2);
    }
    return new Date(nextDeliverableDate);
  };

  // const nextDeliverableDate =
  const [chosenDate, setChosenDate] = useState(
    new Date(findNextDeliverableDay()),
  );

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
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
            <p className="delivery_date">{`${days[chosenDate.getDay()]} ${chosenDate.getDate()} ${months[chosenDate.getMonth()]} ${chosenDate.getFullYear()}`}</p>
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
              <div className="calendar_text">{chosenDate.getDate()}</div>
            </div>
            <div className="button">
              <span className="button_text">Change</span>
              <ChevronRight aria-label="arrow" className="chevron" />
            </div>
          </div>
        </button>
      </div>

      {isDeliveryModalOpen && (
        <SelectDeliveryDateModal
          chosenDate={chosenDate}
          setChosenDate={setChosenDate}
          setIsOpen={setIsDeliveryModalOpen}
        />
      )}
    </>
  );
}
