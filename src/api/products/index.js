export const getProducts = async () => {
  const products = await fetch("http://localhost:4000/products");
  return products.json();
};
