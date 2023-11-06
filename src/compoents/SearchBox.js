import React from 'react';
import "../css/Admin_UserPage.css";

const SearchBox = () => {
    return (
        <div className="serch-container">
      <div className="searchbox">
        <p>아이디, 이메일, 이름</p>
      </div>
      <button className="search-button">검색</button>
      <button className="per-page-button">10개씩</button>
      </div>
    );
  };
  
  export default SearchBox;