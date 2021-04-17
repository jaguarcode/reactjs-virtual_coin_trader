# React.js로 만든 가상 코인 거래소 Example

### 환경

- Node version 10.12.0
- json-server
  - script: yarn mockserver
  - http://localhost:4000/transactions
- axios
  - axios.get(url[, config])
  - axios.post(utl[, data[, config]])
  - axios.put(url[, data[, config]])
  - axios.delete(url[, config])

### 만든 방식

- 에어비엔비 실무 방식

![Alt text](/public/img/demo.png)

- 가상 코인 거래소 만들기
  - 가상 코인 거래소 공용 컴포넌트 제작
  - 프로젝트 구성 설정
- 원격 데이터 연결하기
  - 가상 데이터 서버 설정
  - 데이터 요청을 위한 axios 라이브러리 도입
  - 리덕스 적용
  - 검색 기능 추가
  - 거래 기능 추가
- 리덕스 고급 기능 활용
  - 미들웨어 적용
  - redux-thunk와 비동기 제어
  - 서버 지연 처리와 오류 표시 기능
  - 미들웨어로 알림 메시지 띄우는 기능
  - 거래 알림 효과 추가
- 에어비앤비 개발 방식으로 비동기 제어
  - redux-pack 미들웨어로 비동기 제어
  - 대용량 데이터 처리 (페이지네이션) 추가
  - 셀렉터로 스토어 데이터 변환
  - axios 호출 작업 모듈화
  - 회원 가입 기능 추가
- 리액트 라우터
  - 싱글 페이지 애플리케이션
  - 리액트 라우터 구성하기
  - 주소와 리덕스 연결하기
- 코드 스프릿팅 기법으로 bundle.js크기 줄이기
- 파이어베이스에 가상 코인 거래소 배포
- 서버 사이드 랜더링 도입
- next.js 서버 배포
- 파이어베이스 DB 연결
