import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const 전체일정 = 28;
const 완료한_일정 = 21;

const percentage = Math.round((완료한_일정 / 전체일정) * 100);

const MainBanner = () => {
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
          오늘 민지님의
          <br />
          <span className="text-[#84F44F]">까미지수</span>는 {percentage}%예요
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
