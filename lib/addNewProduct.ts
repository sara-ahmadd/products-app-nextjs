import { ProductType } from "./getAllProducts";
const baseURL = process.env.DEV_HOST || process.env.PROD_HOST;

const url = `${baseURL}/api/products`;

export const addNewProduct = async (product: ProductType) => {
  const data = await fetch(
    `${
      process.env.NEXT_PUBLIC_DEV_HOST || process.env.NEXT_PUBLIC_PROD_HOST
    }/api/products`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(product),
    }
  );
  const res = await data.json();
  return res.data;
};
