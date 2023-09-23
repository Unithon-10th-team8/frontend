import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/en"; // load English locale
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"; // load isSameOrBefore plugin
import weekday from "dayjs/plugin/weekday"; // load weekday plugin

// Use plugins
dayjs.extend(isSameOrBefore);
dayjs.extend(weekday);

export const getCalendarDays = (date: Dayjs): Dayjs[] => {
  if (!date) {
    return [];
  }
  // Start from the first day of the month
  const startOfMonth = date.startOf("month");

  // Find the closest preceding Sunday to the first day of the month
  const startOfCalendar =
    startOfMonth.weekday() === 0
      ? startOfMonth
      : startOfMonth.subtract(startOfMonth.weekday(), "day");

  // Find the last day of the month
  const endOfMonth = date.endOf("month");

  // Find the closest following Saturday to the last day of the month
  const endOfCalendar =
    endOfMonth.weekday() === 6
      ? endOfMonth
      : endOfMonth.add(6 - endOfMonth.weekday(), "day");

  // Initialize the array to store the days for the calendar view
  const calendarDays: Dayjs[] = [];

  // Loop through the days from the start to the end of the calendar view
  let currentDay = startOfCalendar;
  while (currentDay.isSameOrBefore(endOfCalendar)) {
    // Add the current day to the array
    calendarDays.push(currentDay);

    // Move to the next day
    currentDay = currentDay.add(1, "day");
  }

  // Return the array of Dayjs objects representing each day in the calendar view
  return calendarDays;
};
