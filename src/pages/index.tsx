import MainBanner from "@/features/mainBanner/MainBanner";
import NotificationBelt from "@/features/notificationBelt/NotificationBelt";
import TodayContacts from "@/features/todayContacts/TodayContacts";

export default function Home() {
  return (
    <>
      <NotificationBelt />
      <div className="px-[20px] pb-[20px]">
        <MainBanner />
        <TodayContacts />
      </div>
    </>
  );
}
