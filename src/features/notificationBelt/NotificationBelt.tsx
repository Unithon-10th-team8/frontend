import { NOTIFICATION_IMAGES } from "@/constants";
import Image from "next/image";
import React from "react";

const name = "유나은";
const rank = "대리";
const tag = "생일";

const notification_number = 2;

const NotificationBelt = () => {
  return (
    <div className="flex h-[64px] w-full items-center justify-between bg-[#5F95FF] px-[20px] py-[8px]">
      <span className="text-[15px] font-medium leading-[18px]">
        오늘은{" "}
        <span className="font-semibold text-[16px] leading-[18px]">
          {name}({rank})
        </span>
        님의 {tag}입니다
      </span>
      <div className="flex">
        <div className="relative mr-[9px] h-[48px] w-[48px] rounded-[50%] bg-[#508BFF]">
          <Image
            className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
            src={NOTIFICATION_IMAGES.birthday}
            alt="birthday"
            unoptimized
            width={32}
            height={32}
          />
          <div className="absolute right-0 flex h-[12px] w-[12px] items-center justify-center rounded-[50%] bg-[#FF6161]">
            <span className="absolute text-[8px] font-medium leading-[8px]">
              {notification_number}
            </span>
          </div>
        </div>
        <Image
          src={NOTIFICATION_IMAGES.birthday}
          alt="chevron-down"
          unoptimized
          width={16}
          height={14}
        />
      </div>
    </div>
  );
};

export default NotificationBelt;
