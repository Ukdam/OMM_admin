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