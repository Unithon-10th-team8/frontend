import { CalendarOutput } from "@/api";
import { APIClient } from "@/api/client";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = { calendarId: string; isDomplate: boolean };

const fetcher = async (
  _: FetcherKey,
  { arg: { calendarId, isDomplate } }: { arg: FetcherArg },
) => {
  const result =
    await APIClient.Calendar.updateCalendarCompletionV1CalendarsCalendarIdCompletionPost(
      calendarId,
      { is_complete: isDomplate },
    );
  return result.data;
};

export const useUpdateCalendarCompletion = () =>
  useSWRMutation<CalendarOutput, any, FetcherKey, FetcherArg>(
    [["POST", "/v1/calendars/{calendar_id}/completion"]],
    fetcher,
  );
