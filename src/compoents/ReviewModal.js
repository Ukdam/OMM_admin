import "../css/Admin_ReviewPage.css";
import { Close } from "@mui/icons-material";

export default function ReviewModal({ modalClose }) {
  return (
    <>
      <div className="rp_modal_container">
        <div className="rp_modal_title font_01">
          <p>후기 - id</p>
          <button className="rp_modal_closebtn" onClick={modalClose}>
            <Close />
          </button>
        </div>
        <div className="rp_modal_main">
          <div className="rp_modal_imageContainer">
            <div className="rp_modal_imagebox">이미지1</div>
            <div className="rp_modal_imagebox">이미지1</div>
            <div className="rp_modal_imagebox">이미지1</div>
            <div className="rp_modal_imagebox">이미지1</div>
            <div className="rp_modal_imagebox">이미지1</div>
          </div>
          <div>
            <div>작성자</div>
            <div>별점</div>
            <div>작성일자</div>
          </div>
          <div>내용</div>
          <div>재료</div>
        </div>
      </div>
    </>
  );
}
