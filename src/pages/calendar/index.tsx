import { Calendar } from "@/components";
import { MOCKUP_CALENDAR_DATA } from "@/components/calendar/mockup/MockupCalendar";
import { CONTACT_DETAIL_IMAGE, ETC } from "@/constants";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
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

  const handleComplete = () => {
    // TODO: 완료 api 호출
    toast.success("일정을 완료 처리 했습니다.");
  };
  return (
    <div>
      <Calendar
        data={MOCKUP_CALENDAR_DATA}
        onClickDate={(date) => {
          setInitialDate(date);
        }}
        initialDate={initialDate}
      />
      <div className="px-20 mt-4">
        <div className="mb-14 mt-[30px] flex justify-between text-[15px]">
          <p className="">{dateText}일</p>
          <Link href="/calendar/add">
            <p className="cursor-pointer text-[#5F95FF]">일정추가</p>
          </Link>
        </div>
        <ul className="flex flex-col gap-16">
          {contacts.map(({ bgColor, schedule, contents, id }) => (
            <li
              className="flex w-full items-center gap-10 rounded-12 bg-[#444444] px-16 py-[15px]"
              key={id}
            >
              <div className={`h-[9px] w-[9px] rounded-[50%] ${bgColor}`} />
              <div>{schedule}</div>
              <div>{contents}</div>
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
