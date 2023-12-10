import React, { useState } from "react";
import { useCallback } from "react";
import { createContext } from "react";

export const ProductCountContext = createContext({});

export default function ProductCountProvider({ children }){
  const [productCount, setProductCount] = useState({
    p_allCount: 0,
    p_soldoutCount: 0,
  });
  const [productInfo, setProductInfo] = useState([]);

  const updateProductCounts = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:4000/admin/Productdata", {});
      const data = await response.json();
      setProductInfo(data);
      setProductCount({
        p_allCount: data.length,
        p_soldoutCount: data.filter(product => product.isChecked == false).length,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <ProductCountContext.Provider value={{ productCount, updateProductCounts, productInfo, setProductInfo }}>
      {children}
    </ProductCountContext.Provider>
  );
};