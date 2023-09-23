import { ContactOutput } from "@/api";
import { API_HOST } from "@/constants";
import axios from "axios";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = { id: string };

const fetcher = async (_: FetcherKey, { arg: { id } }: { arg: FetcherArg }) => {
  const result = await axios.post(
    `${API_HOST}/v1/calendars/${id}/completion`,
    undefined,
    { withCredentials: true },
  );
  return result.data;
};

export const useUpdateCalendarCompletion = () =>
  useSWRMutation<ContactOutput, any, FetcherKey, FetcherArg>(
    [["POST", "v1/calendars/{calendar_id}/completion"]],
    fetcher,
  );
