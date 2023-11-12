const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_HOST
    : process.env.NEXT_PUBLIC_PROD_HOST ;

export type ProductType = {
  title: string;
  price: number;
  description: string;
  _id?: string;
  image: string;
  category: string;
};

export const getAllProducts = async () => {
  try {
    const data = await fetch(`${baseURL}/api/products`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      cache: "no-store",
    });
    if (!data.ok) {
      throw new Error(data.statusText);
    }
    const res = await data.json();
    if (!res) {
      throw new Error(`Cannot fetch data from : ${baseURL}/api/products`);
    }
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
