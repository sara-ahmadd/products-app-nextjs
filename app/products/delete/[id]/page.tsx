"use client";
import { deleteProduct } from "@/lib/deleteProduct";
import { ProductType } from "@/lib/getAllProducts";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Delete() {
  const path = usePathname();
  //get the id from the url => 'http://localhost:3000/products/id'
  const id = path.slice(path.lastIndexOf("/") + 1);

  
  useEffect(() => {
    const deleteP = async (id: string) => {
      const productDeleted: Promise<ProductType> = await deleteProduct(id);
      const p = await productDeleted;
      return p;
    };
    deleteP(id);
  }, [id]);

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-3 sm:mx-auto my-14">
      <div className="card-body">
        <h2 className="card-title">Success</h2>
        <p>You deleted a product.</p>
        <div className="card-actions justify-end">
          <Link href={"/products"} className="btn btn-primary text-center">
            Products
          </Link>
        </div>
      </div>
    </div>
  );
}
