import OrderCard from "../compoents/OrderCard";
import "../css/IndexPage.css";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { MenuContext } from "../contexts/MenuContext";

export default function IndexPage() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const { setMenuInfo, menuInfo } = useContext(MenuContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const username = userInfo?.username;

  // useEffect(() => {
  //   fetch("http://localhost:4000/orderlsit", {
  //     credentials: "include",
  //   }).then((res) => {
  //     res.json().then((menuInfo) => {
  //       setMenuInfo(menuInfo);
  //     });
  //   });
  // }, []);

  // const pd_quantity = menuInfo?.pd_quantity;
  // const pd_price = menuInfo?.pd_price;
  // const pd_context = menuInfo?.pd_context;

  const [orderlists, setOrderlists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/orderlist", {
      credentials: "include",
    }).then((res) => {
      res.json().then((orderlists) => {
        setOrderlists(orderlists);
      });
    });
  }, []);

  return (
    <>
      {username ? (
        <main className="main_outlet font_01">
          <div className="index_titlecontainer">TEST</div>
          <div className="index_maincontainer">
            {orderlists.length > 0 &&
              orderlists.map((orderlist) => (
                <OrderCard {...orderlist} key={orderlist._id} />
              ))}
          </div>
        </main>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
}
