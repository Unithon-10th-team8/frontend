import { APIClient } from "@/api";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = { contactId: string; calendarId: string };

const fetcher = async (
  _: FetcherKey,
  { arg: { contactId, calendarId } }: { arg: FetcherArg },
) => {
  await APIClient.Calendar.deleteCalendarV1ContactsContactIdCalendarsCalendarIdDelete(
    contactId,
    calendarId,
  );
};

export const useDeleteCalendar = () =>
  useSWRMutation<void, any, FetcherKey, FetcherArg>(
    [["DELETE", "/v1/contacts/{contact_id}/calendars/{calendar_id}"]],
    fetcher,
  );
