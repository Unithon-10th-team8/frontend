import { ContactInput, ContactOutput } from "@/api";
import { APIClient } from "@/api/client";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = { arg: { id: string; contact: ContactInput } };

const fetcher = async (_: FetcherKey, { arg: { id, contact } }: FetcherArg) => {
  const result = await APIClient.Contact.updateContactV1ContactsContactIdPost(
    id,
    contact,
  );
  return result.data;
};

export const useUpdateContact = () =>
  useSWRMutation<ContactOutput, any, FetcherKey>(
    [["POST", "/v1/contacts/{contact_id}"]],
    fetcher,
  );
