import { Calendar } from "@/components";
import { useGetCalendarByContactId } from "@/fetchers";
import dayjs from "dayjs";
import { useRouter } from "next/router";
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

  const { query } = useRouter();

  const { data } = useGetCalendarByContactId(query.contactId as string, {
    offset: 0,
    limit: 100,
  });

  console.log("ddd", data);

  // filter data that falls in to the range of start_dt and end_dt
  const filteredData = data?.filter(
    ({ start_dt, end_dt }) =>
      dayjs(start_dt).isSame(initialDate, "day") ||
      dayjs(end_dt).isSame(initialDate, "day") ||
      (dayjs(start_dt).isBefore(initialDate, "day") &&
        dayjs(end_dt).isAfter(initialDate, "day")),
  );

  return (
    <div className="bg-surface rounded-12 pb-20">
      <Calendar
        onClickDate={(date) => {
          setInitialDate(date);
        }}
        initialDate={initialDate}
        data={data}
      />
      <div className="mt-4 px-20">
        <p className="pb-8 text-[15px]">{dateText}일</p>
        <ul className="flex flex-col gap-16">
          {filteredData?.map(({ is_important, name, id }) => (
            <li
              className="flex w-full items-center gap-10 rounded-12 bg-[#444444] px-16 py-[15px]"
              key={id}
            >
              <div
                className={`h-[9px] w-[9px] rounded-[50%] ${
                  is_important ? "bg-accentGreen" : "bg-accentBlue"
                }`}
              />
              <div>{name || "[제목 없음]"}</div>
              {/* <div>{contents}</div> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
