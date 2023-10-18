import OrderCard from "../compoents/OrderCard";
import "../css/IndexPage.css";

export default function IndexPage() {
  return (
    <main className="main_outlet font_01">
      <div className="index_titlecontainer">TEST</div>
      <div className="index_maincontainer">
        <OrderCard />
      </div>
    </main>
  );
}
