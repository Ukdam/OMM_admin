import "../css/Admin_Sidebar.css";
import logo from "../ommlogo.svg";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/Admin_UserContext";
import { Link, Navigate, useLocation } from "react-router-dom";

export default function Admin_Sidebar() {
  // const { setUserInfo, userInfo } = useContext(UserContext);

  // useEffect(() => {
  //   fetch("http://localhost:4000/admin/profile", {
  //     credentials: "include",
  //   }).then((res) => {
  //     res.json().then((userInfo) => {
  //       setUserInfo(userInfo);
  //     });
  //   });
  // }, []);

  // function logout() {
  //   fetch("http://localhost:4000/admin/logout", {
  //     credentials: "include",
  //     method: "POST",
  //   });
  //   setUserInfo(null);
  // }

  // const username = userInfo?.username;

  const location = useLocation();

  return (
    <>
      <div className="sidebar_container font_01">
        <div className="sidebar_logocontainer">
          <img src={logo} alt="로고" className="ommlogo" />
        </div>
        <div className="sidebar_dashboardcontainer maincontainer">
          <Link to={"/"} className={location.pathname === "/" ? "active" : ""}>
            <p>
              <i className="fa-solid fa-table-columns"></i>
            </p>
            <p>대시보드</p>
          </Link>
        </div>
        <div className="sidebar_ordercontainer maincontainer">
          <Link
            to={"/order"}
            className={
              location.pathname === "/order"
                ? "active"
                : "" || location.pathname === "/order/allOrder"
                  ? "active"
                  : "" || location.pathname === "/order/beforeOrder"
                    ? "active"
                    : "" || location.pathname === "/order/acceptOrder"
                      ? "active"
                      : "" || location.pathname === "/order/onDelivery"
                        ? "active"
                        : "" || location.pathname === "/order/deliveryCompleted"
                          ? "active"
                          : "" || location.pathname === "/order/cancelOrder"
                            ? "active"
                            : ""
            }
          >
            <p>
              <i className="fa-solid fa-cart-shopping"></i>
            </p>
            <p>주문</p>
          </Link>
        </div>
        <div className="sidebar_productcontainer maincontainer">
          <Link
            to={"/product"}
            className={
              location.pathname === "/product"
                ? "active"
                : "" || location.pathname === "/product_add"
                  ? "active"
                  : ""
            }
          >
            <p>
              <i className="fa-solid fa-boxes-stacked"></i>
            </p>
            <p>상품</p>
          </Link>
        </div>

        <div className="sidebar_usercontainer maincontainer">
          <Link
            to={"/user"}
            className={
              location.pathname === "/user"
                ? "active"
                : "" || location.pathname === "/user_detail"
                  ? "active"
                  : ""
            }
          >
            <p>
              <i className="fa-solid fa-user"></i>
            </p>
            <p>회원</p>
          </Link>
        </div>
        <div className="sidebar_noticecontainer maincontainer">
          <Link
            to={"/review"}
            className={
              location.pathname === "/review"
                ? "active"
                : "" || location.pathname === "/review_id"
                  ? "active"
                  : ""
            }
          >
            <p>
              <i className="fa-solid fa-clipboard-list"></i>
            </p>
            <p>후기</p>
          </Link>
        </div>
        <div className="sidebar_remaincontainer">
          <div>
            {/* 로그인시 이름 */}
            <p>이름</p>
            <button className="font_01">로그아웃</button>
          </div>
        </div>
      </div>
    </>
  );
}
