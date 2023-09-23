import MainBanner from "@/features/mainBanner/MainBanner";
import NotificationBelt from "@/features/notificationBelt/NotificationBelt";
import TodayContacts from "@/features/todayContacts/TodayContacts";
import { useGetUserMe } from "@/fetchers/user";
import classNames from "classnames";

import { useGetAllCalendars } from "@/fetchers";
import dayjs from "dayjs";
import { useState } from "react";
import ComingContacts from "@/features/comingContacts/ComingContacts";

export default function Home() {
  const [initialDate] = useState(dayjs());
  const { data: user } = useGetUserMe();

  const { data: contactData } = useGetAllCalendars();

  const filteredData = contactData?.filter(
    ({ start_dt, end_dt }) =>
      dayjs(start_dt).isSame(initialDate, "day") ||
      dayjs(end_dt).isSame(initialDate, "day") ||
      (dayjs(start_dt).isBefore(initialDate, "day") &&
        dayjs(end_dt).isAfter(initialDate, "day")),
  );

  const comingData = contactData?.filter(({ start_dt }) =>
    dayjs(start_dt).isAfter(initialDate, "day"),
  );
  return (
    <>
      {filteredData?.map((data) => (
        <NotificationBelt filteredData={data} key={data.id} />
      ))}
      <div className="px-[20px] pb-[20px]">
        <h1
          className={classNames(
            "animate-title mt-32 text-[28px] font-bold leading-[1.2]",
          )}
        >
          {user?.name}님,
          <br />
          활기찬 네트워킹되세요!
        </h1>
        <MainBanner />
        <TodayContacts filteredData={filteredData} />
        <ComingContacts filteredData={comingData} />
      </div>
    </>
  );
}
