import dayjs from "dayjs";
import { CalendarOutput } from "@/api";

export const generateCalendarDataFromApiData = (apiData: CalendarOutput[]) => {
  const resultCalendarData: any[] = [];

  apiData.forEach((data) => {
    const deepClonedData = JSON.parse(JSON.stringify(data));

    const currentLocalArray = [];

    // start_dt 만 있는 경우
    if (!deepClonedData.end_dt) {
      currentLocalArray.push({
        date: dayjs(deepClonedData.start_dt).format("YYYY-MM-DD"),
        hasPlainEvent: !deepClonedData.is_important,
        hasImportantEvent: deepClonedData.is_important,
      });
    }

    // start_dt, end_dt 둘 다 있는 경우
    while (
      dayjs(deepClonedData.start_dt).isSameOrBefore(deepClonedData.end_dt)
    ) {
      currentLocalArray.push({
        date: dayjs(deepClonedData.start_dt).format("YYYY-MM-DD"),
        hasPlainEvent: !deepClonedData.is_important,
        hasImportantEvent: deepClonedData.is_important,
      });
      deepClonedData.start_dt = dayjs(deepClonedData.start_dt)
        .add(1, "day")
        .toISOString();
    }

    resultCalendarData.push(...currentLocalArray);
  });

  // 중복 제거 , true 가 있는 날짜는 무조건 true 로

  const resultCalendarDataWithoutDuplicate = resultCalendarData.reduce(
    (acc, cur) => {
      const isDuplicate = acc.some((item: any) => item.date === cur.date);
      if (!isDuplicate) {
        acc.push(cur);
      } else {
        // if there is same date with hasPlainEvent or hasImportantEvent true, then it should be true
        const index = acc.findIndex((item: any) => item.date === cur.date);
        if (acc[index].hasPlainEvent || cur.hasPlainEvent) {
          acc[index].hasPlainEvent = true;
        }
        if (acc[index].hasImportantEvent || cur.hasImportantEvent) {
          acc[index].hasImportantEvent = true;
        }
      }
      return acc;
    },
    [],
  );

  return resultCalendarDataWithoutDuplicate;
};
