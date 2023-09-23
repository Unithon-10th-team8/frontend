import { CalendarOutput, APIClient } from "@/api";
import useSWR from "swr";

type FetcherKey = readonly [[string, string], string, number?, number?];

const fetcher = async ([, contactId, offset, limit]: FetcherKey) => {
  const result =
    await APIClient.Calendar.fetchCalendarV1ContactsContactIdCalendarsGet(
      contactId,
      offset,
      limit,
    );
  return result.data;
};

export const useGetCalendarByContactId = (
  contactId: string,
  { offset, limit }: { offset: number; limit: number },
) =>
  useSWR<CalendarOutput[], any, FetcherKey>(
    [["GET", "/v1/contacts/{contact_id}/calendars"], contactId, offset, limit],
    fetcher,
  );
