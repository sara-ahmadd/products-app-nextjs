import { deleteProduct } from "@/lib/deleteProduct";
import { ProductType } from "@/lib/getAllProducts";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function DeleteProduct({ product }: { product: ProductType }) {
  const delProd = async (id: string) => {
    await deleteProduct(id).then((res) => console.log(res));
  };

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-3 sm:mx-auto my-14">
      <div className="card-body">
        <h2 className="card-title">Delete Product</h2>
        <p>Confirm</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => delProd(product._id as string)}
            className="btn btn-primary text-center"
          >
            Delete
          </button>
          <Link href={"/"} className="btn btn-primary text-center">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
