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
  try {
    const data = await fetch(`${baseURL}/api/products`, { cache: "no-store" });
    if (!data.ok) {
      throw new Error(data.statusText);
    }
    const res = await data.json();
    if (!res) {
      throw new Error(`Cannot fetch data from : ${baseURL}/api/products`);
    }
    return res.data;
  } catch (error) {
    throw new Error("Error on fetching data from api...");
  }
};
