import { APIClient } from "@/api/client";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = { arg: { contactId: string; calendarId: string } };

const fetcher = async (
  _: FetcherKey,
  { arg: { contactId, calendarId } }: FetcherArg,
) => {
  await APIClient.Calendar.deleteCalendarV1ContactsContactIdCalendarsCalendarIdDelete(
    contactId,
    calendarId,
  );
};

export const useDeleteCalendar = () =>
  useSWRMutation<void, any, FetcherKey>(
    [["DELETE", "/v1/contacts/{contact_id}/calendars/{calendar_id}"]],
    fetcher,
  );
