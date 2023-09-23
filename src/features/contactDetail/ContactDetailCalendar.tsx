import { Calendar } from "@/components";
import dayjs from "dayjs";
import { useState } from "react";

const contacts = [
  {
    id: 0,
    bgColor: "bg-accentGreen",
    schedule: "12:00 - 14:00",
    contents: "외부 미팅",
  },
  {
    id: 1,
    bgColor: "bg-accentGreen",
    schedule: "12:00 - 14:00",
    contents: "식사",
  },
  {
    id: 2,
    bgColor: "bg-accentBlue",
    schedule: "12:00 - 14:00",
    contents: "계약날",
  },
];

export const ContactDetailCalendar = () => {
  const [initialDate, setInitialDate] = useState(dayjs());
  const dateText = initialDate.format("D");

  return (
    <div className="bg-surface rounded-12 pb-20">
      <Calendar
        onClickDate={(date) => {
          setInitialDate(date);
        }}
      />
      <div className="mt-4 px-20">
        <p className="pb-8 text-[15px]">{dateText}일</p>
        <ul className="flex flex-col gap-16">
          {contacts.map(({ bgColor, schedule, contents, id }) => (
            <li
              className="flex w-full items-center gap-10 rounded-12 bg-[#444444] px-16 py-[15px]"
              key={id}
            >
              <div className={`h-[9px] w-[9px] rounded-[50%] ${bgColor}`} />
              <div>{schedule}</div>
              <div>{contents}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
