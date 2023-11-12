import DeleteProduct from "@/components/DeleteProduct";
import { ProductType, getAllProducts } from "@/lib/getAllProducts";
import { getProduct } from "@/lib/getProdut";
import mongoose from "mongoose";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import Product from "./../../../models/product";
import { dbConnect } from "@/utils/mongo";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  
  await dbConnect();
  const product = await Product.findOne({ _id: productId });

  if (!product) notFound();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-0">
      <Link
        href={"/products"}
        className="p-5 w-44 text-center h-20 hover:text-white hover:bg-red-500 transition-all border-red-500 rounded-md border-2 text-2xl font-semibold"
      >
        Products
      </Link>
      <div className="p-4 flex flex-col justify-between items-center w-full h-fit">
        <h1 className="text-2xl font-bold text-red-500 py-3">
          {product.title}
        </h1>
        <Image
          loading="lazy"
          src={product.image}
          width={200}
          height={200}
          className="rounded-md w-auto h-auto"
          alt={product.title}
        />
        <p className="text-2xl font-bold ">Category :{product.category}</p>
        <p className="text-2xl font-bold ">Price : ${product.price}</p>
      </div>
      <Link
        href={`/products/delete/${product._id}`}
        className="p-5 w-44 text-center h-20 hover:text-white hover:bg-red-500 transition-all border-red-500 rounded-md border-2 text-2xl font-semibold"
      >
        Delete
      </Link>
    </div>
  );
}

export async function generateStaticParams() {
  const data: Promise<ProductType[]> = await getAllProducts();
  const products: ProductType[] = await data;
  return products.map((p) => ({ productId: p._id }));
}
