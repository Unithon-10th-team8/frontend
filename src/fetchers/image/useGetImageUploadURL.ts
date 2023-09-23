import axios from "axios";
import useSWRMutation from "swr/mutation";

type FetcherKey = readonly [[string, string]];

export type ImageUploadURL = {
  id: string;
  uploadURL: string;
};

const fetcher = async () => {
  const result = await axios.get("/api/getImageUploadURL");
  return result.data as ImageUploadURL;
};

export const useGetImageUploadURL = () =>
  useSWRMutation<ImageUploadURL, any, FetcherKey>(
    [["GET", "/api/getImage"]],
    fetcher,
  );
