import Refresh from "@/components/Refresh";
import { ProductType, getAllProducts } from "@/lib/getAllProducts";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import React from "react";

export default async function Products() {
  const data: Promise<ProductType[]> = await getAllProducts();
  const prods: ProductType[] = await data;

  if (!prods) notFound();
  return (
    <div className="flex gap-3 justify-center items-center w-full h-fit px-3">
      <div className="flex flex-col gap-3 justify-center items-center w-full h-fit">
        <Link
          href={"/"}
          className="p-5 w-44 h-20 text-center hover:text-white hover:bg-red-500 transition-all border-red-500 rounded-md border-2 text-2xl font-semibold"
        >
          Home
        </Link>
        <Link
          href={"/products/addProduct"}
          className="p-5 w-fit h-20 text-center hover:text-white hover:bg-red-500 transition-all border-red-500 rounded-md border-2 text-2xl font-semibold"
        >
          Add New Product
        </Link>
        <div className="flex gap-3 justify-center flex-wrap items-start w-full h-fit py-4">
          {prods?.length > 0 ? (
            prods.map((p) => (
              <div
                key={p._id}
                className="border-2 rounded-md border-red-500 p-4 flex flex-col justify-between items-center w-fit h-fit"
              >
                <Link
                  href={`/products/${p._id}`}
                  className="p-2 flex flex-col justify-between items-center w-64 h-96"
                >
                  <h1>{p.title}</h1>
                  <Image
                    // loading="lazy"
                    src={p.image ?? "/skirt.jpg"}
                    priority={true}
                    width={200}
                    height={200}
                    alt={p.title}
                    className="w-auto h-56"
                  />
                  <p className="text-1xl font-bold ">Category :{p.category}</p>
                  <p className="text-1xl font-bold ">Price : ${p.price}</p>
                </Link>
              </div>
            ))
          ) : (
            <h1>No products</h1>
          )}
        </div>
      </div>
    </div>
  );
}
