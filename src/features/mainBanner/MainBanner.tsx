import { useGetAllCalendars } from "@/fetchers";
import { useGetUserMe } from "@/fetchers/user";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const MainBanner = () => {
  const { data: me } = useGetUserMe();
  const { data: contactData } = useGetAllCalendars();

  const 전체일정 = contactData?.length || 0;
  const 완료한_일정 =
    contactData?.filter(({ is_complete }) => is_complete).length || 0;
  const percentage = Math.round((완료한_일정 / 전체일정) * 100);

  return (
    <div className="flex items-start pb-[42px] pt-[36px]">
      <div className="mr-[22px] h-[120px] w-[120px]">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: "#3468CB",
            textColor: "#fff",
            textSize: "24px",
            trailColor: "#444444",
          })}
        />
      </div>
      <div className="flex flex-col items-baseline">
        <div className="my-9 inline rounded-[24px] bg-[#444444] px-10 py-3 text-13 font-medium">
          {완료한_일정}/{전체일정}
        </div>
        <div className="font-semibold text-20 leading-[150%] ">
          오늘 {me?.name}님의
          <br />
          네트워킹 지수는 <span className="text-[#84F44F]">{percentage}%</span>
          에요
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
