import React, { useEffect, useState } from "react";
import ProductDetails from "../Components/ProductDetails";
import SimilarProduct from "../Components/SimilarProduct";
import productsList from "../data/productsList";

const ProductScreen = ({ location }) => {
  const [product, setProduct] = useState(productsList);

  const id = location.pathname
    ? Number(location.pathname.split("product/")[1])
    : "";

  useEffect(() => {
    const updatedItems = productsList.filter((curItems) => {
      return curItems.id === id;
    });
    setProduct(updatedItems);
  }, [id]);

  return (
    <>
      {product.map((product) => (
        <div key={product.id}>
          <div key={`product${product.id}`}>
            <ProductDetails product={product} />
          </div>
        </div>
      ))}
      {product.map((product) => (
        <div key={`similar${product.id}`}>
          <SimilarProduct category={product.category} />
        </div>
      ))}
    </>
  );
};

export default ProductScreen;
