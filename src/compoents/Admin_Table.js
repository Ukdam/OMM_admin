import React from 'react';
import "../css/Admin_UserPage.css";
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Table = () => {

  const buttonStyle = {
    backgroundColor: '#F1FEFF',
    color: 'black',
    padding: '5px 10px', 
    borderRadius: '5px',
    textDecoration: 'none',
    border: '1px solid black',
  };

    return (
      <table>
        <thead>
        <tr className='user-table-head'>
            <th>관리</th>
            <th>아이디</th>
            <th>이름</th>
            <th>휴대번호</th>
            <th>회원가입일</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <Link to="..\pages\Admin_UserDetailPage.js" style={buttonStyle} >상세</Link>
            <td>test01</td>
            <td>장씨</td>
            <td>010-1234-5678</td>
            <td>2034-09-19</td>
        </tr>
        </tbody>
      </table>
    );
  }
  
  export default Table;