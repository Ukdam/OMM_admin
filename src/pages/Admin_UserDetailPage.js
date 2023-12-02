import { Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Admin_UserDetailPage.css";

export default function Admin_UserDetailPage() {
  function UserPage() {
    window.location = "/user";
  }

  const [name, setname] = useState('');
  const [date, setdate] = useState('');
  const [email, setemail] = useState('');
  const [p_id, setid] = useState('');
  const [tel, settel] = useState('');
  const [market, setmarket] = useState(false);
  const [market2, setmarket2] = useState(false);
  const [market3, setmarket3] = useState(false);


  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4000/admin/Userdata/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setItem(data);
        setname(data.name);
        setdate(data.createdAt);
        setid(data.username);
        setemail(data.email);
        settel(data.tel);
        setmarket(data.Check1);
        setmarket2(data.Check2);
        setmarket3(data.Check3);
      })
      .catch(error => console.error("Error:", error));
  }, [id]);

  const date1 = new Date(date);
  const formattedDate = `${date1.getFullYear()}-${date1.getMonth() + 1}-${date1.getDate()}`;

  return (
    <>
      <main className="main_outlet font_01">
        <div className="user-title-container">회원상세정보</div>
        <button className="D_cancle_btn font_01" onClick={UserPage}>
          X
        </button>
        {/* <button className="D_save_btn font_01 ">저장</button> */}
        <div className="detailcontainer">
          <div className="detailcontainer1">
            <p>프로필</p>
            {/* <hr /> */}
            <div className="profile_box">
              <p className="no-margin">
                <span className="profile-font1">회원가입일</span>
                <input
                  disabled
                  className="profile-font"
                  onChange={(e) => setdate(e.target.value)}
                  value={formattedDate}
                  type="text"
                ></input>
              </p>
              <p className="no-margin">
                <span className="profile-font1">아이디</span>
                <input
                  disabled
                  className="profile-font"
                  onChange={(e) => setid(e.target.value)}
                  value={p_id}
                  type="text"
                ></input>
              </p>
              <p className="no-margin">
                <span className="profile-font1">이메일주소</span>
                <input
                  disabled
                  className="profile-font"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  type="text"
                ></input>
              </p>
              <p className="no-margin">
                <span className="profile-font1">이름</span>
                <input
                  disabled
                  className="profile-font"
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                  type="text"
                ></input>
              </p>
              <p className="no-margin">
                <span className="profile-font1">휴대전화</span>
                <input
                  disabled
                  className="profile-font"
                  onChange={(e) => settel(e.target.value)}
                  value={tel}
                  type="text"
                ></input>
              </p>
            </div>
          </div>

          {/* 마케팅 광고 수신 동의 */}
          <div className="detailcontainer-right">
            <div className="detailcontainer2">
              <p>마케팅 광고 수신 동의</p>
              {/* <hr /> */}
              <div className="detailright_box">
                <div>
                  <p className="profile-font1">이메일</p>
                  <div>
                    <Switch
                      disabled
                      onChange={(e) => setmarket(e.target.value)}
                      checked={market}
                    />
                  </div>
                </div>

                <div>
                  <p className="profile-font1">sms</p>
                  <div>
                    <Switch
                      disabled
                      onChange={(e) => setmarket2(e.target.value)}
                      checked={market2}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 선택적 동의 항목 */}
            <div className="detailcontainer3">
              <p>선택적 동의 항목</p>

              <div className="detailright_box2">
                <p className="profile-font1">개인정보 수집 동의</p>
                <div>
                  <Switch
                    disabled
                    onChange={(e) => setmarket3(e.target.value)}
                    checked={market3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
