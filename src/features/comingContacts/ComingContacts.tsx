import { CalendarOutput } from "@/api";
import dayjs from "dayjs";
import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

interface Props {
  filteredData?: CalendarOutput[];
}

const ComingContacts = ({ filteredData }: Props) => {
  return (
    <>
      <div className="mb-20 mt-[30px] text-[20px] font-bold">다가오는 일정</div>
      <ul className="flex flex-col gap-16">
        {filteredData?.map(({ is_important, name, id, start_dt }) => (
          <li
            className="flex w-full items-center justify-between gap-10 rounded-12 bg-[#353639] px-[20px] py-[24px]"
            key={id}
          >
            <div className="flex items-center justify-between gap-10">
              <div
                className={`h-[9px] w-[9px] rounded-[50%] ${
                  is_important ? "bg-accentGreen" : "bg-accentBlue"
                }`}
              />
              <div>{name || "[제목 없음]"}</div>
            </div>
            <p className="text-14 text-[#999]">{dayjs(start_dt).fromNow()}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ComingContacts;
