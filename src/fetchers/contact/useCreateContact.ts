import { ContactInput, ContactOutput } from "@/api";
import { APIClient } from "@/api/client";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = ContactInput;

const fetcher = async (
  _: FetcherKey,
  { arg: contact }: { arg: FetcherArg },
) => {
  const result = await APIClient.Contact.createContactV1ContactsPost(contact);
  return result.data;
};

export const useCreateContact = () =>
  useSWRMutation<ContactOutput, any, FetcherKey, FetcherArg>(
    [["POST", "/v1/contacts"]],
    fetcher,
  );
