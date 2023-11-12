import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.NEXT_PUBLIC_MY_TOKEN) {
    res.status(401).json({ message: "Wrong Token" });
  }
  const path = req.query.path as string;
  await res.revalidate(path);
}
