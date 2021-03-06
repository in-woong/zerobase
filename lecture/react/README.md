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

## CRA

- [공식문서](http://ko.reactjs.org/docs/getting-strated.html)

## CRA 없이 React 구성하기

### Babel

- compiler

- 예시 목표 : Babel이 JSX-> Javascript로 트랜스파일링 해주는 것을 직접 확인해 보자.
- babel config 확인

```javascript
    "@babel/cli": "^7.17.10",
    "@babel/core": "^7.18.2",
    "@babel/preset-env": "^7.18.2",
    "@babel/preset-react": "^7.17.12"
```

- [공식문서](https://babeljs.io/docs/en/index.html)

### Webpack

- bundler
- 분리된 Javascript와 CSS 모듈 코드를 브라우저에 최적화된 여러개의 파일로 결함합니다. React 어플리케이션에서 널리 사용되는 번들러에는 Webpack과 Browserify가 있다.

- [공식문서](https://webpack.js.org/)

- Hot Module Replacement (새로고침 필요 없음)
- [공식문서](https://webpack.kr/guides/hot-module-replacement)

## JSX소개

- [공식문서](https://ko.reactjs.org/docs/introducing-jsx.html)
- JSX는 camelCase 프로퍼티 명령 규칙을 사용
- class => className, for=>htmlfor

## 조건부 렌더링

- if-else 구문을 삼항연산자로 표현하여 사용!
- if 구문은 논리 연산자로 사용!(&&) 하지만 false&& expression일 때 false는 반환이 된다는 것 주의!

## Component와 Props

- [공식문서](https://ko.reactjs.org/docs/components-and-props.html)

- 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 합니다.

### props.children

```javascript
<Welcome title={"Hello world!"}> -props.title
 <welcome>"Hellow world!"</welcome> - props.children
```

1. 사용자 정의 컴포넌트가 일반적인 html구조의 구조와 비슷할 때 (예측할 수 있을 때)
2. 컴포넌트에 다른 컴포넌트를 전달해야 할 때

## State

- re-Rendering을 발생시키기 위해 useState의 Hook을 사용한다.
- 프로그래밍에서 불변성을 지킨다 = 직접 값을 변경하지 않는다.(불변성, immutable)

- 리액트는 이전 state와 이후 state를 비교할 때 얕은 비교를 하기 때문

| 원시타입                                                       |  vs |                              참조타입                              |
| :------------------------------------------------------------- | --: | :----------------------------------------------------------------: |
| boolean, number,string                                         |     |                               Object                               |
| 불변성을 가지고 있다.                                          |     |                     불변성을 가지고 있지 않다.                     |
| 변수에 원시 타입의 값을 할당하면, 메모리에 값 자체가 저장된다. |     | 변수에 참조타입의 값을 할당하면, 메모리 값이 담긴 주소가 저장된다. |

## Props state

| props                                         |                                                vs                                                |                         state |
| :-------------------------------------------- | :----------------------------------------------------------------------------------------------: | ----------------------------: |
| 부모 컴포넌트가 자식 컴포넌트에게 전달하는 값 |                                                                                                  | 자신이 스스로 관리하는 상태값 |
| 값을 자신이 변경할 수 없음                    |                                                                                                  |    값을 자신이 변경할 수 있음 |
| -                                             | Props를 통해 값을 내려 받거나, 자신이 관리하고 있는 state가 변경되면 컴포넌트 렌더링이 발생한다. |                             - |

### state 심화

- [공식문서](https://ko.reactjs.org/docs/state-and-lifecycle.html)
- [예시](https://github.com/zerobase-school/2022-frontend-school-react/tree/master/4/4-2/4-2-1)

- state는 비동기 적으로 실행되기 때문에, 그 문제를 피하기 위해서는 ()=> { }함수형태로 이전 값과, 계산된 값을 넘겨 주어야 한다.
  ex) number=>number+1

- **데이터는 아래로만 흐른다** 일반적으로 이를 “하향식(top-down)” 또는 “단방향식” 데이터 흐름이라고 합니다. 모든 state는 항상 특정한 컴포넌트가 소유하고 있으며 그 state로부터 파생된 UI 또는 데이터는 오직 트리구조에서 자신의 “아래”에 있는 컴포넌트에만 영향을 미칩니다.

- 단일 진실 공급원 (Single source of truth), state 끌어 올리기
- [예시](https://github.com/zerobase-school/2022-frontend-school-react/tree/master/4/4-2/4-2-4)

## Life-cycle

|                           함수 컴포넌트                           | vs  |               클래스 컴포넌트                |
| :---------------------------------------------------------------: | :-: | :------------------------------------------: |
|                        비교적 최근에 나옴                         |     |              리액트 초기에 나옴              |
| hook()함수로 컴포넌트의 mount, unmount 되는 시점에 제어할 수 있음 |     | 생명주기에 따른 메서드에 따라 제어할 수 있음 |

## Hook

- [공식문서](https://ko.reactjs.org/docs/hooks-intro.html)

- useEffect()
- componenetDidMount / componenetDidMount + componenetDidUpdate
- componenetWillUnMount => return 으로 함수를 주면, unMount될 때 실행 된다.

- [공식문서](https://ko.reactjs.org/docs/hooks-effect.html)

## 중간미션s

1. 데이터 초기화
   > 명함 리스트는 데이터 베이스에 저장되어 있습니다. 우리는 아직 API를 호출하는 방법을 배우지 않았기 때문에, API를 호출할 필요는 없습니다. 다만 API를 호출한다고 가정하고, 전달 드리는 명함 리스트를 알맞은 위치에서 초기화 해주세요. 데이터는 아래 링크에 있습니다.

[링크](https://github.com/zerobase-school/2022-frontend-school-react/tree/master/5)

2. 추첨하기 버튼과 명함 컴포넌트 구현
   > 추첨하기 버튼을 누르면, 1에서 초기화 한 명함 리스트 중 하나의 명함을 고릅니다. 추첨된 명함 정보를 명함 컴포넌트에 전달하는 방식으로 구현 합니다.

- 상세조건
  > 추첨하기 버튼을 눌렀을 때, 동일한 사람이 또 다시 추첨되면 안되기 때문에 당첨자는 응답 받은 배열에서 제거합니다.

> 당첨자는 나중에 확인하기 위해, 별도의 데이터로 저장하고 있어야 합니다.

- 참고사항
  > 명함 컴포넌트의 디자인은 없어도 괜찮습니다.
  > 명함 리스트가 초기화 되기 전까지, 명함 컴포넌트는 렌더링 되지 않습니다.
  > 추첨하기 버튼을 두(n)번째 눌렀을 때, 이전에 처음(n-1) 그렸던 명함은 사라지고 두번째 명함 정보만 렌더링 되면 됩니다.

3. 추첨 완료 기능 구현
   > 추첨하기 버튼을 4번 째 누르면, "이미 3명의 추첨을 완료했습니다. 당첨자는 AAA, BBB, CCC 입니다."라는 windos.alert()을 띄운다.

## 컴포넌트 반복하기 (리스트와 KEY)

- Array.map을 활용한다.
  - key는 왜 필요할까?
  - 여러개의 컴포넌트를 렌더링 할 시 필요하다.
  - index를 key로 활용할 경우 목의 순서가 바뀔 수 있는 경우 key에 인덱스를 사용하는 것은 권장하지 않습니다. 이로 인해 성능이 저하되거나 컴포넌트의 state와 관련된 문제가 발생할 수 있습니다.
  - [공식문서](https://ko.reactjs.org/docs/reconciliation.html#recursing-on-children)

## 이벤트 처리하기

- [공식문서](https://ko.reactjs.org/docs/handling-events.html)
- 합성이벤트
- [예제문서](https://github.com/zerobase-school/2022-frontend-school-react/tree/master/6/6-2/6-2-2)

- 이벤트 버블링 시 비동기 함수가 당연히 나중에 실행 된다!
- e.stopPropagation를 통해 이벤트 버블링을 막을 수 있다.

### 클래스 컴포넌트에서 이벤트 처리하기

- javascript의 this바인딩 문법에 따라, 메서드를 바인딩 시켜주어야 한다.

## 폼과 제어 컴포넌트

### testArea

### select

### 다중 입력 제어하기

## 비제어 컴포넌트

- [공식문서](http://ko.reactjs.org/docs/uncontrolled-components.html)
- ref를 사용하여 DOM에 직접 접근

  - class => createRef
  - 함수 => useRef

- 직접 DOM에서 값을 가져오는 방식
- [공식문서](https://ko.reactjs.org/docs/refs-and-the-dom.html)

**Ref 사용할 때**

- 포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
- 애니메이션을 직접적으로 실행시킬 때.
- 서드 파티 DOM 라이브러리를 React와 같이 사용할 때.

## ref

### forwardRef, imperativeHandle

- [공식문서](https://ko.reactjs.org/docs/forwarding-refs.html)
- [예제](https://github.com/zerobase-school/2022-frontend-school-react/tree/master/6/6-3/6-3-5)

### callbackRef

- useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다. 반환된 객체는 컴포넌트의 전 생애주기를 통해 유지될 것입니다.

- useRef는 내용이 변경될 때 그것을 알려주지는 않는다는 것을 유념하세요. .current 프로퍼티를 변형하는 것이 리렌더링을 발생시키지는 않습니다.

> 따라서, 리렌더링을 할 필요는 없지만 상태 관리를 해야할 때, useRef를 이용한 객체를 생성해서 활용할 수 있다.

- React가 DOM 노드에 ref를 attach하거나 detach할 때 어떤 코드를 실행하고 싶다면 대신 콜백 ref를 사용하세요.

[공식문서](https://ko.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node)

## Form - key심화

[공식문서](https://ko.reactjs.org/docs/lists-and-keys.html)
[예시](https://github.com/zerobase-school/2022-frontend-school-react/tree/master/6/6-3/6-3-8)

- 배열이 변화가 있다면 key 값을 unique하게 주어야 한다.

## 합성과 상속

[공식문서](https://ko.reactjs.org/docs/composition-vs-inheritance.html)

- 컴포넌트간에 코드 재사용에 관한 이야기

## React로 사고하기

[공식문서](https://ko.reactjs.org/docs/thinking-in-react.html)

# 컴포넌트 스타일링

[공식문서](https://ko.reactjs.org/docs/dom-elements.html#style)

- 캐멀케이스 프로퍼티를 사용한다.
- 숫자 프로퍼티는 "px"를 자동으로 추가한다.

- classnames패키지를 통해 의존성있는 className 추가 가능

## CSS Modules

- [공식문서](https://github.com/css-modules/css-modules)
- [createApp에서 사용](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)

## CSS in JS

- [공식문서](https://ko.reactjs.org/docs/faq-styling.html)

- [styledComponent](https://styled-components.com/)

- Component 단위 프로젝트를 진행 할 때 -> styled Component

- interactive한 CSS가 많다면, 미리 모든 것을 로드하는 것 이 좋기 때문에 CSS Modules 추천

# SPA란

- [공식문서](https://ko.reactjs.org/docs/glossary.html)

> 싱글 페이지 애플리케이션(Single-page application, SPA)은 하나의 HTML 페이지와 애플리케이션 실행에 필요한 JavaScript와 CSS 같은 모든 자산을 로드하는 애플리케이션입니다. 페이지 또는 후속 페이지의 상호작용은 서버로부터 새로운 페이지를 불러오지 않으므로 페이지가 다시 로드되지 않습니다.

- 전통적인 웹 어플리케이션의 단점

  1. 서버의 부담이 크다.
  2. 속도가 느려질 수 있다.
  3. 페이지 이동 시, 깜빡임이 발생한다

     => url을 이동하더라도, 새로운 HTML을 서버에서 받지말고 화면을 Client에서 그리자! (Client Side Rendering)

- [history API](https://developer.mozilla.org/ko/docs/Web/API/History_API)

## React-Router

## 비동기 프로그래밍과 Promise

- 코드의 실행이 완료 될 때까지 기다리지 않고 다른 코드를 실행 시키고, 이 코드의 실행이 완료 되면 특정 코드를 실행시키고 싶을 때 => Promise 사용

[공식문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### async / await

[공식문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function)

- fetch API
  [mdn](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)

ex. [기본적으로 제공되는 더미 API JSON placeholder](https://jsonplaceholder.typicode.com/)

- Axios
  [공식문서](https://axios-http.com/kr/docs/intro)

  - 요청 및 응답 인터셉트

* UseEffect의 함수는 Promise를 반환하면 안되기 때문에, UseEffect의 첫번째 함수를 async로 묶어서 Promise를 반환하면 안된다.

## Custom Hook

[공식문서](https://ko.reactjs.org/docs/hooks-custom.html)

- useFetch를 어떻게 만들고 구현할 것인가...? 고민

## SWR

[공식문서](https://swr.vercel.app/docs/getting-started)

## React Query

[공식문서](https://react-query.tanstack.com/)

# 전역상태관리

## useContext

- Provider 하위에서 context를 구독하는 모든 컴포넌트는 Provider의 value prop가 바뀔때마다 다시 렌더링 된다.

## useReducer

- [공식문서](https://ko.reactjs.org/docs/hooks-reference.html#usereducer)

- 다수의 하윗값을 포함하는 복잡한 정적 로직을 만드는 경우에 useReducer를 사용
- 다음 state가 이전 state에 의존적인 경우에 보통 useState보다 useReducer를 선호한다.

  - 객체가 병합되거나 useState처럼 한번에 실행되는 경우가 일어나지 않는다.

- 렌더링하는 로직과 state를 분리시켜야 할 때 사용

## Redux

- contextAPI는 같은 객체에 들어잇는 값이 하나라도 변경되면 자식 컴포넌트들이 모두 리렌더링 된다.
- 성능을 고려하면 번거로워진다.

- Provider 하위에서 context를 구독하는 모든 컴포넌트는 Providerdml value props가 바뀔 때마다 다시 렌더링 됩니다. Provider로부터 하위 consumer (.contextType과 useContext를 포함한)로의 전파는 shouldComponenetUpdate 메서드가 적용되지 않으므로, 상위 컴포넌트가 업데이트를 건너 뛰더라도 consumer가 업데이트 됨니다.

- [공식문서](https://ko.redux.js.org/introduction/getting-started/)

- [내가만든 Todo list]()

### Redux Toolkit

- 공식적으로 추천하는 redux 로직을 작성하는 방법

- [configureStore](https://redux-toolkit.js.org/api/configureStore)
- [createReducer](https://redux-toolkit.js.org/api/createreducer)
- [createSlice](https://redux-toolkit.js.org/api/createslice)

- reducer는 순수함수이다.(동일한 인자가 주어졌을 경우 동일한 결과를 반환하는 함수)

1. 컴포넌트의 useEffect내에서 API 호출하고 응답받은 결과를 스토어에 업데이트 해야한다.

-> 가능하지만 좋은 방식은 아니다.

2. middleware를 이용한다.

- action 객체를 dispatch하고, reducer가 action 객체에 대해 store를 업데이트 하기 전에 추가적인 작업을 할 수 있게 도와준다.

ex. redux-thunk, redux saga, redux-observable

|                     redux-thunk                     |                  redux-saga                  |    redux-observable    |
| :-------------------------------------------------: | :------------------------------------------: | :--------------------: |
| dispatch에 action객체가 아닌 thunk 함수를 전달한다. |               generator를 활용               | Rx JS를 기반으로 한다. |
|           가장 간단해서 진입장벽이 낮다.            | redux-thunk가 가진 몇가지 아쉬움을 보완한다. | 가장 진입 장벽이 높다. |

- [chunk 공식문서](https://redux-toolkit.js.org/api/createAsyncThunk)
  https://github.com/reduxjs/redux-thunk

- [예제](https://github.com/zerobase-school/2022-frontend-school-react/tree/master/11/my-redux-app)

### 그 외 상태 관리 도구

[3가지 비교 사이트](https://recoiljs.org/ko/)

1. recoil
   [공식문서]

- 리액트 팀에서 직접 만든 상태관리 라이브러리
- 비동기 데이터 통신을 위한 기능 제공
- React 내부에 접근이 가능하여 동시성모드, suspense등을 손쉽게 지원 가능

2. jotai

- Recoil에 영향을 받아 일본에서 만들어진 라이브러리

3. constate

- React Context + State
- Context의 단점을 개선

## 비동기 통신과 전역상태 관리

### React Query

- A unique key for the query
- a function that returns a promise that:
  - resolves the data
  - Throws an error

#### useMutation

- CUD를 할때 사용한다.(POST, PUT 요청 등)

#### QueryClient

- invalidateQueries method를 통해 outdated되었는지 아닌지를 알 수 있다.
- useQuery는 항상 cache가 stale하다고 판단하는 것이 기본이다.

## React 18 Update

[공식문서](https://ko.reactjs.org/docs/concurrent-mode-suspense.html#shat-is-suspense-exactly)

1. useEffect를 사용헤서 데이터 불러오기 시에는 "워터폴" 문제가 발생한다.
2. 불러오기 이후 렌더링 (Promise.all()은 모든 데이터가 불러와 져야, 반환하는 문제점)
3. 불러올 때 렌더링(Suspense 사용)

- 불러오기 시작 -> 렌더링 시작 -> 불러오기 완료

### Suspense와 React Query 사용하기

[공식문서](https://react-query.tanstack.com/guides/suspense)

# 렌더링 성능 최적화

[예시](https://codesandbox.io/s/frosty-pine-nvhewx)

- useMemo, useCallback
  [공식문서](https://ko.reactjs.org/docs/hooks-reference.html#usememo)
- React.memo
  [공식문서](https://ko.reactjs.org/docs/react-api.html#reactmemo)
  - 동일한 props로 동일한 결과를 낸다면, 리렌더링 하지 않는다.

## Code Splitting

- 번들이 용량이 크면, 첫 화면을 로드하는데 오래 걸릴 수 있다. 따라서 Code Splitting을 통해 처음 로드하는 화면을 나눈다.

Dynamic import, React.lazy()
[공식문서](https://ko.reactjs.org/docs/code-splitting.html)

- 라우트가 code splitting을 하기 좋은 곳이다.

## SSR

[공식문서](https://ko.reactjs.org/docs/react-dom-server.html)

- SEO(Search Engine Optimize가 힘들다
- React로 구현한 javascript 코드를 HTML로 변환해서 서버가 내려주도록 한다.

- [Next.js](https://nextjs.org/)
  This means that Next.js generates HTML for each page in advance,

1.  Static Generation
2.  Server-sied Rendering

- A React component called Link is provided to do this client-side route transition.
