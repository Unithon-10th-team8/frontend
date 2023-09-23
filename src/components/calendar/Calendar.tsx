import { CalendarDay } from "@/components/calendar/items/CalendarDay";
import { getCalendarDays } from "@/components/calendar/modules/getCalendarDays";
import dayjs from "dayjs";

export const Calendar = () => {
  const initialDate = dayjs();

  const days = getCalendarDays(initialDate);
  const monthText = initialDate.format("MMM");
  return (
    <div className="px-20">
      <p className="size-21 mb-24 mt-[14px] text-center text-[21px] font-medium">
        {monthText}
      </p>
      <div className="grid grid-cols-7 gap-1">
        {days.map((date) => {
          const isCurrentMonth = date.isSame(initialDate, "month");

          return (
            <CalendarDay
              key={date.format("YYYY-MM-DD")}
              date={date}
              isCurrentMonth={isCurrentMonth}
            />
          );
        })}
      </div>
    </div>
  );
};
