import React from "react";

const contacts = [
  {
    id: 0,
    bgColor: "#84F44F",
    schedule: "12:00 - 14:00",
    contents: "외부 미팅",
  },
  {
    id: 1,
    bgColor: "#5F95FF",
    schedule: "12:00 - 14:00",
    contents: "식사",
  },
  {
    id: 2,
    bgColor: "#84F44F",
    schedule: "12:00 - 14:00",
    contents: "계약날",
  },
];

const TodayContacts = () => {
  return (
    <>
      <div className="mb-20 text-[20px] font-bold">오늘의 일정</div>
      <ul className="flex flex-col gap-16">
        {contacts.map(({ bgColor, schedule, contents, id }) => (
          <li
            className="flex w-full items-center gap-10 rounded-12 bg-[#353639] px-[20px] py-[24px]"
            key={id}
          >
            <div className={`h-[9px] w-[9px] rounded-[50%] bg-[${bgColor}]`} />
            <div>{schedule}</div>
            <div>{contents}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodayContacts;
