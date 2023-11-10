import { NextResponse } from "next/server";

export const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [
        "https://products-app-nextjs-sara-ahmadd.vercel.app",
        "products-app-nextjs-sara-ahmadd.vercel.app",
      ]
    : ["http://localhost:3000"];

export const middleware = (request: Request) => {
  //   const origin = request.headers.get("origin");

  const origin = request.headers.get("origin");
  console.log(request.headers.get("origin"));

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  console.log(request.method);
  console.log(request.url);
  return NextResponse.next();
};
export const config = {
  matcher: "/api/:path*",
};
