import { NextResponse } from "next/server";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  //   const name = searchParams.get("name");
  const params = Object.fromEntries(searchParams.entries());
  return NextResponse.json({ params });
}
