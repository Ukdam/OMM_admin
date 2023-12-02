import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Admin_ProductPage.css";
import Pagination from "react-js-pagination";

export default function Admin_ProductPage() {
  function LinkAddPage() {
    window.location = "/product_add";
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/admin/Productdata")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const [activePage, setActivePage] = useState(1);
  const itemsCountPerPage = 10;

  const indexOfLastItem = activePage * itemsCountPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsCountPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <>
      <main className="main_outlet font_01">
        <div className="p_title_container">상품관리</div>
        {/* <div className="Product_Page">상품관리</div> */}
        <div className="P_Btn_Container">
          <button className="P_Btn_Css font_01">
            전체
            <span className="Inner_Btn_box">{data.length}</span>
          </button>
          <button className="P_Btn_Css font_01">
            판매중
            <span className="Inner_Btn_box">{data.length}</span>
          </button>
          <button className="P_Btn_Css font_01">
            품절
            <span className="Inner_Btn_box">0</span>
          </button>
          <button className="New_Product font_01" onClick={LinkAddPage}>
            새 상품 등록
          </button>
        </div>
        <div className="Product_bar">
          <span>수정</span>
          <span>카테고리</span>
          <span>이름</span>
          <span>판매상태</span>
          <span>판매가</span>
        </div>
        <div className="P_list_container">
          <ul>
            {currentItems.map(item => (
              <li key={item._id} className="Listli">
                <span>
                  <button className="P_list_btn font_01">
                    <Link to={`/product_addUpdate/${item._id}`}>수정</Link>
                  </button>
                </span>
                <span>{item.category}</span>
                <span>
                  <img className="P_list_Img" src={item.ImageUrl} alt="그림"></img>
                  {item.ProductName}
                </span>
                <span>{item.isChecked ? "O" : "X"}</span>
                <span>{item.Price}</span>
              </li>
            ))}
            <Pagination
              activePage={activePage}
              itemsCountPerPage={itemsCountPerPage}
              totalItemsCount={data.length}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            />
          </ul>
        </div>
      </main>
    </>
  );
}
