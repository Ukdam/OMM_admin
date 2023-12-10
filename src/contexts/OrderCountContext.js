import React, { useState } from "react";
import { useCallback } from "react";
import { createContext } from "react";

export const OrderCountContext = createContext({});

export default function OrderCountProvider({ children }){
  const [orderCount, setOrderCount] = useState({
    allCount: 0,
    beforeCount: 0,
    acceptCount: 0,
    onDeliveryCount: 0,
    completedCount: 0,
    cancelCount: 0,
  });

  const [orderInfo, setOrderInfo] = useState([]);

  const updateOrderCounts = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:4000/admin/orderlist", {});
      const data = await response.json();
      setOrderInfo(data);
      setOrderCount({
        beforeCount: data.filter(order => order.p_state == '미 접수').length,
        acceptCount: data.filter(order => order.p_state == '주문 접수').length,
        allCount: data.length,
        onDeliveryCount: data.filter(order => order.p_state == '배달 중' || order.p_state == '포장 완료').length,
        completedCount: data.filter(order => order.p_state == '배달 완료' || order.p_state == '픽업 완료').length,
        cancelCount: data.filter(order => order.p_state == '주문 취소').length,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <OrderCountContext.Provider value={{ orderCount, updateOrderCounts, orderInfo, setOrderInfo }}>
      {children}
    </OrderCountContext.Provider>
  );
};