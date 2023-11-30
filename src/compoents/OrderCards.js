import React from "react";
import "../css/OrderCards.css";
import { format } from "date-fns";

export default function OrderCards({
  _id,
  p_store,
  p_kind,
  p_quantity,
  p_price,
  p_adress,
  p_request,
  p_ingredient,
  p_payment,
  p_state,
  p_userId,
  createdAt,
}) {
  return (
    <div className="orderCard_container">
      <div
        style={{
          flex: 1,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <div style={{ flex: 1 }}>주문 번호 : {_id}</div>
        <div style={{ flex: 1 }}>주문 종류 : {p_kind}</div>
      </div>
      <div style={{ width: "100%" }}>
        <div>수량 : {p_quantity}</div>
        <div>가격 : {p_price}</div>
      </div>
      <div>주소 : {p_adress}</div>
      <div>요청사항 : {p_request}</div>
      <div>재료 : {p_ingredient}</div>
      <div>결제 방법 : {p_payment}</div>
      <div>주문 상태 : {p_state}</div>
      <div>주문자 : {p_userId}</div>
      <div>
        주문 시간 :
        <time>{format(new Date(createdAt), "yyyy MM d,  hh:mm")}</time>
      </div>
    </div>
  );
}
