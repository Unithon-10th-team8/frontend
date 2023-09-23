import { API_HOST } from "@/constants";
import axios from "axios";
import useSWR from "swr";

type FetcherKey = readonly [[string, string], string];

type CustomCalendarByCalendarIdOutput = {
  calendar: any;
  contacts: {
    id: string;
    name: string;
    tags: string[];
  }[];
};

const fetcher = async ([, calendarId]: FetcherKey) => {
  const result = await axios.get(API_HOST + "/v1/calendars/" + calendarId, {
    withCredentials: true,
  });
  return result.data;
};

export const useGetCalendarByCalendarId = (calendarId: string) =>
  useSWR<CustomCalendarByCalendarIdOutput, any, FetcherKey>(
    [["GET", "/v1/calendars/{calendarId}"], calendarId],
    fetcher,
  );
