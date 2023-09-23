import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  uploadURL: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const result = await axios.post(
      `https://api.cloudflare.com/client/v4/accounts/600c06ee6a0fe6f7c3f555610014945d/images/v2/direct_upload`,
      undefined,
      {
        headers: {
          Authorization: `Bearer bXGEtV_XgFARVVtmC0lG3eX1c21-RQ7aNQLnNqLF`,
        },
      },
    );
    res.status(200).json(result.data.result);
  } catch (e) {
    res.status(500);
  }
}
