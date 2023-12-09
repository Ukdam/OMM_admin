import { Chip } from "@mui/material";
import "../../css/Admin_OrderPage.css";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { SocketContext } from "../../contexts/SocketContext";
import { useState } from "react";
import { useEffect } from "react";
import Admin_OrderCard from "../../compoents/Admin_OrderCard";
import { OrderCountContext } from "../../contexts/OrderCountContext";

export default function Admin_OnDeliveryPage() {
  const socket = useContext(SocketContext);
  const [orderlists, setOrderlists] = useState([]);


  useEffect(() => {
    if (socket) {
      const orderlistData = async () => {
        try {
          const response = await fetch(
            "http://localhost:4000/admin/orderlist/onDelivery",
            {}
          );
          const data = await response.json();
          setOrderlists(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      orderlistData();
  
      socket.on('paymentDataChanged', (data) => {
        console.log('Payment data changed:', data);
        orderlistData();
      });

      return () => {
        socket.off('paymentDataChanged');
      };
    }
  }, [socket]);

  return (
    <>
      <div className="op_main_container">
        <div className="op_tapContent_container">
        {orderlists.length > 0 &&
            orderlists.map((orderlist) => (
              <Admin_OrderCard {...orderlist} key={orderlist._id} />
            ))}
        </div>
      </div>
    </>
  );
}
