// import Admin_OrderCard from "../component/Admin_OrderCard";
import "../css/Admin_IndexPage.css";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/Admin_UserContext";
import { Navigate } from "react-router-dom";
import { MenuContext } from "../contexts/Admin_MenuContext";
import Recentorder_Card from "../compoents/Recentorder_Card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";

export default function Admin_IndexPage() {
  return (
    <>
      <main className="main_outlet font_01">
        <div className="index_titlecontainer">대시보드</div>
        <div className="index_maincontainer">
          <div className="dash_layout1">
            <div className="dashboard dash_orderbox">
              <p className="dash_boxtitle">주문</p>
              <div className="__dash_orderbox">
                {/* 대기 박스 */}
                <div className="__dash_ob_waitbox">
                  <p className="__ob_count">0</p>
                  <p>대기</p>
                </div>
                <i class="fa-solid fa-chevron-right"></i>
                {/* 진행 중 박스 */}
                <div className="__dash_ob_underwaybox">
                  <p className="__ob_count">0</p>
                  <p>진행 중</p>
                </div>
                <i class="fa-solid fa-chevron-right"></i>
                {/* 완료 박스 */}
                <div className="__dash_ob_completebox">
                  <p className="__ob_count">0</p>
                  <p>완료</p>
                </div>
              </div>
            </div>
            <div className="dashboard dash_productbox">
              <p className="dash_boxtitle">재료</p>
              <div className="__dash_productbox">
                {/* 판매 중 박스 */}
                <div className="__dash_pb_sellingbox">
                  <i class="fa-solid fa-box"></i>
                  <p>판매 중</p>
                  <p className="__pb_count">0</p>
                </div>
                {/* 소진 위험 박스 */}
                <div className="__dash_pb_vergeofrunoutbox">
                  <i class="fa-solid fa-box"></i>
                  <p>소진 위험</p>
                  <p className="__pb_count">0</p>
                </div>
                {/* 소진 박스 */}
                <div className="__dash_pb_runoutbox">
                  <i class="fa-solid fa-box"></i>
                  <p>소진</p>
                  <p className="__pb_count">0</p>
                </div>
              </div>
            </div>
            <div className="dashboard dash_reviewbox">
              <p className="dash_boxtitle">후기</p>
              <div className="__dash_reviewbox">
                <p>
                  <span>주문 후기 (오늘)</span>
                  <span className="__rb_count">0</span>
                  <span>건</span>
                </p>
                <p>
                  <span>미 답변 문의 (전체)</span>
                  <span className="__rb_count">999+</span>
                  <span>건</span>
                </p>
              </div>
            </div>
          </div>
          <div className="dash_layout2">
            <div className="dash_layout3">
              <div className="dashboard dash_recentorderbox">
                <p className="dash_boxtitle">최근 주문</p>
                <div className="__dash_recentorderbox">
                  <Swiper
                    slidesPerView={2}
                    grid={{
                      rows: 1,
                    }}
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    className="__rob_swiper"
                  >
                    <SwiperSlide className="__rob_slide">
                      <Recentorder_Card />
                    </SwiperSlide>
                    <SwiperSlide className="__rob_slide">
                      <Recentorder_Card />
                    </SwiperSlide>
                    <SwiperSlide className="__rob_slide">
                      <Recentorder_Card />
                    </SwiperSlide>
                    <SwiperSlide className="__rob_slide">
                      <Recentorder_Card />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="dashboard dash_numofpaymentbox">
                <p className="dash_boxtitle">결제완료 건수</p>
                <div className="__dash_numofpaymentbox">
                  <div className="__nop_chartbox">차트</div>
                  <div className="__nop_chartsidebox">
                    {/* 오늘 */}
                    <p>
                      <p className="__nop_count">0</p>
                      <p>오늘</p>
                    </p>
                    {/* 최근 7일 */}
                    <p>
                      <p className="__nop_count">0</p>
                      <p>최근 7일</p>
                    </p>
                    {/* 최근 한달 */}
                    <p>
                      <p className="__nop_count">0</p>
                      <p>최근 한달</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard dash_bestproductbox">
              <p className="dash_boxtitle">인기 재료</p>
              <div className="__dash_bestproductbox">
                {/* 1 */}
                <div className="__bp_bestproduct">
                  <div className="__bp_img">이미지</div>
                  <p>
                    <p>재료 이름</p>
                    <p className="__bp_count">0</p>
                  </p>
                </div>
                {/* 2 */}
                <div className="__bp_bestproduct">
                  <div className="__bp_img">이미지</div>
                  <p>
                    <p>재료 이름</p>
                    <p className="__bp_count">0</p>
                  </p>
                </div>
                {/* 3 */}
                <div className="__bp_bestproduct">
                  <div className="__bp_img">이미지</div>
                  <p>
                    <p>재료 이름</p>
                    <p className="__bp_count">0</p>
                  </p>
                </div>
                {/* 4 */}
                <div className="__bp_bestproduct">
                  <div className="__bp_img">이미지</div>
                  <p>
                    <p>재료 이름</p>
                    <p className="__bp_count">0</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

//  지우지마셈!!!
// const { setUserInfo, userInfo } = useContext(UserContext);
// const { setMenuInfo, menuInfo } = useContext(MenuContext);

// useEffect(() => {
//   fetch("http://localhost:4000/admin/profile", {
//     credentials: "include",
//   }).then((res) => {
//     res.json().then((userInfo) => {
//       setUserInfo(userInfo);
//     });
//   });
// }, []);

// const username = userInfo?.username;

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

// 지우지 마셈!
// <>
//       {username ? (
//         <main className="main_outlet font_01">
//           <div className="index_titlecontainer">TEST</div>
//           <div className="index_maincontainer">
//             {orderlists.length > 0 &&
//               orderlists.map((orderlist) => (
//                 <Admin_OrderCard {...orderlist} key={orderlist._id} />
//               ))}
//           </div>
//         </main>
//       ) : (
//         <Navigate to={"/admin/login"} />
//       )}
// </>
