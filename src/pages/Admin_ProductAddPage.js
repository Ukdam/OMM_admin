import "../css/Admin_ProductAddPage.css"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Admin_ProductAddPage() {



    //전시 상태 true or false
    const [isChecked, setIsChecked] = useState(false);

    const P_CheckedHandler = (e) => {
        setIsChecked(e.target.checked);
    };



    return (
        <>
            <form className="main_outlet font_01">
                <div className="ProductAdd_Page">상품상세</div>
                <hr />
                <div className="ProductAdd_Btn_Container">
                    <Link to={"/product"}>
                        <button className="font_01">목록보기</button>
                    </Link>
                    <button className="font_01">삭제</button>
                    <button className="font_01">저장</button>
                </div>
                <div className="ProductAdd_Container">
                    <div className="Image_Plus">
                        <div>
                            이미지
                            <button>이미지 추가</button>
                        </div>
                        <hr />
                        <img src="/img/sangchu.png" alt="재료사진" />
                    </div>
                    <div className="Product_Info">
                        <div className="P_Info_Categori">기본 정보</div>
                        <hr />
                        <div className="input_Info_P">
                            <span>카테고리</span>
                            <input
                                className="font_01"
                                placeholder="카테고리"
                                value={""}
                                type="text"
                            ></input>
                        </div>
                        <div className="input_Info_P">
                            <span>상품명</span>
                            <input
                                className="font_01"
                                placeholder="상품명"
                                value={""}
                                type="text"
                            ></input>
                        </div>
                        <div className="input_Info_P">
                            <span>판매상태</span>
                            <label className="switch_P">
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={P_CheckedHandler}
                                />
                                <span className="slider_P"></span>
                            </label>
                        </div>
                        <div className="input_Info_P">
                            <span>판매가</span>
                            <input
                                className="font_01"
                                placeholder="판매금액"
                                value={""}
                                type="text"
                            ></input>
                        </div>

                    </div>
                </div>
            </form>

        </>
    )
}