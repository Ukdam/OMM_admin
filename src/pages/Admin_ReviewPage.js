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
import { useContext, useEffect, useState } from "react";
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
import { SocketContext } from "../contexts/SocketContext";
import { ReviewCountContext } from "../contexts/ReviewCountContext";

export default function Admin_ReviewPage() {
  const socket = useContext(SocketContext);
  const { reviewCount, updateReviewCounts } = useContext(ReviewCountContext);

  const [open, setOpen] = useState(false);
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);
  const [filteredData, setFilteredData] = useState([]);
  const imgcontainerRef = useRef();
  const [data, setData] = useState([]);

  const fetchReviewData = () => {
    fetch("http://localhost:4000/admin/Reviewdata")
      .then((response) => response.json())
      .then((data) => setData(data));
    updateReviewCounts();
  };

  useEffect(() => {
    fetchReviewData();
    updateReviewCounts();

    if (socket) {
      socket.on('reviewDataChanged', fetchReviewData);

    return () => {
      socket.off('reviewDataChanged', fetchReviewData);
    };
  }
  }, [socket]);

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
        item.r_rating.toString().toLowerCase().includes(searchText.toLowerCase()) ||
        item.r_username.toLowerCase().includes(searchText.toLowerCase()) ||
        item.createdAt.includes(searchText)
      );
      setFilteredData(filteredResults);
    }
  }, [searchText, data]);

  // 선택된 후기의 정보를 저장할 상태
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (item) => {
    setSelectedItem(item); // 선택된 아이템의 정보를 저장
    setOpen(true); // 모달을 열기
  };

  function formatDateModal(isoDateString) {
    if (!isoDateString) return "";
  
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    return `${year}/${month}/${day}`;
  }

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
            <div>
            <ul>
                {filteredData.map((item, index) => {
                  if (!item) return null;

                  const date = new Date(item.createdAt);
                  const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

                  return (
                    <li key={item._id} onClick={() => handleItemClick(item)}>
                      <div className="rp_table_list">
                        <div>{index + 1}</div>
                        <div>
                          <p onClick={modalOpen} style={{cursor: "pointer",}}>
                            {item.r_review}
                          </p>
                        </div>
                        <div><Rating value={item.r_rating} precision={0.5} readOnly /></div>
                        <div>{item.r_username}</div>
                        <div>{formattedDate}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
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
              <p>후기 - {selectedItem?._id}</p>
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
                <div className="rp_modal_imagebox">
                  {selectedItem?.ImageUrl == "images/" ? <></> : <>
                  <img src={`http://localhost:4000/images/${selectedItem?.ImageUrl}`} alt={selectedItem?._id} style={{width:300, height:200, objectFit:"cover", marginRight:50}}/>
                  </>}
                </div>
              </div>

              <div className="rp_modal_basicInfoContainer font_01">
                <div>작성자 : {selectedItem?.r_username}</div>
                <div>
                  <Rating value={selectedItem?.r_rating} precision={0.5} readOnly size="large" />
                </div>
                <div>작성일자 : {formatDateModal(selectedItem?.createdAt)}</div>
              </div>

              <div className="rp_modal_ingredientContainer font_01">
                {/* r_ingredient로 재료들의 이름을 가져오고 r_good이랑 비교해서 똑같은것이 있으면 따봉 */}
                {selectedItem?.r_ingredient.split(',').filter(ingredient => ingredient.trim() !== "").map((ingredient, index) => {
                  let icon;
                  ingredient = ingredient.trim(); // 앞뒤 공백 제거

                  const ingredientName = ingredient.split(' ')[0]; 
                  if (selectedItem?.r_good.split(',').some(good => good.trim().startsWith(ingredientName))) {
                    icon = (
                      <ThumbUp
                        sx={{ fontSize: 14 }}
                        color="primary"
                        style={{ marginLeft: 10 }}
                      />
                    );
                  }

                  return (
                    <ListItem key={index}>
                      <Chip
                        icon={icon}
                        label={ingredient}
                        variant="outlined"
                        style={{ backgroundColor: "white" }}
                      />
                    </ListItem>
                  );
                })}
              </div>

              <div className="rp_modal_contextContainer font_01">
                <p className="rp_modal_contextBox">
                  {selectedItem?.r_review}
                </p>
                <p className="rp_modal_replyBox">
                  {selectedItem?.r_reply}
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
                    onKeyDown={async (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        replySend();
                        try {
                          await fetch(`http://localhost:4000/admin/review/${selectedItem?._id}`, {
                            method: 'PATCH',
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ reply: newText }),
                          });
                          setNewText("");
                          console.log("r_reply : " + newText);
                        } catch (error) {
                          console.error(error);
                        }
                      }
                    }}
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
                            onClick={ async () => {
                              replySend();
                              try {
                                // 서버에 API 요청을 보냅니다.
                                await fetch(`http://localhost:4000/admin/review/${selectedItem?._id}`, {
                                  method: 'PATCH',
                                  headers: {
                                    'Content-Type': 'application/json'
                                  },
                                  body: JSON.stringify({ reply: newText }),
                                });
                                // 상태를 초기화합니다.
                                setNewText("");
                                console.log("r_reply : " + newText);
                              } catch (error) {
                                console.error(error);
                              }
                            }}
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
