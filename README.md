# Task Management System

다음 사이트는 학교 시간표 및 학교 수업 과제를 한눈에 보게 함으로써 어떤 과제가 있었는지 고민하게 되는 일을 없애주기 위해 시작되었습니다.

## 프론트

- 개발언어: typescript
- 프레임워크: nextjs
- 상태관리: redux, redux-saga
- UI: styled-components
- 라이브러리: 미정

## 백엔드

- 개발언어: javascript
- 프레임워크: express
- 데이터베이스: mySQL
- 크롤링: selenium
- 라이브러리: 미정
- api: 클래스룸?

## 동작 방식

한사람에 관리자가 불러오기 버튼을 클릭하면 selenium으로 클래스룸에 있는 과제들을 만료기간을 바탕으로 크롤링해와 db에 저장합니다.
이를 프론트에서 받아와서 띄워주는 방식입니다.
