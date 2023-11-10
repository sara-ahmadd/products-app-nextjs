import { ProductType } from "./getAllProducts";
const baseURL = process.env.DEV_HOST || process.env.PROD_HOST;

export const deleteProduct = async (id: string) => {
  const data = await fetch(
    `${baseURL ?? "http://localhost:3000"}/api/products?id=${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const res = await data.json();
  return res.data;
};
