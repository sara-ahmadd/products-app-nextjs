const baseURL =
  process.env.NEXT_PUBLIC_DEV_HOST || process.env.NEXT_PUBLIC_PROD_HOST;

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
