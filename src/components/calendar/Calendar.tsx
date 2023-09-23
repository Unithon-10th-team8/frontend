import { DAY_NAMES } from "@/components/calendar/constants/dayNames";
import { CalendarDay } from "@/components/calendar/items/CalendarDay";
import { IconCalendarChevronLeft } from "@/components/calendar/items/IconCalendarChevronLeft";
import { IconCalendarChevronRight } from "@/components/calendar/items/IconCalendarChevronRight";
import { generateCalendarDataFromApiData } from "@/components/calendar/modules/generateCalendarDataFromApiData";
import { getCalendarDays } from "@/components/calendar/modules/getCalendarDays";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

type Props = {
  data?: any;
  onClickDate?: (date: Dayjs) => void;
  initialDate?: Dayjs;
};

export const Calendar = ({
  data,
  onClickDate,
  initialDate: initialDateParent,
}: Props) => {
  const [initialDate, setInitialDate] = useState(dayjs());
  const calendarDate = generateCalendarDataFromApiData(data);

  const days = getCalendarDays(initialDate);
  const monthText = initialDate.format("MMM");
  const yearText = initialDate.format("YYYY");

  const handleClickPreviousMonth = () => {
    setInitialDate(initialDate.subtract(1, "month"));
  };

  const handleClickNextMonth = () => {
    setInitialDate(initialDate.add(1, "month"));
  };

  return (
    <div className="relative px-20">
      <p className="absolute left-[35px] top-4 block font-medium">
        {yearText}년
      </p>
      <div className="mb-[28px] mt-[14px] flex  items-center justify-center gap-8 ">
        <button onClick={handleClickPreviousMonth}>
          <IconCalendarChevronLeft />
        </button>
        <p className="size-21 text-[21px] font-medium">{monthText}</p>
        <button onClick={handleClickNextMonth}>
          <IconCalendarChevronRight />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {DAY_NAMES.map((dayName) => (
          <p
            key={dayName}
            className="font-regular h-48 text-center text-14 text-[#6b6b6b]"
          >
            {dayName}
          </p>
        ))}

        {days.map((date) => {
          const isCurrentMonth = date.isSame(initialDate, "month");
          const dateFormatted = date.format("YYYY-MM-DD");
          const eventData = calendarDate.find(
            (event: any) => event.date === dateFormatted,
          );

          return (
            <CalendarDay
              key={date.format("YYYY-MM-DD")}
              date={date}
              isCurrentMonth={isCurrentMonth}
              hasPlainEvent={eventData?.hasPlainEvent}
              hasImportantEvent={eventData?.hasImportantEvent}
              onClickDate={onClickDate}
              isSelected={date.isSame(initialDateParent, "day")}
            />
          );
        })}
      </div>
    </div>
  );
};
