import React, { useState, useEffect } from "react";
import { getProducts } from "../api/products";

export const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getProducts();
      setProducts(result);
    };
    fetchProducts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.price.value}</td>
            <td>{product.price.rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
