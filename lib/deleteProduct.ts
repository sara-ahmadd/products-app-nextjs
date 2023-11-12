import { ProductType } from "./getAllProducts";
const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_HOST
    : process.env.NEXT_PUBLIC_PROD_HOST ;

export const deleteProduct = async (id: string) => {
  const data = await fetch(`${baseURL}/api/products?id=${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const res = await data.json();
  return res.data;
};
