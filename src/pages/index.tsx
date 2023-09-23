import MainBanner from "@/features/mainBanner/MainBanner";
import NotificationBelt from "@/features/notificationBelt/NotificationBelt";
import TodayContacts from "@/features/todayContacts/TodayContacts";
import { useGetUserMe } from "@/fetchers/user";
import classNames from "classnames";

export default function Home() {
  const { data: user } = useGetUserMe();

  return (
    <>
      <NotificationBelt />
      <div className="px-[20px] pb-[20px]">
        <h1
          className={classNames(
            "animate-title mt-32 text-[32px] font-bold leading-[1.2]",
          )}
        >
          반가워요 {user?.name}님,
          <br />
          활기찬 네트워킹되세요!
        </h1>
        <MainBanner />
        <TodayContacts />
      </div>
    </>
  );
}
