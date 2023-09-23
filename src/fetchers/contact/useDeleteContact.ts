import { APIClient } from "@/api/client";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = { arg: string };

const fetcher = async (_: FetcherKey, { arg: id }: FetcherArg) => {
  await APIClient.Contact.deleteContactV1ContactsContactIdDelete(id);
};

export const useDeleteContact = () =>
  useSWRMutation<void, any, FetcherKey>(
    [["DELETE", "/v1/contacts/{contact_id}"]],
    fetcher,
  );
