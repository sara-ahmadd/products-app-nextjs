import ProductsList from "@/components/ProductsList";
import { ProductType, getAllProducts } from "@/lib/getAllProducts";
import Product from "@/models/product";
import { dbConnect } from "@/utils/mongo";
import mongoose from "mongoose";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { useEffect } from "react";

export default async function Products() {
  return <ProductsList prods={[]} />;
}
