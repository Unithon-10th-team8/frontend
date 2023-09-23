import { Dayjs } from "dayjs";
import classnames from "classnames";

type Props = {
  date: Dayjs;
  isCurrentMonth: boolean;
};

export const CalendarDay = ({ date, isCurrentMonth }: Props) => {
  const dayText = date.format("D");

  return (
    <div className="h-48 text-center">
      <span
        className={classnames({
          "text-[#565656]": !isCurrentMonth,
          "text-white": isCurrentMonth,
        })}
      >
        {dayText}
      </span>
    </div>
  );
};
