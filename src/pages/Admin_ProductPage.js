import "../css/Admin_ProductPage.css";


export default function Admin_ProductPage() {
    return (
        <>
            <main className="main_outlet font_01">
                <div className="Product_Page">상품관리</div>
                <div className="P_Btn_Container">
                    <button className="P_Btn_Css">전체
                        <span className="Inner_Btn_box">20</span>
                    </button>
                    <button className="P_Btn_Css">판매중
                        <span className="Inner_Btn_box">20</span>
                    </button>
                    <button className="P_Btn_Css">품절
                        <span className="Inner_Btn_box">20</span>
                    </button>
                    <button className="New_Product">새 상품 등록</button>
                </div>
            </main>
        </>
    );
}