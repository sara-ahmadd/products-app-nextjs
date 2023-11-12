import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
// export const revalidate = 0;
export default function Home() {
  return (
    <main className="text-4xl font-bold flex flex-col justify-center items-center w-screen h-screen gap-3">
      <h1 className="w-fit h-44 mx-auto">Shop now🛒</h1>
      <Link
        href={"/products"}
        prefetch={false}
        className="p-5 w-44 h-20 text-center hover:text-white hover:bg-red-500 transition-all border-red-500 rounded-md border-2 text-2xl font-semibold"
      >
        Products
      </Link>
      <Link
        href={"/feedback"}
        className="p-5 w-44 h-20 text-center hover:text-white hover:bg-red-500 transition-all border-red-500 rounded-md border-2 text-2xl font-semibold"
      >
        Feedback
      </Link>
    </main>
  );
}
