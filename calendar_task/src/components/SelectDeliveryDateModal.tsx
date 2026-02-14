import "../styles/deliveryDateModal.sass";

export default function SelectDeliveryDateModal({
  setIsOpen,
}: {
  setIsOpen: (x: boolean) => void;
}) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dateOptions = Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
    (i) => <DateOption key={i} date={i.toString()} />,
  );

  return (
    <div className="modal_background">
      <div className="modal_form">
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
          <div className="date_options">{dateOptions}</div>
        </div>
        <div className="modal_buttons">
          <button className="button_cancel">
            Cancel,
            <br />
            Don't Change
          </button>
          <button className="button_update">Change Date</button>
        </div>
      </div>
    </div>
  );
}

function DateOption({ date }: { date: string }) {
  return <button className="date_option">{date}</button>;
}
