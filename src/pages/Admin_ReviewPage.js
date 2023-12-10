import {
  Backdrop,
  Chip,
  Divider,
  Fade,
  IconButton,
  InputAdornment,
  Modal,
  Rating,
  TextField,
  styled,
} from "@mui/material";
import "../css/Admin_ReviewPage.css";
import { useEffect, useState } from "react";
import {
  Close,
  Search,
  Send,
  ThumbUp,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import { useRef } from "react";
import Ingredient_DATA from "../datas/Ingredient_DATA.json";
import { lightGreen } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function Admin_ReviewPage() {

  const [open, setOpen] = useState(false);
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);
  const [filteredData, setFilteredData] = useState([]);
  const imgcontainerRef = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/admin/Reviewdata")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  let isDown = false;
  let startX;
  let scrollLeft;
  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - imgcontainerRef.current.offsetLeft;
    scrollLeft = imgcontainerRef.current.scrollLeft;
  };
  const handleMouseLeave = () => {
    isDown = false;
  };
  const handleMouseUp = () => {
    isDown = false;
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - imgcontainerRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    imgcontainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // 모달 재료 리스트
  const ListItem = styled("ul")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  const [replyText, setReplyText] = useState([]);
  const [newText, setNewText] = useState("");
  const replyInputRef = useRef(null);

  const replySend = () => {
    if (newText.trim() !== "") {
      setReplyText([...replyText, newText]);
      setNewText("");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      replySend();
    }
  };

  // 검색창
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText === "") {
      setFilteredData(data);
    } else {
      const filteredResults = data.filter((item) =>
        item.r_review.toLowerCase().includes(searchText.toLowerCase()) ||
        item.r_rating.toLowerCase().includes(searchText.toLowerCase()) ||
        item.r_username.toLowerCase().includes(searchText.toLowerCase()) ||
        item.createdAt.includes(searchText)
      );
      setFilteredData(filteredResults);
    }
  }, [searchText, data]);

  return (
    <>
      <main className="main_outlet font_01">
        <div className="rp_title_container">후기</div>
        <div className="rp_table_container">
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

          <div className="rp_main">
            <div className="rp_table_header">
              <div>번호</div>
              <div>제목</div>
              <div>점수</div>
              <div>이름</div>
              <div>작성일</div>
            </div>

            

            {/*  */}
            <div className="rp_table_list">
            <ul>
              {filteredData.map((item) => {
                const date = new Date(item.createdAt);
                const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1
                  }-${date.getDate()}`;

                return (
                  <li key={item._id}>
                    <div className="rp_table_list">
                      <div>{item.r_review}</div>
                      <div>{item.r_rating}</div>
                      <div>{item.r_username}</div>
                      <div>{formattedDate}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
              <div>1</div>
              <div>
                <p
                  onClick={modalOpen}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  이곳은 신선한 재료와 다양한 메뉴로 유명하다는 후문을 듣고
                  선택한 곳이었습니다.
                </p>
              </div>
              <div>
                <Rating value={3} precision={0.5} readOnly />
              </div>
              <div>홍길동</div>
              <div>2023/6/9</div>
            </div>
          </div>
        </div>
      </main>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={modalClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <div className="rp_modal_container">
            <div className="rp_modal_title font_01">
              <p>후기 - id</p>
              <button className="rp_modal_closebtn" onClick={modalClose}>
                <Close />
              </button>
            </div>
            <div className="rp_modal_main">
              <div
                className="rp_modal_imageContainer"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                ref={imgcontainerRef}
              >
                <div className="rp_modal_imagebox">이미지</div>
                <div className="rp_modal_imagebox">이미지</div>
                <div className="rp_modal_imagebox">이미지</div>
                <div className="rp_modal_imagebox">이미지</div>
                <div className="rp_modal_imagebox">이미지</div>
              </div>

              <div className="rp_modal_basicInfoContainer font_01">
                <div>작성자 : 홍길동</div>
                <div>
                  <Rating value={3} precision={0.5} readOnly size="large" />
                </div>
                <div>작성일자 : 2023/6/9</div>
              </div>

              <div className="rp_modal_ingredientContainer font_01">
                {Ingredient_DATA.map((data) => {
                  let icon;

                  if (data.good === true) {
                    icon = (
                      <ThumbUp
                        sx={{ fontSize: 14 }}
                        color="primary"
                        style={{ marginLeft: 10 }}
                      />
                    );
                  }

                  return (
                    <ListItem key={data.key}>
                      <Chip
                        icon={icon}
                        label={data.name}
                        variant="outlined"
                        style={{ backgroundColor: "white" }}
                      />
                    </ListItem>
                  );
                })}
              </div>

              <div className="rp_modal_contextContainer font_01">
                <p className="rp_modal_contextBox">
                  이곳은 신선한 재료와 다양한 메뉴로 유명하다는 후문을 듣고
                  선택한 곳이었습니다. 첫 번째로 시킨 메뉴는 '아보카도
                  샐러드'였습니다. 아보카도의 부드러움과 신선한 채소의 조합이
                  아주 만족스러웠습니다. 특히, 집에서는 쉽게 느낄 수 없는
                  고급스러운 드레싱의 맛이 인상적이었습니다. 다음으로 주문한
                  '연어 샐러드'는 푸짐한 연어와 새콤한 레몬 드레싱이 완벽하게
                  어울렸습니다. 연어는 신선하고, 적절한 양의 드레싱으로 샐러드가
                  건조하지 않게 잘 어우러져 있었습니다. 배달 서비스 또한 매우
                  만족스러웠습니다. 직원들이 신속하게 배달해주고, 모든 음식이
                  안전하게 포장되어 있어서, 집에서도 신선함을 유지하며 즐길 수
                  있었습니다. 특히, 바쁜 일상에서 식사 준비에 시간을 투자하기
                  어려운 사람들에게는 배달 서비스가 큰 도움이 될 것 같습니다.
                  훌륭한 맛과 서비스, 그리고 편리한 배달 서비스를 통해 다음에도
                  꼭 다시 주문하고 싶습니다.
                </p>
                <p className="rp_modal_replyBox">
                  우선 저희 음식점을 이용해주시고 소중한 리뷰 남겨주셔서
                  감사드립니다. 고객님께서 아보카도 샐러드와 연어 샐러드를
                  맛있게 드셨다는 후기를 읽으니 저희 팀 모두 매우 기쁘게
                  생각하고 있습니다. 저희는 항상 신선한 재료를 사용하고,
                  고객님들께 최고의 맛을 제공하기 위해 끊임없이 노력하고
                  있습니다. 배달 서비스에 대한 칭찬도 감사드립니다. 특히 현재와
                  같은 시기에는, 안전하고 신속한 배달이 중요하다는 것을 알고
                  있기에, 이 부분에 대해 더욱 신경 쓰고 있습니다. 앞으로도
                  건강하고 맛있는 식사를 제공하는 데에 최선을 다하겠습니다.
                  다음에도 맛있는 샐러드와 함께 행복한 시간 보내실 수 있도록
                  노력하겠습니다. 다시 한번 리뷰 남겨주신 덕분에 힘이 나네요.
                  감사합니다!"
                </p>

                {/* 답글 출력 */}
                {replyText.map((reply, index) => (
                  <p className="rp_modal_replyBox" key={index}>
                    {reply}
                  </p>
                ))}

                <div className="rp_modal_replyContainer">
                  <TextField
                    ref={replyInputRef}
                    onKeyDown={handleEnter}
                    fullWidth
                    id="rp_modal_replyInput"
                    label="답글"
                    placeholder="답글을 작성해주세요."
                    value={newText}
                    onChange={(event) => {
                      setNewText(event.target.value);
                    }}
                    multiline
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            color="primary"
                            sx={{ p: "10px" }}
                            onClick={replySend}
                          >
                            <Send />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

// 데이터 테이블 고려 중
//https://mui.com/material-ui/react-table/
