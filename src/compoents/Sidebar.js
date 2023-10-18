import "../css/Sidebar.css";
import logo from "../ommlogo.svg";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar_container font_01">
        <div className="sidebar_logocontainer">
          <img src={logo} alt="로고" className="ommlogo" />
        </div>
        <div className="sidebar_dashboardcontainer maincontainer">
          <p>
            <i class="fa-solid fa-table-columns"></i>
          </p>
          <p>대시보드</p>
        </div>
        <div className="sidebar_ordercontainer maincontainer">
          <p>
            <i class="fa-solid fa-cart-shopping"></i>
          </p>
          <p>주문</p>
        </div>
        <div className="sidebar_productcontainer maincontainer">
          <p>
            <i class="fa-solid fa-boxes-stacked"></i>
          </p>
          <p>상품</p>
        </div>
        <div className="sidebar_usercontainer maincontainer">
          <p>
            <i class="fa-solid fa-user"></i>
          </p>
          <p>회원</p>
        </div>
        <div className="sidebar_noticecontainer maincontainer">
          <p>
            <i class="fa-solid fa-clipboard-list"></i>
          </p>
          <p>게시글</p>
        </div>
        <div className="sidebar_remaincontainer">
          <div>
            <p>이름</p>
            <button className="font_01">로그아웃</button>
          </div>
        </div>
      </div>
    </>
  );
}
