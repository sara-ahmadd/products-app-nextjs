import ProductsList from "@/components/ProductsList";
import { ProductType } from "@/lib/getAllProducts";
import Product from "@/models/product";
import { dbConnect } from "@/utils/mongo";
import { Inter } from "next/font/google";
import Link from "next/link";
import { title } from "process";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ prods }: { prods: ProductType[] }) {
  return (
    <main className="text-4xl font-bold flex flex-col justify-center items-center w-screen h-screen gap-3">
      <h1 className="w-fit h-44 mx-auto">Shop now🛒</h1>
      <Link
        href={"/feedback"}
        className="p-5 w-44 h-20 text-center hover:text-white hover:bg-red-500 transition-all border-red-500 rounded-md border-2 text-2xl font-semibold"
      >
        Feedback
      </Link>
      <ProductsList prods={prods} />
    </main>
  );
}
export const getServerSideProps = async () => {
  await dbConnect();
  try {
    const data: ProductType[] = await Product.find();
    return {
      props: {
        prods: data.map((i) => ({
          title: i.title,
          category: i.category,
          image: i.image,
          price: i.price,
          _id: i._id,
          description: i.description,
        })),
      },
    };
  } catch (error) {
    throw new Error("Error on fetching data in /products page.");
  }
};
