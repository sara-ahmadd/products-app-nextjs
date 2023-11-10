const baseURL = process.env.DEV_HOST || process.env.PROD_HOST;

export const getProduct = async (id: string) => {
  const data = await fetch(`${baseURL}/api/products?id=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const res = await data.json();
  return res.data;
};
