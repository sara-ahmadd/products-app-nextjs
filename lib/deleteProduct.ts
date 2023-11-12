import { ProductType } from "./getAllProducts";
export const deleteProduct = async (id: string) => {
  const data = await fetch(
    `${
      process.env.NEXT_PUBLIC_DEV_HOST || process.env.NEXT_PUBLIC_PROD_HOST
    }/api/products?id=${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const res = await data.json();
  return res.data;
};
