import { CalendarInput, CalendarOutput } from "@/api";
import { APIClient } from "@/api/client";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = { arg: { contactId: string; calendar: CalendarInput } };

const fetcher = async (
  _: FetcherKey,
  { arg: { contactId, calendar } }: FetcherArg,
) => {
  const result =
    await APIClient.Calendar.createCalendarV1ContactsContactIdCalendarsPost(
      contactId,
      calendar,
    );
  return result.data;
};

export const useCreateCalendar = () =>
  useSWRMutation<CalendarOutput, any, FetcherKey>(
    [["POST", "/v1/contacts/{contact_id}/calendars"]],
    fetcher,
  );
