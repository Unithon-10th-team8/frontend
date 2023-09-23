import { CalendarInput, CalendarOutput, APIClient } from "@/api";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = { contactId: string; calendar: CalendarInput };

const fetcher = async (
  _: FetcherKey,
  { arg: { contactId, calendar } }: { arg: FetcherArg },
) => {
  const result =
    await APIClient.Calendar.createCalendarV1ContactsContactIdCalendarsPost(
      contactId,
      calendar,
    );
  return result.data;
};

export const useCreateCalendar = () =>
  useSWRMutation<CalendarOutput, any, FetcherKey, FetcherArg>(
    [["POST", "/v1/contacts/{contact_id}/calendars"]],
    fetcher,
  );
