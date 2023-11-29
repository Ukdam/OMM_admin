import "../css/Admin_UserPage.css";

import {
  IconButton,
  InputAdornment,
  TextField,

} from "@mui/material";
import "../css/Admin_ReviewPage.css";
import { useState } from "react";
import {
  Search,
} from "@mui/icons-material";


export default function Admin_UserPage() {
  function UserDetialPage() {
    window.location = "/user_detail";
  }

  const [searchText, setSearchText] = useState("");


  return (
    <>
      <main className="main_outlet font_01">
        <div className="user-title-container">회원</div>
        <div className="rp_search_container">
          <div className="rp_search_box">
            <TextField
              fullWidth
              id="rp_searchInput"
              label="검색"
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton color="primary" sx={{ p: "10px" }}>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
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
