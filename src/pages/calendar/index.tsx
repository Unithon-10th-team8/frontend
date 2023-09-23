import { Calendar } from "@/components";
import { CONTACT_DETAIL_IMAGE, ETC } from "@/constants";
import { useGetAllCalendars } from "@/fetchers";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

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

function PageCalendar() {
  const [initialDate, setInitialDate] = useState(dayjs());
  const dateText = initialDate.format("D");

  const { query } = useRouter();

  const { data } = useGetAllCalendars();

  // filter data that falls in to the range of start_dt and end_dt
  const filteredData = data?.filter(
    ({ start_dt, end_dt }) =>
      dayjs(start_dt).isSame(initialDate, "day") ||
      dayjs(end_dt).isSame(initialDate, "day") ||
      (dayjs(start_dt).isBefore(initialDate, "day") &&
        dayjs(end_dt).isAfter(initialDate, "day")),
  );

  const handleComplete = () => {
    // TODO: 완료 api 호출
    toast.success("일정을 완료 처리 했습니다.");
  };
  return (
    <div>
      <Calendar
        data={data}
        onClickDate={(date) => {
          setInitialDate(date);
        }}
        initialDate={initialDate}
      />
      <div className="mt-4 px-20">
        <div className="mb-14 mt-[30px] flex justify-between text-[15px]">
          <p className="">{dateText}일</p>
          <Link href="/calendar/add">
            <p className="cursor-pointer text-[#5F95FF]">일정추가</p>
          </Link>
        </div>
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
              <Link href="/calendar/edit" className="ml-auto">
                <Image
                  width={20}
                  height={20}
                  src={CONTACT_DETAIL_IMAGE.editProfileIcon}
                  alt="프로필이미지 선택"
                  unoptimized={false}
                />
              </Link>
              <Image
                width={26}
                height={26}
                src={ETC.check}
                alt="완료하기"
                unoptimized={false}
                className="cursor-pointer"
                onClick={handleComplete}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PageCalendar;
