import "../css/Admin_UserPage.css";


export default function Admin_UserPage() {
  function UserDetialPage() {
    window.location = '/user_detail'
  }
  return (
    <>
      <main className="main_outlet font_01">
        <div className="user-title-container">회원</div>
        <div className="user-search-container">
          <div className="searchbox">
            <p>아이디, 이메일, 이름</p>
          </div>
          <button className="search-button">검색</button>
          <button className="per-page-button">10개씩</button>
        </div>

        <div className="Usertable_Line1">
          <span>관리</span>
          <span>아이디</span>
          <span>이름</span>
          <span>휴대번호</span>
          <span>회원가입일</span>
        </div>
        <div className="U_list_container">
          <button className="U_detail_btn" onClick={UserDetialPage}>상세</button>
          <span>test01</span>
          <span>장씨</span>
          <span>010-1234-5678</span>
          <span>2034-09-19</span>
        </div>
      </main>

    </>
  );
}

