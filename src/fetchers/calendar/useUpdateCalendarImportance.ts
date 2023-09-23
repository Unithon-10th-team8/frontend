import { CalendarOutput } from "@/api";
import { APIClient } from "@/api/client";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = { calendarId: string; isImportant: boolean };

const fetcher = async (
  _: FetcherKey,
  { arg: { calendarId, isImportant } }: { arg: FetcherArg },
) => {
  const result =
    await APIClient.Calendar.updateCalendarImportanceV1CalendarsCalendarIdImportancePatch(
      calendarId,
      { is_important: isImportant },
    );
  return result.data;
};

export const useUpdateCalendarImportance = () =>
  useSWRMutation<CalendarOutput, any, FetcherKey, FetcherArg>(
    [["POST", "/v1/calendars/{calendar_id}/importance"]],
    fetcher,
  );
