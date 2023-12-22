# 슈퍼코딩 2주차 프로젝트

## 서비스 소개
현대 사회에 들어 점점 많은 사람이 반려동물과 함께 살아가고 있고, 

시장 조사 결과 많은 쇼핑몰들이 한 종류의 카테고리만 다루다 보니, 강아지 용품 따로 소형동물 용품 따로 구매하는 사용자들의 니즈를 충족시키고자 기획한 여러 종류의 반려동물용품을 한 곳에서 구매할 수 있는 **B2C 반려동물용품 쇼핑몰**

![2w-1](https://github.com/Sim0321/second-project/assets/105590167/8a097974-6547-4754-829b-1d9d00681735)
![2w-2](https://github.com/Sim0321/second-project/assets/105590167/0d1a9188-5dd6-4a0e-adee-70e6c9de23eb)
![2w-3](https://github.com/Sim0321/second-project/assets/105590167/b9682698-f48f-4667-a9a3-9686bc7187c0)
![2w-4](https://github.com/Sim0321/second-project/assets/105590167/cdf60bdd-e44c-436b-a0e1-006f91adefd8)


## 시연 영상

[시연 영상]([https://itproject.shop/](https://www.youtube.com/watch?v=NIRo1T6PqRk))

## 기술 챌린징
1. Github Aciton을 이용한 CI/CD
- `https의 보안`과 CloudFront의 엣지 로케이션을 이용한 `성능 향상`을 위해 `CloudFront로 배포` 진행
- 지속적 통합/배포를 위해 `CI/CD 구축`
- AWS CLI를 사용해 `S3에 정적 파일을 업로드`하고 `CloudFront 배포를 무효화`하여 변경된 파일을 갱신하도록 함


### 컨벤션

#### 폴더, 파일 컨벤션
- 도메인(기능) 별로 폴더 생성
- 폴더는 무조건 소문자로 작성
- 컴포넌트는 무조건 PascalCase
- style-components의 파일 명은 {도메인}.style.js
  - as S로 import

#### 코드, 변수 컨벤션

- 주석은 /\*\* \*/ 사용(마우스 커서만 대도 알 수 있게)
- .env, api, key는 무조건 대문자로만
- 함수명은 camelCase.
- 컴포넌트, 생성자 함수, Class는 PascalCase

#### 커밋 컨벤션

- 상세하게 기능별로 커밋(코드리뷰를 위해)
- pull request시에는 팀원들과 이야기
- 기능 추가 feat #이슈번호 :
- 스타일 style #이슈번호 :
- 수정 fix #이슈번호 :
- 삭제 delete #이슈번호 :
- 문서관련 docs #이슈번호 :
- 테스트 test #이슈번호 :

#### 네이밍 컨벤션

- 1개의 요소를 감싸는 컴포넌트는 `Wrapper`로 끝나게 짓기
- 여러개 요소를 감싸는 컴포넌튼 `Container`로 끝나게 짓기
- 최상위 레이아웃 설정 컴포넌트는 `Layout`으로 끝나게 짓기
- `div` 태그 컴포넌트 이름은 자유롭게 하나 `Box`로 짓기
- `ul` 태그 컴포넌트는 `List`로 끝나게끔 짓기
- `li` 태그 컴포넌트는 `Item`으로 끝나게끔 짓기
- 반복되는 컴포넌트는 `Item`으로 끝나게끔 짓기
- 모든 컴포넌트의 이름에는 기능을 암시하는 단어를 집어넣기
- styled-components

#### git branch 전략

- Github Flow



