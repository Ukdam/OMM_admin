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
  // useEffect(() => {
  //   fetch("http://localhost:4000/profile", {
  //     credentials: "include",
  //   }).then((res) => {
  //     res.json().then((userInfo) => {
  //       setUserInfo(userInfo);
  //     });
  //   });
  // }, []);

  const username = userInfo?.username;

  return (
    <>
      {username ? (
        <main className="main_outlet font_01">
          <div className="index_titlecontainer">TEST</div>
          <div className="index_maincontainer">
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
        </main>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
}
