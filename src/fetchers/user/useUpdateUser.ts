import useSWRMutation from "swr/mutation";
import { UserOutput } from "./useGetUserMe";
import axios from "axios";
import { API_HOST } from "@/constants";
import { UserInput } from "@/api";

type FetcherKey = readonly [[string, string]];
type FetcherArg = { userId: number; user: UserInput };

const fetcher = async (
  _: FetcherKey,
  { arg: { userId, user } }: { arg: FetcherArg },
) => {
  const result = await axios.post(
    `${API_HOST}/v1/users/${userId}`,
    { user_input: user },
    { withCredentials: true },
  );
  return result.data;
};

export const useUpdateUser = () =>
  useSWRMutation<UserOutput, any, FetcherKey>(
    [["POST", "/v1/users/{user_id}"]],
    fetcher,
  );
