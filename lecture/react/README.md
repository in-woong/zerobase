# REACT

- [공식사이트]()

## REACT 와 Javascript의 차이점

### DOM의 조작

- javascript는 DOM요소를 직접 조작하지만, react는 DOM노드를 직접 조작하지 않아도 UI가 변경된다.

- UI로직과 비즈니스 로직(데이터-상태값을)을 분리할 수 있다.

- DOM을 처음부터 다시 그리지 않고 변경된 부분만 업데이트 하기 때문에 성능이 좋다.

- [react DOM 조작 예제](https://codesandbox.io/s/nervous-rain-gt7yn?file=/src/App.js)

- [javascript DOM 조작 예제]()

## Framework vs library

- Framework : 웹 어플리케이션을 만들기 위한 뼈대, 여러가지 기능을 제공한다.

### web application 공통기능

- 라우팅, 전역상태관리, API호출, 빌드시스템

- library : 사용자가 이미 만들어져 있는 것들 중 선택해서 시스템을 구축한다.

## 웹사이트에 React 추가

- [공식사이트](http://ko.reactjs.org/docs/add-react-to-a-website.html)

- [깃헙 링크](http://github.com/zerobase-school/2022-frontend-school-react/tree/master/2/2-1)

- [작성예시]()

1. HTML파일에 DOM 컨테이너 설치
2. sciprt 태그 추가하기
3. 컨테이너 박스 추가하기

### React.createElement()함수

- react Element를 반환

```javascript
const element = React.createElement(componenet, props, ...children);
```

#### Component

- 문자열일 때는 HTML태그를 의미 ("div")

#### Props

- componenet가 가질수 있는 옵션

#### Children

- component가 감싸고 있는 내부 컴포넌트
- 텍스트, 리액트 컴포넌트


### ReactDOM.render()함수

- [공식문서](https://ko.reactjs.org/docs/rendering-elements.html)