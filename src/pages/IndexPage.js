import OrderCard from "../compoents/OrderCard";
import "../css/IndexPage.css";
import React, { useContext, useEffect } from "react";
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

  useEffect(() => {
    fetch("http://localhost:4000/orderlsit", {
      credentials: "include",
    }).then((res) => {
      res.json().then((menuInfo) => {
        setMenuInfo(menuInfo);
      });
    });
  }, []);

  const username = userInfo?.username;

  // const pd_quantity = menuInfo?.pd_quantity;
  // const pd_price = menuInfo?.pd_price;
  // const pd_context = menuInfo?.pd_context;

  return (
    <>
      {username ? (
        <main className="main_outlet font_01">
          <div className="index_titlecontainer">TEST</div>
          <div className="index_maincontainer">
            {menuInfo &&
              menuInfo.map((index) => {
                return <OrderCard />;
              })}
            {/* <OrderCard /> */}
          </div>
        </main>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
}
