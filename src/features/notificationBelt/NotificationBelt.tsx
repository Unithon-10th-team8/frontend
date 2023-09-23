import { CalendarOutput } from "@/api";
import { ETC } from "@/constants";
import { useGetContactById } from "@/fetchers";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  filteredData: CalendarOutput;
}

const NotificationBelt = ({ filteredData }: Props) => {
  const { data: contact } = useGetContactById(filteredData.contact_id || "");

  if (filteredData?.is_complete) return <></>;
  return (
    <Link href="/calendar">
      <div className="flex h-[64px] w-full cursor-pointer items-center justify-between border-b-1 border-[#3c72db] bg-[#5F95FF] px-[20px]  py-[8px]">
        <div className="flex flex-col">
          <span className="text-[15px] font-medium leading-[18px]">
            오늘은{" "}
            <span className="font-semibold text-[16px] leading-[18px]">
              {contact?.name}({contact?.position})
            </span>
            님과의 약속날 입니다!
          </span>
          <span className=" pt-4 text-[12px] leading-[18px] text-[#fff]">
            {filteredData.name}
          </span>
        </div>
        <div className="flex">
          <div className="relative mr-[9px] h-[48px] w-[48px] rounded-[50%] bg-[#508BFF]">
            <Image
              className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              src={ETC.bell}
              alt="notification"
              unoptimized
              width={32}
              height={32}
            />
            <div className="absolute right-0 flex h-[12px] w-[12px] items-center justify-center rounded-[50%] bg-[#FF6161]">
              <span className="absolute text-[8px] font-medium leading-[8px]"></span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NotificationBelt;
