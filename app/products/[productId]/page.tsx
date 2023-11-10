import DeleteProduct from "@/app/components/DeleteProduct";
import { ProductType, getAllProducts } from "@/lib/getAllProducts";
import { getProduct } from "@/lib/getProdut";
import mongoose from "mongoose";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import Product from "./../../../models/product";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  const product = await getProduct(productId);
  const p = await product;
  if (!p) notFound();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-0">
      <Link
        href={"/products"}
        className="p-5 w-44 text-center h-20 hover:text-white hover:bg-red-500 transition-all border-red-500 rounded-md border-2 text-2xl font-semibold"
      >
        Products
      </Link>
      <div className="p-4 flex flex-col justify-between items-center w-full h-fit">
        <h1 className="text-2xl font-bold text-red-500 py-3">{p.title}</h1>
        <Image
          loading="lazy"
          src={p.image}
          width={200}
          height={200}
          className="rounded-md w-auto h-auto"
          alt={p.title}
        />
        <p className="text-2xl font-bold ">Category :{p.category}</p>
        <p className="text-2xl font-bold ">Price : ${p.price}</p>
      </div>
      <Link
        href={`/products/delete/${p._id}`}
        className="p-5 w-44 text-center h-20 hover:text-white hover:bg-red-500 transition-all border-red-500 rounded-md border-2 text-2xl font-semibold"
      >
        Delete
      </Link>
    </div>
  );
}

export async function generateStaticParams() {
  const data: Promise<ProductType[]> = await getAllProducts();
  const products = await data;
  return products.map((p) => ({ productId: p._id }));
}
