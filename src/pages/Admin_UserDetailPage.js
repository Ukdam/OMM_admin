import "../css/Admin_UserDetailPage.css";


export default function Admin_UserDetailPage() {
  function UserPage() {
    window.location = '/user'
  }
  return (
    <>
      <main className="main_outlet font_01">
        <div className="user-title-container">회원상세정보</div>
        <button className="D_cancle_btn font_01" onClick={UserPage}>취소</button>
        <button className="D_save_btn font_01 ">저장</button>
        <div className="detailcontainer">
          <div className="detailcontainer1">
            <p>프로필</p>
            <hr />
            <div>
              <p className="no-margin">
                <span className="profile-font1">회원가입일</span>
                <input
                  className="profile-font"
                  placeholder="2023-09-24"
                  value={""}
                  type="text"
                ></input>
              </p>
              <p className="no-margin">
                <span className="profile-font1">아이디</span>
                <input
                  className="profile-font"
                  placeholder="test1"
                  value={""}
                  type="text"
                ></input>
              </p>
              <p className="no-margin">
                <span className="profile-font1">이메일주소</span>
                <input
                  className="profile-font"
                  placeholder="example@gmail.com"
                  value={""}
                  type="text"
                ></input>
              </p>
              <p className="no-margin">
                <span className="profile-font1">이름</span>
                <input
                  className="profile-font"
                  placeholder="test1"
                  value={""}
                  type="text"
                ></input>
              </p>
              <p className="no-margin">
                <span className="profile-font1">휴대전화</span>
                <input
                  className="profile-font"
                  placeholder="010-0000-0000"
                  value={""}
                  type="text"
                ></input>
              </p>
            </div>
          </div>
          <div className="detailcontainer-right">
            <div className="detailcontainer2">
              <p>마케팅 광고 수신 동의</p>
              <hr />
              <p className="profile-font1">이메일</p>
              <p className="profile-font1">sms</p>
            </div>
            <div className="detailcontainer3">
              <p>선택적 동의 항목</p>
              <hr />
              <p className="profile-font1">개인정보 수집 동의</p>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}