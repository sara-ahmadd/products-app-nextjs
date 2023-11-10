import { ProductType } from "./getAllProducts";
const baseURL = process.env.DEV_HOST || process.env.PROD_HOST;

const url = `${baseURL}/api/products`;

export const addNewProduct = async (product: ProductType) => {
  const data = await fetch(
    `${process.env.DEV_HOST || process.env.PROD_HOST}/api/products` as string,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(product),
    }
  );
  const res = await data.json();
  return res.data;
};
