import { CalendarOutput } from "@/api";
import { CallToAction } from "@/components/callToAction/CallToAction";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  filteredData?: CalendarOutput[];
}

const TodayContacts = ({ filteredData }: Props) => {
  const isEmpty = !filteredData?.length || filteredData?.length === 0;
  const router = useRouter();
  return (
    <>
      <div className="mb-20 text-[20px] font-bold">오늘의 일정</div>
      <ul className="flex flex-col gap-16">
        {isEmpty && (
          <CallToAction
            ctaLineOneText="오늘의 일정이 없습니다."
            ctaLineTwoText="새로운 일정을 추가해보세요!"
            ctaButtonText="일정 추가하기"
            ctaButtonOnClick={() => router.push("/contacts/add")}
          />
        )}
        {filteredData?.map(({ is_important, name, id }) => (
          <li
            className="flex w-full items-center gap-10 rounded-12 bg-[#353639] px-[20px] py-[24px]"
            key={id}
          >
            <div
              className={`h-[9px] w-[9px] rounded-[50%] ${
                is_important ? "bg-accentGreen" : "bg-accentBlue"
              }`}
            />
            <div>{name || "[제목 없음]"}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodayContacts;
