import { NextResponse } from "next/server";

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  return NextResponse.json(Object.fromEntries(searchParams.entries()));
}
type Req = {
  name: string;
  email: string;
  messege: string;
};
export async function POST(req: Request) {
  const request: Req = await req.json();
  const { name, email, messege } = request;
  console.log(request);
  return NextResponse.json({ name, email, messege });
}
