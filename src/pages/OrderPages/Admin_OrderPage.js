import { Alert, Chip, Snackbar } from "@mui/material";
import "../../css/Admin_OrderPage.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { OrderCountContext } from "../../contexts/OrderCountContext";
import { SocketContext } from "../../contexts/SocketContext";

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

export default function Admin_OrderPage() {
  //orderPage 처음 들어가면 AllOrderPage로 이동
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/order') {
      navigate('/order/allOrder');
    }
  }, [navigate, location]);

  const { orderCount, updateOrderCounts } = useContext(OrderCountContext);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    updateOrderCounts();
  }, [updateOrderCounts]);

  const socket = useContext(SocketContext);

  useEffect(() => {
    if (socket == null) return;

    const handleOrderListUpdate = () => {
      updateOrderCounts();
      handleClick();
    };

    socket.on('paymentDataChanged',handleOrderListUpdate);
    
    return () => {
      socket.off('paymentDataChanged', handleOrderListUpdate);
    };
  }, [socket, updateOrderCounts]);


  const allCount = orderCount.allCount;
  const beforeCount = orderCount.beforeCount;
  const acceptCount = orderCount.acceptCount;
  const onDeliveryCount = orderCount.onDeliveryCount;
  const completedCount = orderCount.completedCount;
  const cancelCount = orderCount.cancelCount;

  return (
    <>
      <main className="main_outlet font_01 main_flex">
        <div className="op_title_container">주문</div>
        <div className="op_main_container">
          <div className="op_tap_container">
            {/*  */}
            <button
              onClick={() => (window.location = "/order/allOrder")}
              style={{ border: "none", borderBottom: location.pathname === "/order/allOrder" ? "3px solid #2196f3" : "none" }}
            >
              <p className="font_01">
                전체
                <Chip
                  label={allCount}
                  variant="outlined"
                  style={{ backgroundColor: "white", marginLeft: 5 }}
                  size="small"
                />
              </p>
            </button>

            {/*  */}
            <button
              onClick={() => (window.location = "/order/beforeOrder")}
              style={{ border: "none", borderBottom: location.pathname === "/order/beforeOrder" ? "3px solid #2196f3" : "none" }}
            >
              <p className="font_01">
                미 접수
                <Chip
                  label={beforeCount}
                  variant="outlined"
                  style={{ backgroundColor: "white", marginLeft: 5 }}
                  size="small"
                />
              </p>
            </button>

            {/*  */}
            <button
              onClick={() => (window.location = "/order/acceptOrder")}
              style={{ border: "none", borderBottom: location.pathname === "/order/acceptOrder" ? "3px solid #2196f3" : "none" }}
            >
              <p className="font_01">
                주문 접수
                <Chip
                  label={acceptCount}
                  variant="outlined"
                  style={{ backgroundColor: "white", marginLeft: 5 }}
                  size="small"
                />
              </p>
            </button>

            {/*  */}
            <button
              onClick={() => (window.location = "/order/onDelivery")}
              style={{ border: "none", borderBottom: location.pathname === "/order/onDelivery" ? "3px solid #2196f3" : "none" }}
            >
              <p className="font_01">
                배달 중/포장 완료
                <Chip
                  label={onDeliveryCount}
                  variant="outlined"
                  style={{ backgroundColor: "white", marginLeft: 5 }}
                  size="small"
                />
              </p>
            </button>

            {/*  */}
            <button
              onClick={() => (window.location = "/order/deliveryCompleted")}
              style={{ border: "none", borderBottom: location.pathname === "/order/deliveryCompleted" ? "3px solid #2196f3" : "none" }}
            >
              <p className="font_01">
                배달 / 픽업 완료
                <Chip
                  label={completedCount}
                  variant="outlined"
                  style={{ backgroundColor: "white", marginLeft: 5 }}
                  size="small"
                />
              </p>
            </button>

            {/*  */}

            <button
              onClick={() => (window.location = "/order/cancelOrder")}
              style={{ border: "none", borderBottom: location.pathname === "/order/cancelOrder" ? "3px solid #2196f3" : "none" }}
            >
              <p className="font_01">
                주문 취소
                <Chip
                  label={cancelCount}
                  variant="outlined"
                  style={{ backgroundColor: "white", marginLeft: 5 }}
                  size="small"
                />
              </p>
            </button>
          </div>
          <Outlet />
        </div>
      </main>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          주문 데이터가 업데이트되었습니다.
        </Alert>
      </Snackbar>
    </>
  );
}
