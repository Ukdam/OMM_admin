import "../css/Admin_ProductAddPage.css"
import { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function Admin_ProductAddPage() {
    const [ProductName, setProductName] = useState("");
    const [Price, setPrice] = useState("");
    let fileInput = useRef();

    // 선택한 카테고리를 저장하는 상태
    const [category, setCategory] = useState("");

    const handleCategoryChange = (e) => {
        setCategory(e.target.value); // 선택한 카테고리 값을 상태에 저장
    };

    //전시 상태 true or false
    const [isChecked, setIsChecked] = useState(false);

    const P_CheckedHandler = (e) => {
        setIsChecked(e.target.checked);
    };
    //사진추가

    const [selectedImage, setSelectedImage] = useState(null);
    const imageUploader = useRef(null);



    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
        fileInput.current = file; // 파일 정보를 fileInput에 저장
    };

    const onFileUpload = () => {

        const formData = new FormData();
        formData.append("file", fileInput.current);

        fetch("http://localhost:4000/admin/upload", {
            method: 'POST',
            body: formData
        });
    };

    const [redirect, setRedirect] = useState(false);
    const OnFileUpload2 = async () => {
        const response = await fetch("http://localhost:4000/admin/product", {
            method: "POST",
            body: JSON.stringify({ category, ProductName, isChecked, Price }),
            headers: { "Content-Type": "application/json" },

        });
        if (response.status === 200) {
            setRedirect(true);
        } else {
            alert("정보 보내기 실패");
        }
    }
    if (redirect) return <Navigate to={"/product"} />;

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
                    <button
                        className="font_01"
                        onClick={(event) => { event.preventDefault(); onFileUpload(); OnFileUpload2(); }}
                    >저장</button>
                </div>
                <div className="ProductAdd_Container">
                    <div className="Image_Plus">
                        <div>
                            이미지
                            <input
                                type="file"
                                accept=".jpg, .png"
                                onChange={handleImageUpload}
                                ref={imageUploader}
                                style={{ display: 'none' }}
                            />
                            <button onClick={(event) => {
                                event.preventDefault();
                                imageUploader.current.click();
                            }}>이미지 추가</button>
                        </div>
                        <hr />
                        <div id="imageContainer" style={{ width: "85%", height: 330, zIndex: 1 }}>
                            {selectedImage && <img src={selectedImage} alt="selected" style={{ width: "100%", height: "100%" }} />}
                        </div>
                    </div>
                    <div className="Product_Info">
                        <div className="P_Info_Categori">기본 정보</div>
                        <hr />
                        <div className="input_Info_P">
                            <span>카테고리</span>
                            <select

                                className="input_Select font_01"
                                value={category}
                                onChange={handleCategoryChange}
                            >
                                <option value="">카테고리를 선택하세요</option>
                                <option value="채소">채소</option>
                                <option value="고기">고기</option>
                                <option value="밥/면">밥/면</option>
                                <option value="소스">소스</option>
                                <option value="추가">추가</option>
                            </select>
                        </div>
                        <div className="input_Info_P">
                            <span>상품명</span>
                            <input
                                className="font_01"
                                placeholder="상품명"
                                value={ProductName}
                                onChange={(e) => setProductName(e.target.value)}
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
                                value={Price}
                                onChange={(e) => setPrice(e.target.value)}
                                type="text"
                            ></input>
                        </div>

                    </div>
                </div>
            </form>

        </>
    )
}