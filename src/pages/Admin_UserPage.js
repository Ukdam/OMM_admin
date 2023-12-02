import "../css/Admin_UserPage.css";

import {
  IconButton,
  InputAdornment,
  TextField,

} from "@mui/material";
import "../css/Admin_ReviewPage.css";
import { useEffect, useState } from "react";
import {
  Search,
} from "@mui/icons-material";
import { Link } from "react-router-dom";


export default function Admin_UserPage() {

  const [searchText, setSearchText] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/admin/Userdata")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

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
        <ul>
          {data.map((item) => {
            const date = new Date(item.createdAt);
            const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1
              }-${date.getDate()}`;

            return (
              <li key={item._id}>
                <div className="U_list_container">
                  <div>
                    <button className="U_detail_btn font_01">
                      <Link to={`/user_detail/${item._id}`}>상세</Link>
                    </button>
                  </div>
                  <div>{item.username}</div>
                  <div>{item.name}</div>
                  <div>{item.tel}</div>
                  <div>{formattedDate}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
