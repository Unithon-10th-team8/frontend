import { Calendar } from "@/components";
import { MOCKUP_CALENDAR_DATA } from "@/components/calendar/mockup/MockupCalendar";

function PageCalendar() {
  return (
    <div>
      <Calendar data={MOCKUP_CALENDAR_DATA} />
    </div>
  );
}

export default PageCalendar;
