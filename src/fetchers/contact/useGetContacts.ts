import { ContactOutput } from "@/api";
import { APIClient } from "@/api/client";
import useSWR from "swr";

type FetcherKey = readonly [[string, string], number?, number?];

const fetcher = async ([, offset, limit]: FetcherKey) => {
  const result = await APIClient.Contact.fetchContactV1ContactsGet(
    offset,
    limit,
  );
  return result.data;
};

export const useGetContacts = ({
  offset,
  limit,
}: {
  offset?: number;
  limit?: number;
}) =>
  useSWR<ContactOutput[], any, FetcherKey>(
    [["GET", "/v1/contacts"], offset, limit],
    fetcher,
  );
