import { API_HOST } from "@/constants";
import axios from "axios";
import useSWR from "swr";

type FetcherKey = readonly [[string, string]];

export type UserOutput = {
  id: number;
  name: string;
  email: string;
  profile_image_url: string;
  created_at: string;
  updated_at: string;
};

const fetcher = async () => {
  const result = await axios.get(`${API_HOST}/v1/users/me`, {
    withCredentials: true,
  });
  return result.data;
};

export const useGetUserMe = () =>
  useSWR<UserOutput, any, FetcherKey>([["GET", "/v1/users/me"]], fetcher);
