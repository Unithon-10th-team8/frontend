import { CalendarOutput } from "@/api";
import { API_HOST } from "@/constants";
import axios from "axios";
import useSWR from "swr";

type FetcherKey = readonly [[string, string]];

const fetcher = async ([]: FetcherKey) => {
  const result = await axios.get(API_HOST + "/v1/calendars", {
    withCredentials: true,
  });
  return result.data;
};

export const useGetAllCalendars = () =>
  useSWR<CalendarOutput[], any, FetcherKey>(
    [["GET", "/v1/calendars}"]],
    fetcher,
  );
