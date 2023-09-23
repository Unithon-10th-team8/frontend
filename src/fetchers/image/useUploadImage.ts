import axios from "axios";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];
type FetcherArg = { uploadURL: string; file: any };

const fetcher = async (
  _: FetcherKey,
  { arg: { uploadURL, file } }: { arg: FetcherArg },
) => {
  const formData = new FormData();
  formData.append("file", file);
  await axios.post(uploadURL, formData, {
    headers: { "content-type": "multipart/form-data" },
  });
};

export const useUploadImage = () =>
  useSWRMutation<void, any, FetcherKey, FetcherArg>(
    [["POST", "cloudflareImageUpload"]],
    fetcher,
  );
