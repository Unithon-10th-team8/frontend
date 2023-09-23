import { CalendarInput, CalendarOutput, APIClient } from "@/api";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = {
  contactId: string;
  calendarId: string;
  calendar: CalendarInput;
};

const fetcher = async (
  _: FetcherKey,
  { arg: { contactId, calendarId, calendar } }: { arg: FetcherArg },
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
  useSWRMutation<CalendarOutput, any, FetcherKey, FetcherArg>(
    [["POST", "/v1/contacts/{contact_id}/calendars/{calendar_id}"]],
    fetcher,
  );
