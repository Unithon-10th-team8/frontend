import { CalendarOutput, APIClient } from "@/api";
import useSWR from "swr";

type FetcherKey = readonly [[string, string], string, string];

const fetcher = async ([, contactId, calendarId]: FetcherKey) => {
  const result =
    await APIClient.Calendar.getCalendarV1ContactsContactIdCalendarsCalendarIdGet(
      contactId,
      calendarId,
    );
  return result.data;
};

export const useGetCalendar = (contactId: string, calendarId: string) =>
  useSWR<CalendarOutput, any, FetcherKey>(
    [
      ["GET", "/v1/contacts/{contact_id}/calendars/{calendar_id}"],
      contactId,
      calendarId,
    ],
    fetcher,
  );
