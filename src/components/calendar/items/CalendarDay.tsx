import { Dayjs } from "dayjs";
import classnames from "classnames";
import { CalendarMarkerEvent } from "@/components/calendar/items/marker/CalendarMarkerEvent";

type Props = {
  date: Dayjs;
  isCurrentMonth: boolean;
  hasPlainEvent: boolean;
  hasImportantEvent: boolean;
};

export const CalendarDay = ({
  date,
  isCurrentMonth,
  hasPlainEvent,
  hasImportantEvent,
}: Props) => {
  const dayText = date.format("D");

  return (
    <div className="flex h-[60px] flex-col items-center gap-4 text-center">
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
    </div>
  );
};
