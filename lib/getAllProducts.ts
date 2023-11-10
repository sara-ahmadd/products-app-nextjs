const baseURL = process.env.DEV_HOST || process.env.PROD_HOST;
export type ProductType = {
  title: string;
  price: number;
  description: string;
  _id?: string;
  image: string;
  category: string;
};

export const getAllProducts = async () => {
  const data = await fetch(`${baseURL}/api/products` as string, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const res = await data.json();

  return res.data;
};
