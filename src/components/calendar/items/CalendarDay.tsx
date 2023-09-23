import { Dayjs } from "dayjs";
import classnames from "classnames";
import { CalendarMarkerEvent } from "@/components/calendar/items/marker/CalendarMarkerEvent";

type Props = {
  date: Dayjs;
  isCurrentMonth: boolean;
  hasPlainEvent: boolean;
  hasImportantEvent: boolean;
  onClickDate?: (date: Dayjs) => void;
};

export const CalendarDay = ({
  date,
  isCurrentMonth,
  hasPlainEvent,
  hasImportantEvent,
  onClickDate,
}: Props) => {
  const dayText = date.format("D");
  const handleClickDate = () => {
    onClickDate?.(date);
  };
  return (
    <button
      className="flex h-[60px] flex-col items-center gap-4 rounded-4 text-center hover:bg-[#444444]"
      onClick={handleClickDate}
    >
      <span
        className={classnames({
          "text-[#565656]": !isCurrentMonth,
          "text-white": isCurrentMonth,
        })}
      >
        {dayText}
      </span>
      {hasImportantEvent && <CalendarMarkerEvent className="bg-accentGreen" />}
      {hasPlainEvent && <CalendarMarkerEvent className="bg-accentBlue" />}
    </button>
  );
};
