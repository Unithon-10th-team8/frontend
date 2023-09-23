import { APIClient } from "@/api/client";
import useSWR from "swr";

type FetcherKey = readonly [[string, string], string];

const fetcher = async ([, id]: FetcherKey) => {
  const result = await APIClient.Contact.getContactV1ContactsContactIdGet(id);
  return result.data;
};

// TODO: return DTO 점검 필요
export const useGetContactById = (id: string) =>
  useSWR<any, any, FetcherKey>(
    [["GET", "/v1/contacts/{contact_id}"], id],
    fetcher,
  );
