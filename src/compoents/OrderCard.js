import { useState } from "react";
import "../css/OrderCard.css";

export default function OrderCard() {
  const nowState = ["미 접수", "조리 중", "배달 중", "배달 완료"];
  const [stateIndex, setStateIndex] = useState(0);
  const btnState = ["수락", "배달 시작", "배달 완료", ""];

  const changeNowState = () => {
    if (stateIndex < 3) {
      setStateIndex((prevIndex) => prevIndex + 1);
    } else {
      return setStateIndex(3);
    }
  };

  return (
    <>
      <div className="orderc_container">
        <div className="order_state_container">
          <p className="order_state">{nowState[stateIndex]}</p>
        </div>
        <div className="order_context_container">
          {/* <div className="__order_img">이미지</div> */}
          <p className="__order_deliorpick">배달/포장</p>
          <p className="__order_adress">익산대로340, 50</p>
          <div className="__order_context">재료</div>
          <div className="__order_remain">
            <p>날짜</p>
            <p>수량</p>
            <p>가격</p>
          </div>
          <p className="__order_request">요청사항</p>
        </div>
        <div className="order_btn_container">
          <button className="__order_okbtn font_01" onClick={changeNowState}>
            {btnState[stateIndex]}
          </button>
          <button className="__order_nobtn font_01">취소</button>
        </div>
      </div>
    </>
  );
}
