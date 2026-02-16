import React, { useState } from "react";
import "../styles/deliveryDateModal.sass";

export default function SelectDeliveryDateModal({
  setIsOpen,
  chosenDate,
  setChosenDate,
}: {
  setIsOpen: (x: boolean) => void;
  chosenDate: Date;
  setChosenDate: (x: Date) => void;
}) {
  const date = new Date(chosenDate);
  const year = date.getFullYear();
  const month = date.getMonth();

  const monthLength = new Date(year, month + 1, 0).getDate();
  const dateOptions = Array.from({ length: monthLength }, (_, i) => i + 1);

  const startingDay = new Date(year, month, 0).getDay();

  const [selectedDay, setSelectedDay] = useState(chosenDate);

  function submitNewDate() {
    setChosenDate(selectedDay);
    setIsOpen(false);
  }

  return (
    <div className="modal_background" onClick={() => setIsOpen(false)}>
      <div className="modal_form" onClick={(e) => e.stopPropagation()}>
        <p className="modal_month">
          {date.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </p>
        <div className="modal_calendar">
          <div className="day_label">
            <p>M</p>
            <p>T</p>
            <p>W</p>
            <p>T</p>
            <p>F</p>
            <p>S</p>
            <p>S</p>
          </div>
          <div className="date_options">
            <div
              className={`month-before`}
              style={{
                gridColumnEnd: startingDay + 1,
                display: startingDay < 0 ? "none" : "",
              }}
            ></div>
            {dateOptions.map((dayNumber, i) => (
              <DateOption
                key={i}
                dayNumber={dayNumber}
                month={month}
                year={year}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
              />
            ))}
          </div>
        </div>
        <div className="modal_buttons">
          <button className="button_cancel" onClick={() => setIsOpen(false)}>
            Cancel,
            <br />
            Don't Change
          </button>
          <button className="button_update" onClick={() => submitNewDate()}>
            Change Date
          </button>
        </div>
      </div>
    </div>
  );
}

function DateOption({
  dayNumber,
  month,
  year,
  selectedDay,
  setSelectedDay,
}: {
  dayNumber: number;
  month: number;
  year: number;
  selectedDay: Date;
  setSelectedDay: (x: Date) => void;
}) {
  const date = new Date(year, month, dayNumber);
  const dayOfWeek = date.getDay();
  const isUnavailable =
    dayOfWeek === 0 || dayOfWeek === 2 || dayOfWeek === 6 || date < new Date();
  return (
    <label
      htmlFor={"date-" + dayNumber}
      className={`date_option ${isUnavailable ? "unavailable" : "available"} ${date.toDateString() === selectedDay.toDateString() ? "selected" : ""}`}
    >
      <span>{dayNumber}</span>
      <input
        className="hidden-input"
        type="radio"
        checked={date.toDateString() === selectedDay.toDateString()}
        id={"date-" + dayNumber}
        onClick={() => {
          if (!isUnavailable) {
            setSelectedDay(date);
          }
        }}
      />
    </label>
  );
}
