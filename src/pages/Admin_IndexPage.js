// import Admin_OrderCard from "../component/Admin_OrderCard";
import "../css/Admin_IndexPage.css";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/Admin_UserContext";
import { Navigate } from "react-router-dom";
import { MenuContext } from "../contexts/Admin_MenuContext";
import Recentorder_Card from "../compoents/Recentorder_Card";
import Dash_Chart from "../compoents/Dash_Chart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import { OrderCountContext } from "../contexts/OrderCountContext";
import { ProductCountContext } from "../contexts/ProductCountContext";
import { SocketContext } from "../contexts/SocketContext";
import { ReviewCountContext } from "../contexts/ReviewCountContext";

export default function Admin_IndexPage() {
  const { orderCount, updateOrderCounts, orderInfo } = useContext(OrderCountContext);
  const sortedOrderInfo = [...orderInfo].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const beforeCount = orderCount?.beforeCount;
  const acceptCount = orderCount?.acceptCount;
  const onDeliveryCount = orderCount?.onDeliveryCount;
  const completedCount = orderCount?.completedCount;

  const { productCount, updateProductCounts, productInfo } = useContext(ProductCountContext);
  const p_allCount = productCount?.p_allCount;
  const p_soldoutCount = productCount?.p_soldoutCount;
  // productInfo 배열을 랜덤으로 섞기
  const randomProductInfo = [...productInfo].sort(() => Math.random() - 0.5);
  // productInfo 배열을 count 내림차순으로 섞기
  // const sortedProductInfo = [...productInfo].sort((a, b) => b.count - a.count);

  const { reviewCount, updateReviewCounts } = useContext(ReviewCountContext);
  const r_allCount = reviewCount?.r_allCount;
  const r_replyCount = reviewCount?.r_replyCount;

  useEffect(() => {
    updateOrderCounts();
    updateProductCounts();
    updateReviewCounts();
  }, [updateOrderCounts, updateProductCounts,updateReviewCounts]);

  const socket = useContext(SocketContext);

  useEffect(() => {
    if (socket == null) return;

    const handleListUpdate = () => {
      updateOrderCounts();
      updateProductCounts();
      updateReviewCounts();
    };

    socket.on('paymentDataChanged',handleListUpdate);
    socket.on('productDataChanged',handleListUpdate);
    socket.on('customerDataChanged',handleListUpdate);
    socket.on('reviewDataChanged',handleListUpdate);

    return () => {
      socket.off('paymentDataChanged', handleListUpdate);
      socket.off('productDataChanged', handleListUpdate);
      socket.off('customerDataChanged', handleListUpdate);
      socket.off('reviewDataChanged', handleListUpdate);
    };
  }, [socket, updateOrderCounts, updateProductCounts, updateReviewCounts]);


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
                  <p className="__ob_count">{beforeCount}</p>
                  <p>대기</p>
                </div>
                <i class="fa-solid fa-chevron-right"></i>
                {/* 진행 중 박스 */}
                <div className="__dash_ob_underwaybox">
                  <p className="__ob_count">{acceptCount + onDeliveryCount}</p>
                  <p>진행 중</p>
                </div>
                <i class="fa-solid fa-chevron-right"></i>
                {/* 완료 박스 */}
                <div className="__dash_ob_completebox">
                  <p className="__ob_count">{completedCount}</p>
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
                  <p className="__pb_count">{p_allCount - p_soldoutCount}</p>
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
                  <p className="__pb_count">{p_soldoutCount}</p>
                </div>
              </div>
            </div>
            <div className="dashboard dash_reviewbox">
              <p className="dash_boxtitle">후기</p>
              <div className="__dash_reviewbox">
                {/* 최대 999 넘으면 999+ */}
                <p>
                  <span>주문 후기 (전체)</span>
                  <span className="__rb_count">{r_allCount}</span>
                  <span>건</span>
                </p>
                <p>
                  <span>미 답변 문의 (전체)</span>
                  <span className="__rb_count">{r_replyCount}</span>
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
                    {sortedOrderInfo.slice(0, 5).map((order, index) => (
                      <SwiperSlide key={index} className="__rob_slide">
                        <Recentorder_Card order={order} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="dashboard dash_numofpaymentbox">
                <p className="dash_boxtitle">결제완료 건수</p>
                <div className="__dash_numofpaymentbox">
                  <div className="__nop_chartbox">
                    <Dash_Chart />
                  </div>
                  <div className="__nop_chartsidebox">
                    {/* 오늘 */}
                    <p>
                      <p className="__nop_count">60</p>
                      <p>오늘</p>
                    </p>
                    {/* 최근 7일 */}
                    <p>
                      <p className="__nop_count">480</p>
                      <p>최근 7일</p>
                    </p>
                    {/* 최근 한달 */}
                    <p>
                      <p className="__nop_count">1800</p>
                      <p>최근 한달</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard dash_bestproductbox">
              <p className="dash_boxtitle">인기 재료</p>
              <div className="__dash_bestproductbox">
              {randomProductInfo.slice(0, 4).map((product, index) => (
                <div key={index} className="__bp_bestproduct">
                  <div className="__bp_img">
                    <img src={`http://localhost:4000/${product.ImageUrl}`} alt={product.ProductName} style={{width:90, height:90, objectFit:"cover"}}/>
                  </div>
                  <p>
                    <p>{product.ProductName}</p>
                    <p className="__bp_count">{product.count}</p>
                  </p>
                </div>
              ))}
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
