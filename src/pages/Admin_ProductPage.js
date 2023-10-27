import "../css/Admin_ProductPage.css";


export default function Admin_ProductPage() {
    function LinkAddPage() {
        window.location = '/product_add'
    }
    return (
        <>
            <main className="main_outlet font_01">
                <div className="Product_Page">상품관리</div>
                <div className="P_Btn_Container">
                    <button className="P_Btn_Css font_01">전체
                        <span className="Inner_Btn_box">20</span>
                    </button>
                    <button className="P_Btn_Css font_01">판매중
                        <span className="Inner_Btn_box">20</span>
                    </button>
                    <button className="P_Btn_Css font_01">품절
                        <span className="Inner_Btn_box">20</span>
                    </button>
                    <button className="New_Product font_01" onClick={LinkAddPage}>새 상품 등록</button>
                </div>
                <div className="Product_bar">
                    <span>수정</span>
                    <span>상품명</span>
                    <span>판매상태</span>
                    <span>전시상태</span>
                    <span>판매가</span>
                </div>
                <div className="P_list_container">
                    <button className="P_list_btn font_01">수정</button>
                    <span>
                        <img className="P_list_Img" src="/img/sangchu.png" alt="그림"></img>
                        상추
                    </span>
                    <span>O,X</span>
                    <span>O,X</span>
                    <span>3,000</span>
                </div>
            </main>
        </>
    );
}