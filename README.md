# 배달 어드민 페이지 OMM

![logo_transparent](https://github.com/Ukdam/OMM_App/assets/92793487/f725e514-b229-425b-bc0b-418f1d9dc435)

## 페이지 실행 방법
-> npm start

## api 서버 실행 방법
: api 서버 코드를 다운후 터미널에 실행<br>
-> nodemon index.js

2. api 서버 : https://github.com/1Taron/OMM_api

3. 배달 앱 OMM : https://github.com/Ukdam/OMM_App

<br>

## 팀원 구성

<div align="center">

| **이보성** | **장우람** | **박지강** |
| :------: |  :------: |  :------: |
| [<img src="https://github.com/Ukdam/OMM_App/assets/92793487/717b987a-1cb3-4d9e-a2c1-dced07726f6f" height=150 width=150> <br/> @1Taron](https://github.com/1Taron) | [<img src="https://github.com/Ukdam/OMM_App/assets/92793487/311372aa-2adb-49fb-a35c-de7baac3ab55" height=150 width=150> <br/> @Ukdam](https://github.com/Ukdam) | [<img src="https://github.com/Ukdam/OMM_admin/assets/92793487/7da33578-895d-4cdc-bc76-9e2ad683f5b5" height=150 width=150> <br/> @1Taron](https://github.com/qkrwlrkd) |

</div>

<br>

## 1. 개발 환경
- 통합 개발 환경 : Visual Studio
- Hybrid APP: React Native, Expo, Websocket
- Front : HTML, React, Websocket
- Back-end : Express, Socket.io, Multer, Mongodb
- 버전 및 이슈관리 : Github, Github Issues
- 협업 툴 : Discord, KakaoTalk
- 디자인 : [Figma](https://www.figma.com/file/Lfp8VJ9vH2E31yZNRmz5y7/OMM?type=design&node-id=0-1&mode=design&t=682JxLZuCXy9MXht-0)
- [Fontawesome](https://fontawesome.com/)

<br>

## 2. 채택한 개발 기술

### React, Websocket

- React Native
  - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
  - 사이드 바 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스를 절약이 가능했습니다.
- Socket
  - 데이터의 실시간 양방향 통신을 유지하기 위해 Socket을 사용하였습니다.

### Multer
- Multer
  - Multer는 Node.js의 파일 업로드를 처리하기 위한 미드웨어 입니다.
  - DB에 사진의 데이터를 직접 저장하는 것 보다 API서버에 저장을 하여 URL화 하여 관리 및 저장하여 DB의 리소스를 절약 하였습니다.

<br>

## 3. 역할 분담

### 🍊이보성

- **UI**
  - 페이지 :  로그인,  상품 (관리 , 추가, 상세)
- **기능**
  - 사진 업로드, 상품 (추가, 수정, 삭제, 관리)

<br>

### 🐬장우람 

- **UI**
  - 페이지 : 대시보드,  후기,  주문
  - 공통 컴포넌트 : 사이드바, 검색 창
- **기능**
  - 웹 소켓,  후기,  대시보드, React DOM

<br>

### 👻박지강 

- **UI**
  - 페이지 : 회원
- **기능**
  - 검색 필터링

<br>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2023-08-28 ~ 2023-12-08
- UI 구현 : 2023-08-28 ~ 2023-11-08
- 기능 구현 : 2023-11-09 ~ 2023-12-08

<br>

### 작업 관리
- Github Project를 사용하여 진행 상황을 공유했습니다.
- Discord로 주간회의를 진행하며 작업 순서와 방향성에 대한 고민을 나누고 KakaoTalk에 회의 내용을 기록했습니다.

<br>

## 5. 페이지별 기능

### [초기화면]

- 서비스 접속 초기화면
    - 로그인이 되어 있지 않는 경우 : 로그인 페이지로 이동합니다.
    - 로그인이 되어 있는 경우 : 대시보드 페이지로 이동합니다.

| 초기화면 |
|----------|
|![어드민 로그인](https://github.com/Ukdam/OMM_admin/assets/92793487/5e68c068-2e2e-4b8d-b1e8-9dd46848119c)|

<br>

### [대쉬보드]

- 주문 현황
- 제품 현황
- (주문,  문의)후기 현황
- 인기 상품
- 매출액 차트

| 대쉬보드 |
|----------|
|![어드민 대쉬보드](https://github.com/Ukdam/OMM_admin/assets/92793487/d69e97ce-e4f0-4433-ba32-f6e227a11965)|

<br>

### [주문 관리]

- 사이드 바의 주문 클릭 시 주문 관리 페이지로 이동합니다.
- 상단 메뉴 클릭 시 해당된 주문 페이지로 이동합니다.
- 수락 버튼 클릭 시 배달 예정 시간 모달 창이 띄워지며 선택 후 확인 시 주문 접수 페이지로 주문이 이동합니다.
- 취소 버튼을 누르면 주문이 주문 취소 페이지로 이동합니다.

| 주문관리 |
|----------|
|![어드민 주문](https://github.com/Ukdam/OMM_admin/assets/92793487/d4bde510-5510-45fe-a722-27aea718b072)|

<br>

### [상품 관리]

- 사이드 바의 상품 클릭 시 상품 관리 페이지로 이동합니다.
- 상품의 개수가 10개 이상이 되면 페이지가 자동으로 만들어져 만들어진 페이지에 출력이 됩니다.

| 상품관리 |
|----------|
|![상품 관리](https://github.com/Ukdam/OMM_admin/assets/92793487/28351da7-6017-4162-b620-96f7f2924f79)|

<br>

### [상품 관리]

- 상품 추가
- 새 상품 등록 버튼 클릭 시 상품 추가 화면으로 이동 합니다.
- 이미지지 추가 버튼 클릭 시 재료에 추가될 사진을 선택하여 업로드 할 수 있습니다.
- 저장 버튼 클릭 시 추가된 정보가 저장이 되며 상품 관리 리스트에 출력이 됩니다.

| 상품추가 |
|----------|
|![어드민 상품 등록](https://github.com/Ukdam/OMM_admin/assets/92793487/8e6783d5-241a-4bfe-8f40-58d7c8243bd3)|

<br>

### [상품 관리]

- 상품 수정
- 수정 버튼 클릭 시, 기존 상품 정보 화면으로 이동 합니다.
- 저장 버튼을 누를 시 바뀐 정보가 저장이 되며 화면에 출력이 됩니다.

| 상품수정 |
|----------|
|![어드민 상품 수정](https://github.com/Ukdam/OMM_admin/assets/92793487/12b53a83-0012-416f-b11a-9657a2b1525d)|

<br>

### [상품 관리]

- 상품 삭제
- 삭제 버튼 클릭 시, 상품 관리 목록에서 상품 삭제 되며 관리 페이지도 이동합니다.

| 상품삭제 |
|----------|
|![어드민 상품 삭제](https://github.com/Ukdam/OMM_admin/assets/92793487/e45f7997-108b-4bfd-921f-e36550db5541)|

<br>

### [회원 관리]

- 사용자가 앱에서 입력한 정보가 출력됩니다.
- 회원 필터링 기능을 통해 특정 사용자의 정보를 출력할 수 있습니다.
- 상세 버튼을 클릭하여 회원상세정보 페이지로 이동합니다.

| 회원관리 |
|----------|
|![회원 관리](https://github.com/Ukdam/OMM_admin/assets/92793487/f9fa27c9-99eb-4efa-bba2-b6850f8e9b35)|

<br>

### [후기 관리]

- 앱에서 사용자가 리뷰를 작성하면 즉시 반영되기 위해 Websocket을 사용하였습니다.
- 제목을 클릭하여 리뷰 상세로 이동합니다.
- 후기 상세 페이지는 사용자가 업로드한 사진, 별점, 추천재료, 내용이 포함되어 출력됩니다.
- 관리자는 사용자가 업로드한 내용에 대한 답글을 달 수 있습니다.

| 후기관리 |
|----------|
|![관리자 리뷰 관리](https://github.com/Ukdam/OMM_admin/assets/92793487/25fd365e-2cdb-4a87-9db8-81572c9bf866)|

<br>

