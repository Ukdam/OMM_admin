import "../css/Admin_ReviewPage.css";

export default function Admin_ReviewPage() {
  return (
    <>
      <main className="main_outlet font_01">
        <div className="rp_title_container">후기</div>
        <div className="rp_table_container">
          <div className="rp_search_container">검색</div>
          <div className="rp_main">
            <div className="rp_table_header">
              <div>번호</div>
              <div>제목</div>
              <div>점수</div>
              <div>이름</div>
              <div>작성일</div>
            </div>

            {/*  */}
            <div className="rp_table_list">
              <div>1</div>
              <div>
                ullamcorper purus sit amet nulla quisque arcu libero rutrum
                aclobortis asdddddddddddddddddddddddasdasd
              </div>
              <div>5</div>
              <div>홍길동</div>
              <div>6/9/2023</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
