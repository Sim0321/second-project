# 슈퍼코딩 2주차 프로젝트

## 서비스 소개

현대 사회에 들어 점점 많은 사람이 반려동물과 함께 살아가고 있고,
시장 조사 결과 많은 쇼핑몰들이 한 종류의 카테고리만 다루다 보니, 강아지 용품 따로 소형동물 용품 따로 구매하는 사용자들의 니즈를 충족시키고자 기획한 여러 종류의 반려동물용품을 한 곳에서 구매할 수 있는 **B2C 반려동물용품 쇼핑몰**

![2w-1](https://github.com/Sim0321/second-project/assets/105590167/8a097974-6547-4754-829b-1d9d00681735)
![2w-2](https://github.com/Sim0321/second-project/assets/105590167/0d1a9188-5dd6-4a0e-adee-70e6c9de23eb)
![2w-3](https://github.com/Sim0321/second-project/assets/105590167/b9682698-f48f-4667-a9a3-9686bc7187c0)
![2w-4](https://github.com/Sim0321/second-project/assets/105590167/cdf60bdd-e44c-436b-a0e1-006f91adefd8)

## 시연 영상

[시연 영상](https://www.youtube.com/watch?v=NIRo1T6PqRk)

## 주요 기능 및 문제해결

- 메인페이지

  - 내비게이션 바에는 동물 카테고리와 제품 카테고리가 있으며, 사용자가 카테고리를 누를 때마다 해당 카테고리는 `store`로 관리됩니다. 주요 제품, 오늘의 추천 제품 및 주목받는 제품은 각 카테고리에 따라 다르게 표시되고 렌더링되며, 이는 사용자가 원하는 정보만을 수신하도록 하기 위해 UX 개선을 고려한 UI입니다.

  - 코드의 가독성을 향상하고 유지보수를 쉽게 하기 위해 `switch` 문으로 교체되었으며, JSX 부분의 가독성과 재사용성을 높이기 위해 함수형 프로그래밍으로 작성되었습니다. [소스코드](https://github.com/Sim0321/second-project/blob/main/src/components/main/swiper/BannerSection.tsx)

- 검색결과 페이지
  - 동적 라우팅으로 유동 라우팅 구현 및 UI 분기 처리
- 검색 모달
  - 검색 모달 진입시 바로 input 창에 focus
  - 한 글자 이상 입력이 되어 있을 시 연관 검색어 list 렌더링
- Github Action을 이용한 CI/CD [소스코드](https://github.com/Sim0321/second-project/blob/main/.github/workflows/main.yml)
  - `https의 보안`과 CloudFront의 엣지 로케이션을 이용한 `성능 향상`을 위해 `CloudFront로 배포` 진행
  - 지속적 통합/배포를 위해 `CI/CD 구축`
  - AWS CLI를 사용해 `S3에 정적 파일을 업로드`하고 `CloudFront 배포를 무효화`하여 변경된 파일을 갱신하도록 함

## 기술적 의사 결정

1. **TypeScript**
   1. TS로 프로젝트 세팅을 해보기 위해
   2. 코드의 가독성이 낮아지는 **옵셔널체이닝을 지양**하므로 확실한 분기 처리를 위해
   3. 에러를 런타임 이전에 잡아 개발 **생산성 향상**을 위해
2. **Github Actions**
   1. 테스트를 위한 불필요한 **반복적 작업을 줄이기** 위함과 동시에 **개발 속도 향상**을 위해 사용
   2. Github Actions는 github에서 제공하고, 쉽게 **CI/CD를 구축**할 수 있는 장점이 있으며 **YAML**이란 포맷을 사용해 가독성이 높고, 참고 자료가 많아 사용.
3. **Styled Components**
   1. 프로젝트가 크지 않은 소규모 프로젝트라고 판단해 **빠르게 테스트** 하기 위해
   2. Props로 **동적으로 스타일링** 하고, **class name**이 **중복되지 않게** 하기 위해
4. **Redux Toolkit**
   1. Redux는 action, action 생성자, 초기 상태, reducer들을 따로 생성해야 하지만 **Redux-Toolkit**은 reducer 및 action을 createSlice 함수를 이용해 보다 **코드의 가독성을 높이고** **반복적인 코드를 줄이고** **액션 정의 부분의 오타를 줄이고**자 사용
   2. immer라이브러리가 내장되어 있어 Redux보다 **불변성 관리가 용이**
