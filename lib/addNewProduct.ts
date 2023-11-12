import { ProductType } from "./getAllProducts";
const baseURL = process.env.DEV_HOST || process.env.PROD_HOST;

export const addNewProduct = async (product: ProductType) => {
  const data = await fetch(`${baseURL}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(product),
  });
  const res = await data.json();
  return res.data;
};
