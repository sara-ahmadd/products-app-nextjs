"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { addNewProduct } from "@/lib/addNewProduct";
import { ProductType } from "@/lib/getAllProducts";

const initState = {
  title: "",
  description: "",
  category: "",
  image: "",
  price: 0,
};

function Feedback() {
  const [form, setFrom] = useState(initState);
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFrom({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const addedP = async (data: ProductType) => {
    const product: Promise<ProductType> = await addNewProduct(data);
    const addedProduct: ProductType = await product;
    return addedProduct;
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    addedP(form);
    router.refresh();
    router.push("/products");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-start w-fit mx-auto my-0 pt-5 gap-4"
    >
      <input
        type="text"
        id="title"
        onChange={handleChange}
        required
        placeholder="Title"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        id="description"
        onChange={handleChange}
        required
        placeholder="Description"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        id="category"
        onChange={handleChange}
        required
        placeholder="Category"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="number"
        id="price"
        onChange={handleChange}
        required
        placeholder="Price"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        id="image"
        onChange={handleChange}
        required
        placeholder="Image URL"
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Feedback;
