import "../css/Recentorder_Card.css";

export default function Recentorder_Card({order}) {
  return (
    <>
      <div className="roc_container">
        <p className="__roc_ordernum font_02">주문 번호 : {order._id} </p>
        <div className="roc_context">
        {order.p_ingredient.split(',')
        .filter(ingredient => ingredient.trim() !== '') //않빈곳만
        .map((ingredient, index) => (
          <p key={index}>{ingredient.trim()}</p>
        ))}
        </div>
      </div>
    </>
  );
}
