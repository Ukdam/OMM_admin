import { useEffect, useState } from "react";
import { format } from "date-fns";
import "../css/Admin_OrderCard.css";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, MenuItem, Select } from "@mui/material";

export default function Admin_OrderCard({
  _id,
  p_store,
  p_kind,
  p_quantity,
  p_price,
  p_adress,
  p_request,
  p_ingredient,
  p_payment,
  p_state,
  p_userId,
  createdAt,
}) {
  const nowState = ["미 접수", "주문 접수", "배달 중", "배달 완료"];
  const nowStatep = ["미 접수", "주문 접수", "포장 완료", "픽업 완료"];
  const [stateIndex, setStateIndex] = useState(0);
  // const btnState = ["수락", "배달 시작", "배달 완료", ""];
  const [cancelcheck, setCancelCheck] = useState(false);

  const changeNowState = () => {
    if (stateIndex < 3) {
      updateOrderState(_id, p_kind);
      setStateIndex((prevIndex) => prevIndex + 1);
    } else {
      return setStateIndex(3);
    }
  };


  const [isOpen, setIsOpen] = useState(false);

const onOpen = () => {
  setIsOpen(true);
};

const onClose = () => {
  setIsOpen(false);
};

const [isOpen2, setIsOpen2] = useState(false);

const onOpen2 = () => {
  setIsOpen2(true);
};

const onClose2 = () => {
  setIsOpen2(false);
};

  const [n_etavalue, setN_etavalue] = useState("");
  const [n_contextvalue, setN_contextvalue] = useState("");

  async function sendNotify(e) {
    e.preventDefault();

    //notifyETAToSave push
    const notifyETAToSave = [];
    if (p_state == "미 접수" && p_kind == "배달") {
      notifyETAToSave.push(p_kind);
      notifyETAToSave.push(" 예정 시간은 ");
      notifyETAToSave.push(n_etavalue);
      notifyETAToSave.push(" 입니다.");
    }
    if (p_state == "미 접수" && p_kind == "포장") {
      notifyETAToSave.push(p_kind);
      notifyETAToSave.push(" 예정 시간은 ");
      notifyETAToSave.push(n_etavalue);
      notifyETAToSave.push(" 입니다.");
    }
    if (p_state == "주문 접수" && p_kind == "배달") {
      notifyETAToSave.push(" 배달이 시작되었습니다. ");
    }
    if (p_state == "배달 중" && p_kind == "배달") {
      notifyETAToSave.push(" 배달이 도착하였습니다. ");
    }
    if (p_state == "주문 접수" && p_kind == "포장") {
      notifyETAToSave.push(" 포장이 완료되었습니다. ");
    }
    if (p_state == "포장 완료" && p_kind == "포장") {
      notifyETAToSave.push(" 맛있게 드십시오. ");
    }
    const n_eta = notifyETAToSave.join("");
    const n_state = p_state;
    const n_userId = p_userId;
    const n_store = p_store;
    const orderType = p_kind;
    const response = await fetch("http://localhost:4000/admin/ordernotify", {
      method: "POST",
      body: JSON.stringify({
        n_state,
        n_eta,
        n_store,
        n_userId,
        orderType,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      updateOrderState(_id, p_kind);
      onClose();
    } else {
      alert("실패");
    }
  }

  const updateOrderState = async (orderId, orderType) => {
    try {
      await fetch('http://localhost:4000/admin/orderlist/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, orderType }),
      });
    } catch (error) {
      console.error(error);
    }
  };
  // 취소
  const cancelOrderState = async (orderId) => {
    try {
      await fetch('http://localhost:4000/admin/orderlist/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId}),
      });
    } catch (error) {
      console.error(error);
    }
  };

  // 취소 알림
  async function sendNotifyCancel(e) {
    e.preventDefault();

    //notifyETAToSave push
    const notifyETAToSave = [];
    if (n_etavalue) {
      notifyETAToSave.push(n_etavalue);
      notifyETAToSave.push(" (으)로 인하여 주문이 취소되었습니다. ");
    }
    const n_eta = notifyETAToSave.join("");
    const n_state = "주문 취소";
    const n_userId = p_userId;
    const n_store = p_store;
    const response = await fetch("http://localhost:4000/admin/ordernotify", {
      method: "POST",
      body: JSON.stringify({
        n_state,
        n_eta,
        n_store,
        n_userId,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      cancelOrderState(_id);
      onClose2();
    } else {
      alert("실패");
    }
  }

  // 삭제
  const [deletedDoc, setDeletedDoc] = useState(null);
  const DeletePayDeliveryDoc = async () => {
    try {
      console.log("_id12123123 ====>" + _id);
      const response = await fetch(
        "http://localhost:4000/admin/deletePayDeliveryDocument",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            documentId: _id,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setDeletedDoc(data);
      } else {
        console.log("_id ====>" + _id);
        console.error("문서 삭제 실패:", response.statusText);
      }
    } catch (error) {
      console.log("_id ====>" + _id);
      console.error("문서 삭제 오류:", error);
    }
  };

  const [__btnState, setBtnState] = useState("");

useEffect(() => {
  switch(p_state){
    case "미 접수" : 
      setBtnState("수락");
      break;
    case "주문 접수" : 
      setBtnState("배달 시작");
      break;
    case "배달 중" : 
      setBtnState("배달 완료");
      break;
  }
}, [p_state]);

const [__btnStatePack, setBtnStatePack] = useState("");

useEffect(() => {
  switch(p_state){
    case "미 접수" : 
      setBtnStatePack("수락");
      break;
    case "주문 접수" : 
      setBtnStatePack("포장 완료");
      break;
    case "포장 완료" : 
      setBtnStatePack("픽업 완료");
      break;
  }
}, [p_state]);


  return (
    <>
      {p_kind === "배달" ? (
        <article className="orderc_container">
          <div className="order_state_container">
            <p className="order_state">{p_state}</p>
          </div>
          <div className="order_context_container">
            <p className="__order_deliorpick">{p_kind}</p>
            <p className="__order_adress">{p_adress}</p>
            <div className="__order_context">{p_ingredient}</div>
            <div className="__order_remain">
              <p>
                <time>{format(new Date(createdAt), "yyyy MM d,  hh:mm")}</time>
              </p>
              <p>{p_quantity} 개</p>
              <p>{p_price} 원</p>
            </div>
            <p className="__order_request">{p_request}</p>
          </div>
          {p_state =="주문 취소" ? (
            // 주문 취소 상태면 수락 버튼 없게
            <div className="order_btn_container">
              <button
                className="__order_nobtn font_01"
                onClick={DeletePayDeliveryDoc}
                type="button"
              >
                삭제
              </button>
            </div>
          ) : (
            <div className="order_btn_container">
              {p_state == "배달 완료" ? 
              <button className="__order_nobtn font_01" onClick={onOpen2}>
                취소
              </button> 
              :
              <>
                <button className="__order_okbtn font_01" onClick={ p_state == "미 접수" ? onOpen : sendNotify}>
                  {__btnState}
                </button>
                <button className="__order_nobtn font_01" onClick={onOpen2}>
                  취소
                </button>
              </>
              }
            </div>
          )}
        </article>
      ) : 

      // 포장일 때 OrderCard
      (
        <article className="orderc_container">
          <div className="order_state_container">
            <p className="order_state">{p_state}</p>
          </div>
          <div className="order_context_container">
            <p className="__order_deliorpick">{p_kind}</p>
            <p className="__order_adress">{p_adress}</p>
            <div className="__order_context">{p_ingredient}</div>
            <div className="__order_remain">
              <p>
                <time>{format(new Date(createdAt), "yyyy MM d,  hh:mm")}</time>
              </p>
              <p>{p_quantity} 개</p>
              <p>{p_price} 원</p>
            </div>
            <p className="__order_request">{p_request}</p>
          </div>
          {p_state =="주문 취소" ? (
            // 주문 취소 상태면 수락 버튼 없게
            <div className="order_btn_container">
              <button
                className="__order_nobtn font_01"
                onClick={DeletePayDeliveryDoc}
                type="button"
              >
                삭제
              </button>
            </div>
          ) : (
            <div className="order_btn_container">
              {p_state == "픽업 완료" ? 
              <button className="__order_nobtn font_01" onClick={onOpen2}>
                취소
              </button> 
              :
              <>
                <button className="__order_okbtn font_01" onClick={ p_state == "미 접수" ? onOpen : sendNotify}>
                  {__btnStatePack}
                </button>
                <button className="__order_nobtn font_01" onClick={onOpen2}>
                  취소
                </button>
              </>
              }
            </div>
          )}
        </article>
      )}

      {/* 
        모달 
      */}

{/* 수락 */}
<Dialog
  open={isOpen}
  onClose={onClose}
  maxWidth="sm"
  fullWidth={true}
>
  <DialogTitle>
    <p className="font_01">주문 접수</p>
  </DialogTitle>
  <DialogContent>
    <form onSubmit={sendNotify}>
      <div className="notifym_container">
        <div className="notifym_eta_container">
          <p className="font_01" style={{marginBottom:20}}>{p_kind} 예정 시간</p>
          <FormControl fullWidth>
            <Select
              value={n_etavalue}
              onChange={(e) => setN_etavalue(e.target.value)}
            >
              <MenuItem value="10 분">10 분</MenuItem>
              <MenuItem value="20 분">20 분</MenuItem>
              <MenuItem value="30 분">30 분</MenuItem>
              <MenuItem value="40 분">40 분</MenuItem>
              <MenuItem value="50 분">50 분</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <DialogActions>
        <Button onClick={sendNotify} color="primary" type="submit">
          확인
        </Button>
        <Button onClick={onClose} color="primary" type="button">
          취소
        </Button>
      </DialogActions>
    </form>
  </DialogContent>
</Dialog>

{/* 취소 */}
<Dialog
  open={isOpen2}
  onClose={onClose2}
  maxWidth="sm"
  fullWidth={true}
>
  <DialogTitle>
  <p className="font_01">주문 취소</p>
  </DialogTitle>
  <DialogContent>
    <form onSubmit={sendNotifyCancel}>
      <div className="notifym_container">
        <div className="notifym_eta_container">
          <p className="font_01" style={{marginBottom:20}}>취소 사유</p>
          <FormControl fullWidth>
            <Select
              value={n_etavalue}
              onChange={(e) => setN_etavalue(e.target.value)}
            >
              <MenuItem value="재료 소진">재료 소진</MenuItem>
              <MenuItem value="주문 밀림">주문 밀림</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <DialogActions>
        <Button type="submit" color="primary">
          확인
        </Button>
        <Button onClick={onClose2} color="primary" type="button">
          취소
        </Button>
      </DialogActions>
    </form>
  </DialogContent>
</Dialog>
    </>
  );
}

/* <Button onClick={changeNowState}>{btnState[stateIndex]}</Button> */
