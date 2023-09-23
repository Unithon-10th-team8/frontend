import { CalendarInput, CalendarOutput } from "@/api";
import { APIClient } from "@/api/client";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = {
  arg: { contactId: string; calendarId: string; calendar: CalendarInput };
};

const fetcher = async (
  _: FetcherKey,
  { arg: { contactId, calendarId, calendar } }: FetcherArg,
) => {
  const result =
    await APIClient.Calendar.updateCalendarV1ContactsContactIdCalendarsCalendarIdPost(
      contactId,
      calendarId,
      calendar,
    );

  return result.data;
};

export const useUpdateCalendar = () =>
  useSWRMutation<CalendarOutput, any, FetcherKey>(
    [["POST", "/v1/contacts/{contact_id}/calendars/{calendar_id}"]],
    fetcher,
  );
