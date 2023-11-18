import { Chip } from "@mui/material";
import "../../css/Admin_OrderPage.css";
import { Outlet } from "react-router-dom";

export default function Admin_OnDeliveryPage() {
  // const [orderlists, setOrderlists] = useState([]);
  // useEffect(() => {
  //   const orderlistData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:4000/admin/orderlist", {
  //         credentials: "include",
  //       });
  //       const orderlists = await response.json();
  //       setOrderlists(orderlists);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   orderlistData();
  //   const intervalId = setInterval(orderlistData, 5000);

  //   // 컴포넌트가 언마운트되면 setInterval을 해제
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <>
      <div className="op_main_container">
        <div className="op_tap_container">
          {/*  */}
          <button
            onClick={() => (window.location = "/order/allOrder")}
            style={{ border: "none" }}
          >
            <p className="font_01">
              전체
              <Chip
                label={20}
                variant="outlined"
                style={{ backgroundColor: "white", marginLeft: 5 }}
                size="small"
              />
            </p>
          </button>
          {/*  */}
          <button
            onClick={() => (window.location = "/order/beforeOrder")}
            style={{ border: "none" }}
          >
            <p className="font_01">
              미 접수
              <Chip
                label={20}
                variant="outlined"
                style={{ backgroundColor: "white", marginLeft: 5 }}
                size="small"
              />
            </p>
          </button>
          {/*  */}
          <button
            onClick={() => (window.location = "/order/acceptOrder")}
            style={{ border: "none" }}
          >
            <p className="font_01">
              주문 접수
              <Chip
                label={20}
                variant="outlined"
                style={{ backgroundColor: "white", marginLeft: 5 }}
                size="small"
              />
            </p>
          </button>
          {/*  */}
          <button
            onClick={() => (window.location = "/order/onDelivery")}
            className="op_tap_selectBtn"
          >
            <p className="font_01">
              배달 중
              <Chip
                label={20}
                variant="outlined"
                style={{ backgroundColor: "white", marginLeft: 5 }}
                size="small"
              />
            </p>
          </button>
          {/*  */}
          <button
            onClick={() => (window.location = "/order/deliveryCompleted")}
            style={{ border: "none" }}
          >
            <p className="font_01">
              배달 완료
              <Chip
                label={20}
                variant="outlined"
                style={{ backgroundColor: "white", marginLeft: 5 }}
                size="small"
              />
            </p>
          </button>
          {/*  */}
          <button
            onClick={() => (window.location = "/order/cancelOrder")}
            style={{ border: "none" }}
          >
            <p className="font_01">
              주문 취소
              <Chip
                label={20}
                variant="outlined"
                style={{ backgroundColor: "white", marginLeft: 5 }}
                size="small"
              />
            </p>
          </button>
        </div>
        {/* {orderlists.length > 0 &&
              orderlists.map((orderlist) => (
                <Admin_OrderCard {...orderlist} key={orderlist._id} />
              ))} */}

        <div className="op_tapContent_container">
          <div className="op_test_box">주문카드</div>
          <div className="op_test_box">주문카드</div>
          <div className="op_test_box">주문카드</div>
          <div className="op_test_box">주문카드</div>
          <div className="op_test_box">주문카드</div>
          <div className="op_test_box">주문카드</div>
          <div className="op_test_box">주문카드</div>
          <div className="op_test_box">주문카드</div>
        </div>
      </div>
    </>
  );
}
