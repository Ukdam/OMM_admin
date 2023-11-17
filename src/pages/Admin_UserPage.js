import "../css/Admin_UserPage.css";

export default function Admin_UserPage() {
  function UserDetialPage() {
    window.location = "/user_detail";
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
          <div>관리</div>
          <div>아이디</div>
          <div>이름</div>
          <div>휴대번호</div>
          <div>회원가입일</div>
        </div>

        {/* context */}
        <div className="U_list_container">
          <div>
            <button className="U_detail_btn font_01" onClick={UserDetialPage}>
              상세
            </button>
          </div>
          <div>test01</div>
          <div>장씨</div>
          <div>010-1234-5678</div>
          <div>2034-09-19</div>
        </div>
        <div className="U_list_container">
          <div>
            <button className="U_detail_btn font_01" onClick={UserDetialPage}>
              상세
            </button>
          </div>
          <div>test01</div>
          <div>장씨</div>
          <div>010-1234-5678</div>
          <div>2034-09-19</div>
        </div>
        <div className="U_list_container">
          <div>
            <button className="U_detail_btn font_01" onClick={UserDetialPage}>
              상세
            </button>
          </div>
          <div>test01</div>
          <div>장씨</div>
          <div>010-1234-5678</div>
          <div>2034-09-19</div>
        </div>
      </main>
    </>
  );
}
