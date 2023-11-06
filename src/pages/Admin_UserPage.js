import "../css/Admin_UserPage.css";
import Table from "../compoents/Admin_Table";
import SearchBox from "../compoents/SearchBox";

export default function Admin_UserPage() {
  return (
    <>
      <main className="main_outlet font_01">
        <div className="user-title-container">회원</div>
        <SearchBox />
        
    <Table />
  
      </main>
      
    </>
  );
}

