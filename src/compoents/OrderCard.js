import "../css/OrderCard.css";

export default function OrderCard() {
  return (
    <>
      <div className="orderc_container">
        <div className="order_state_container">
          <p className="order_state">주문 접수</p>
        </div>
        <div className="order_context_container">
          {/* <div className="__order_img">이미지</div> */}
          <p className="__order_deliorpick">배달/포장</p>
          <p className="__order_adress">익산대로340, 50</p>
          <div className="__order_context">재료asd</div>
          <div className="__order_remain">
            <p>날짜</p>
            <p>수량</p>
            <p>가격</p>
          </div>
          <p className="__order_request">요청사항</p>
        </div>
        <div className="order_btn_container">
          <button className="__order_okbtn font_01">수락</button>
          <button className="__order_nobtn font_01">취소</button>
        </div>
      </div>
    </>
  );
}
