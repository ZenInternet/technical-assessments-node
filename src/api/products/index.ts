export const getProducts = async (): Promise<Product[]> => {
  const products = await fetch("http://localhost:4000/products");
  return products.json();
};

export const getProductDetails = async (): Promise<any[]> => {
  const productDetails = await fetch("http://localhost:4000/productDetails");
  return productDetails.json();
}

export type Product = {
  id: number;
  price: {
    value: number;
    currency: string;
    rate: string;
  };
}

export type ProductDetails = {
  id: number;
  productId: number;
  name: string;
}