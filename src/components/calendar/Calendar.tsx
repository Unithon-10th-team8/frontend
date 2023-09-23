import { CalendarDay } from "@/components/calendar/items/CalendarDay";
import { IconCalendarChevronLeft } from "@/components/calendar/items/IconCalendarChevronLeft";
import { IconCalendarChevronRight } from "@/components/calendar/items/IconCalendarChevronRight";
import { getCalendarDays } from "@/components/calendar/modules/getCalendarDays";
import dayjs from "dayjs";
import { useState } from "react";

export const Calendar = () => {
  const [initialDate, setInitialDate] = useState(dayjs());

  const days = getCalendarDays(initialDate);
  const monthText = initialDate.format("MMM");

  const handleClickPreviousMonth = () => {
    setInitialDate(initialDate.subtract(1, "month"));
  };

  const handleClickNextMonth = () => {
    setInitialDate(initialDate.add(1, "month"));
  };

  return (
    <div className="px-20">
      <div className="mb-24 mt-[14px] flex  items-center justify-center gap-8 ">
        <button onClick={handleClickPreviousMonth}>
          <IconCalendarChevronLeft />
        </button>
        <p className="size-21 text-[21px] font-medium">{monthText}</p>
        <button onClick={handleClickNextMonth}>
          <IconCalendarChevronRight />
        </button>
      </div>
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
