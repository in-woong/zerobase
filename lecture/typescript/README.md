# Typescript

## Typescript 소개

- Typescript 는 javascript의 super set이다? -> 옛날 설명

- 타입 구문이 있는 javascript

  - Javascript에 추가 구문
  - IDE와 통합 => 오류 캐치

- A Result You Can Trust

  - Javascript로 변환
  - Javascript가 지원되는 모든 곳에서 실행

- Safety at Scale

  - Javascript를 이해하는 타입추론을 사용
  - 추가적인 코드 없이도 훌륭한 도구를 제공

## Typescript 효과

- (나의, 우리의) 데이터 기술서

  - 객체와 함수의 생김새를 정의
  - 데이터를 코드로 설명할 수 있는 데이터 기술서
  - 편집기에서 문서 및 버그를 검출할 수 있습니다.

- Typescript becomes Javascript via the delete Key.

[Typescript] (https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/)
[번역본](https://velog.io/@eunbinn/A-Proposal-For-Type-Syntax-in-JavaScript)

## TypeScript 의식적으로 학습하기

### any 지양하기

- unknown
- Generic
- Type Gruard
- Type Asswertion
- ban-ts-comment
  - ESLint 설정 시

### 지향하기

- strictNullChecks
- 문서화
- 선 타이핑 후 구현
- 집단지성
- 컨벤션 & 팀 문화 지향하기

### typescript playgroud 사용

### 기본타입

- Type Annotation
- Primitive
- Object Type
- function Type ([playgroud](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABKSAKMIC2AuRHMBGApgE4A0iAzlCbtSTGAOYCUu+xJiA3gFCIDEJIlBAkk+RAGpEAOSydU9FgG5eAX168ICSnAA2RAHT64TVCgioAjACYAzBQBEd+05aqtOsNWTgI9ogAvIhKNNZ0NIxMFPS2kQzMbFRRzMEAfDz8gsKi4ikk1tIFtmqa2roGxqbmlvaoTgAWRPqmTs4A7nAk+gAm7p4VPlB+kACswaFwBABWuNwFEQXRsTTxy2nqLBlZgkIiYkjTM0b0RTJOiJcyx6drGlqWY6gLZ7hNBm2rJOtOXT39RBbIA))
- Array Type([playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUhBAneBDAnpAKigDgUyiYcAYwHsA7AZwBdJr4F4AuWq+ASzIHMBtAXUgC8kbgCI6IgDSQxrAEyTpdAMwjeAbmLlqLeolnMGqADx0OnAHyDhM+ApvypNlevCbKNMgFcAtg2ZfvACMceD4rbgBGWSUpABYAVikANgB2AA5eN21AkhIAGz84RGMc-JwkMkshblZPHCkAMyQ8inrIWpwXcACGADosTwoACwAKGxEASg1gYHRPLDy8UndIJERw8akomMgmls6gA))
- Literal Type([playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUgZBLALgUwE4EMA2kAqBPAB2ShGHE2UUgsQGVFV4A7Ac0gF5IAiACWU0wB7LuHKV6jVpADUnLgHVBqTABMR4AMaCmAZ0EUAdEJYAKGhOYsAlKK26qdnXQaWO3PgOEBuUTWqUAOQBXAFsAIzQ3AEYAJgBmH01tJ0hHRGDwyM5YhNEgA))
- Tuple Type([playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUgVBXADgGwKZwJ6NVGvIC0kgHHWAu45IAc1gqBOQBkkgHuOCOzYCVDkgAwuCh4+dfkYDejgG-bIgE6bAHp0dOgHnHAOh2RSgC47ALaOARyciAGHsAvo4BFxyIAlRwCATgDVXAMTWRAALWAazr4bNkwBrjJcoAcJwBATuYOHABjAPYA7AGcAF0gAQwAnCIAuSBCIgEt-AHMAbQBdSABeSFSAIgBBPIAaSDyAIRKygGE89K8-INDgpDRY1P94AFsAI1QI0vik5Myc1IBGUsK68GBgeH8EgMhgrBxGkJXW1AAGWIAKIZTIAB9ITt7+gEoM7NzJsqL6nwDNlpRUACZ2i76ByAAdECjml0qN7lMilNKlNas8vOAgA))
- undefined, null([playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUhXA7AJgUwGYEt7MZAZJeWAGyKhjMgCkBDAN2oGcBjAJ3QAcAXQBdHAcQcAExyIAnOwDQzgABrAA5OAdDoqADmsAE44A1xyIE6lwCM9gHVXIgAYXAoeOAecamRAHuOBUCY2ATpoB0FCoBdxwB5j3SLQD26RABoCyWshaCgJg1dpCAKs2QgByDgAA9WnqAI82QgDgTgK81ttAExERwSGiY2JCAGi2AiJOQgBqrgBkNgDOdkIA1A4CVY6WAKU2QgDu1gJpzgCLjkOYWaTAMnGxMnABymQDCABbITADWDGKQgK6rgDdDZMDg4Eyu8AMZAFwZJJAAvEdEANxbO3sIhwgoGFg4Zw+5z5uoCMPoO5AM1AAngAJZAkVwACgA7q4WIhDgM2PAAOYASkgAG8oJAcehUJBobCXiczgAiGFw0norE42m0ljITiwFjwSCk6bg0mQADUkApiGxOIAvoLIAymSzzuAReAvvAfn8iK5kRCALbIBgA5HIBGDTDIyAAHwyqoARv5qaLtrtXERkFYlSr1ZrqNrUdKgA))
- any ([playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUhDA7AnpALogDgUyjQFV2AOWyQJBqAKQAYXBQ8YEpANcckEXJwS1WdIXAagcEqxwDVXAByckAXOwAnjLFvAD2ASQC26ADYBLAMbyUAQSSQxAJ0gBnFFqUpIgVjHAGoOotAV0iAY2sCl4zmDhwAMyvxFKeWPiR3niQIiAAKsFqwUgBcegby8ADmVJAA3lCQGcFhEVIAdHFSJFQA3OAAvi4BiiQARAASAKKysmI1VEA))
- unknwon([playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUhXA7A1vA9gd3lGXKAmBwOh2AtY5IDqzggwOAg45IAMLgoeM4CG8AnoBkzgP+2SAVXYActkgSDWARcciAJ1cCVY4A1VwAOTgGc7IZQADNgQAnAPOP5IgEdHAlTUTAJ00A6HABUAyoAXRwDiDcJKgxrIgFNnABh0TAKU2RAvTWAGsfeAx0ZWAE02QgDg1gDg9gAnjgAA1kICDk4CIE5CAoV2AO0OMAM5pAKYATgAuAJYo8JCAnGuAAuOQgDKMgCKjgCJ9kJGAOy2AAmOQgBargBt1kIA1A2KAOqsGOFjA4OAANpm5kPCwALYAXNbI6MUAvJAAnBsA3KP5AGaQABS5zAAOmSiHM7OQq-eQAERpudn58ADmjwCUkADeUEgQJu+le+VmR2+4AAvqNgMBjjdIAw0pAXm9Pt9QW8Id9duB4ZB9ggAMYFIpE0lHAAeiwQywwvwBhKBQImUwAbgwxgBGRZMZh3SDU3Ys1nsyBcsYAJjpNhWQpFBIRrMgEqlAGZFuj3h9FaKVeLJpLuQAWRYAIxQKAmTH1ytVauNUoArIsbhacvaxWzndyAGzasGfADaAF1vYbfZzuQB2RZ-aGKh2woA))
- void([playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUg3B7AlgEyjNkC0lAWq4DCHANcckAwewDTXAXcckDHRwFKbJBemsAaxwH07JBQrsB2hjbQAYXBQ8ciAU2cAGHYAXRyIBBxwCHjgDVXACeMYMAKQCGsFQGcAxgCdEABwAuowDiDdQCqjHQIATgHnHAOh2QArgDtkAUwBmiZ2+QlSGIAftYA37YAZDXBIyIACY06unt6+dAAqAJ76bgDKugbGJpCAmDWAAuOQgME1lIAio4AbTYrQwOAeLlqGiPDOkIZuGoYAFACUAFyx7l4+fgDeUJBTOm6GjjptLsMJqAC+4PWNza3tnYYAjH2DCCiQE+Drm85NLW0nyABijX1nG5darRrwADZuAHTfeAAc26HS6fV64CAA))

## 클래스

- javascript ES2015문법
- TypeScript에서의 클래스 기능은 C#에서 유래된 것이 많다.
- 일부 기능은 TS에서만 존재하는 고유 문법으로 컴파일 후에 사라진다.

- [생성자, 메서드](https://www.typescriptlang.org/play?#code/PQKhCgAIUhhAbAhgZ2VG7jnAYyayABQFMAnZAewDtIBvKSR0CR1mQEVXAdlobcgFpIgH3HAoROANcciBYwcCMgz0YxIABwCuAI3gBLHIB5xwDodkQDUDgSrHIgABrApU2zoWWVUQBbYgC5IyAC6l1VAOYBuWYi8nSColOxUyP1ZIUmJEABNqeABPSHgKHERXdWpnNw9vSABeSAAiAGkKGMQS7CjmSxhAXYGpQATxhsh2gUAIWcAGOsAVNcAfTshAF6bAT6aGrCicajylHFdKgApbB1z3Ty8AGkgAoJCwsgBKOktWVwALdWQAOhXiIuD7Ykios8ub3Yfd2QBfcHroJBACpdgBxB7iA9CQQC4NYAWmcWgBcFwAZ7YASocO4kAkauATebACLjkEA3O2AHVXACdN10wsk87gocTmxEWhzW+S8J1erBiriUpBoAAMACS0C5XW5PH7iQAZDYAXccAKU2QPkCj6BH6AUPHABNNJK5v3Af3+YEhgA9x5GAFkXkZDIQIkcjAAujIMggBhlxqAHBbIIADmsABOMEyCAYJrTZBACdDgBwJvTNR2AEbXgYAKrsANZ0WyCAGjHAD7tgAQasnTKhuRQARgeVGIAHciGRKFRFiUAFKIbwlbYATirhz8KbTCgATFnc-nyNRiwBrcteSuQKtNuvYBsUeDEa5pLyLBTp64U0hUml0w7gIA)

- getter setter([playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUhxBTALo+AnSAySBlJLVQTSSAiq4DstgC6OSCIE4D+1gBquSAxtYDqrgIuOSAANYCOTkgOBOAW0cAJ44UiiA5njSQADJGCQAzlPQANSAF4AfJECxg4EZBwALjkIYE3mwDzjgHQ7IgX3HADHWRAIBOBKsdHLk0wCedgHBrAAz2AMIcANcchAAYXAUPHIdQVJD1RgwAwewA010LCKQBxByEAU2cADDtFRAAdUAEsANwBDFD0jSAA6QAfRwAaBoWs6Rn9IQDHRwBOmmrzoYHBwAGMAGzLFRUgABTRFAHsAO0gAbyhIdYWygFt4AC4lRGKF8QBuNfXC0or4SAB9Msl9hYBXLYAjNDPzyCHFxUPnkNEHNUAAKTY7fb-I7iAA0kAee0gL3eaAAlCtvut1ogABZFRQ1CE3DTI7bwM7YqmQPEEmr3SSaBGSSnYgC+3xizPgoIxq2p2KKADNIKDaYSGSSNKSZHysQLIKgkM9UEsAESAEkHAKgTgAwWwADk5BAFKjgA1RwCtQ4AJpp6avl6w5CsVytVkAABoAMhsALuOAFKbIAASZbi+mItmADkHrJktYBKFstNWd3w533c3NBiLl9uFosQAE98vA5iLEZppZA1SiPqg1an7diA5KmYibZA7QqawWZV8qRz478Fv9IPkmQt4AB3aazRagtUAKQAgsc1fCAOwADjRZ278xG8BqIzm4lB+RqKbXfzmm+3u-3RPJaKAA))

- extends([playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUhTAPALrAdgEwM5RgWkoQYHBYwe0j0FU1wUvHthxwBjAGwEMMNJAGOsA+eyAbykgEAnWBgCuDRAAoAlL34CFkYYlGCUkAEQAhFrA3zIAX3DH6zVpEAwy4F2BuElSYO3PouFiJMuYtewVazQAisIIAlgBusGj6isamdAD2KBiIkGiwkAC8kCiwAO5W1jIA3LQJSfEMsAB0DPEA5pJpVW7iUtLS4EA))

- super([playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUhnBXADgUwE5RhygGOsB89lAXBcAz2wEqHJAONcBzZwHaHJAagcEqxrQXYHBGQcATxwBdHAcQcgBcAFgEtY9BpEAgExUqAMFsAto4B9RwBarGYOHABjADYBDWKICCAOyEBbHVsgBvdZDuQjO08gBccPqiFGA5gG5b9hoA9kawHvAafEGoABSOzm5hnj4AlNZQ9pmCIgB08ciQALwOTsgZdgC+5XA6AJ4AcqUxaTaZmajIfPCoRpAABoCbzYA83YAa45CALuOAIZ2AAuOQACRW2bB5pRV91VVVmrr6kAAKaLAhkMgAHnzIRgAmhibmlq2BIUkRUbH5iR5e3i3VmQgod6lFIbAJ2WB1RrOZrpNr2DpdHr9BYAtA5CENJopCr0QAx7WMprMFksVs41v5Mpt1MFQnxIICjr1ikZkAB3faHEIxABEACkdD5uSDNM8glpkDktEFvDEGSF0ZCsSkgA))

- 접근제어자[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUxECcH9rKBwJwLaOATxqJjnAYwDYCGAzsZAAoCmATsQPYB2kA3lJOwA4CuARvgJa5IDQgFtKALkjEALtX4MA5gG42neQDdCMypEKLJwrqJ41V7dXR24dAE0gGGtmlIBEAWVeQAPpFcAxVxwLSFxGWWouGzpqAAoRcSkIhUUAGj0DKQZjU2p0x2dqN08fP0CAShY1EMgZAAt+YgA6BN0AXmExSnMa9nrGpv12jO7qkP7mgppIDqnqHvYAX2CLYkIATwA5LtjK1l72akoZLmomAANAF3HAEM7AAXHIABJmCZauxcBQ8cAJpsATpqbz6uWIQ41CslBslHsa3WAEEDLsqgdIEcTmdIFc7o9ng1mkMPj8-gDqsD+FodNINgBxShOGjw-YHZGnC6ARkHACM9kEAAwvvW6AcUZMS85ot-iFlss8ERSJB3LpKAAPHROMhUWiMBEWMIMCJRGQxeJdJJyFLpIZZHI0fLUwrFLy+AKuPZjVZcDi01rGgwWmnUcqE6pQgCSDAAZnQ6Y7DscmWinsRnTQmlDYZRdotMbGXdQExttuIU8KLKKcBrZJAODNhJQAO4UGj0BixVwAK0ISlc6QAnO30h57eAgA)
  - 속성과 메서드에 접근을 제한할 수 있다.
  - 클래스 내부 구현 정보를 적당히 공개하여 일부분만 노출시킨다.
    - API와 비슷한 흉내를 낼 수 있다.
    - 타입 시스템을 이용해 규칙을 강제할 수 있다.

| 제어자    | 설명                                     |
| :-------- | :--------------------------------------- |
| public    | 어디서나 접근가능 (기본)                 |
| private   | 해당 클래스와 서브클래스에서만 접근 가능 |
| protected | 해당 클래스의 인스턴스에서만 접근가능    |

- static[playground](https://www.typescriptlang.org/play?ssl=9&ssc=33&pln=8&pc=20#code/PQKhCgAIUyGcAuBDBBLAxlExznQGyTjkgGVk10BhQ4yAbylkgAcAnVANxQFN4KMkBAE8WfALyQARABVRPKQG5czfikEIeiABQBKBk1Ww2PBAFc2AO0gADROvSQAtqYAWAewAmem4cgBfFWZ7SkgAc1M5MT0DI2YTcysyAWpaOAA6ETE-QMDwYGBIdHdLOHd8HnT8dzDtcgcaIgysnl08ErKKqpq6lMbiTK0EPV0gA)

  - 클래스의 속성과 메서드를 new로 인스턴스화 하지 않고 호출할 수 있다.
  - 접근 제어자를 사용할 수 있다.
  - 몇가지 정적 이름을 사용할 수 없다. (built-in property와 충돌)

- readonly[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUgnBTAhgEwPYDsA2BPKJjjgDGmiAzmZAAryxkYDeUkL6iAtvAFxkAusAS3QBzZiwQoMOSImHdI6AK7sARrUIsWRDH1iKivVLAAUbTj35DhAGhlyuS1bQCUTTe8i8AFgLIA6M3gAXgUOeABuMQ9vXz9ZYLsIqIBfKLJ4XgBBOVN4AHds7kc1WFco9xj-eJD0fMLI91TU4h1eSAAHSBr86lp6dGMAIgApRBFB2wBOSedI8Ha4uSDplvR6THg-TFRhY3bnQiA)

- 추상 클래스[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUwU2cQYHAuC4DPbAlQ1ExzgIYCMBnAFwCccBjIycgGxwIMgEEA7ASwFscbIBvKSIODBABIOAO0cA4LZEAqXYBxBwDstAwfmJlKkABYBTGjQD2AClUAuSKrYsA5gEpT5q9kFDggG1rAIGtS5ip5BIBXFgNrPiUfXy0iPxIWSCINNgIAOm1dQwAiAActEgI9FjTggGpINP980IBfcCrwYUBBycBECchAD3HUQBZF1EAVNcAAGshAAhbIQAwhyEAx0cATpsTa4Go84kgcdi4eAF5IFi0Ad2ZF7iDsWnpGAAVs3JitAA8iLRYAE0ZWTm4QnxT9IJewwRIIqJi0k45PJpSrVfZ0BiQAAiekskEu1zuDx2PH4rx072CaK+4Ui0RKMMsIJ8VRq5FmVCyQJiq3WW0BZyCAG5wOSWHNbrDILTNtDYcz9rM9DQtIl9JYDFSzskMYZrNZWUKRWL+ZzLDLUkFrEA)

  - abstract를 선언한 클래스로 직접 인스턴스화 될 수 없는 클래스이다.
  - 직접 인스턴스화 될 수 없지만 extends 후 파생된 클래스를 인스턴스화 하도록 유도한다.
  - 추상 클래스는 구현된 메서드를 포함시킬 수 있다.
  - abstract 선언한 메서드는 파생된 클래스에서 메서드를 구현해야 한다.

- Parameter Properties [playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUgFBDATvAtgUwC5rYuiD2ADjhgJZoDOUIw44AxgDbwUVw4X4B2kA3lJEH1uFDIgCu9DPkQAKAYMWRC4gEaNS9SF1RoAXJFGJSXAOYAaBUuXGAbvCyR4p-dvEpVOS9cWECWKTQAE0gXLiCcAwAiAFkoyAAfSCiAMSjvRQBKPisAX3BcoA)

  - constructor 안에 같이 선언해주면, this.~도 안해주어도 되고 필드에도 따로 선언해주지 않아도 된다.

- 메서드 오버라이딩[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUwVLsHEHA7LZQJGOBCewPu2BdxwlK1RMOAMYA2AhgM4WQCCAdgJYC2ZJA3lJFwE4CudACgCUHLmLHcApgBde3OpABE9ZqyyRAN02AazsAnTYs5cAvuGPFyVSABEA9gHNIkgB7TJdACbUVLdgch9BIr7iUrLySja2gAA1mroAdPrixqaklNQACpLcFNYKTi7unozeohL8wiXiPDJyCooZWTnq2jrxvkngxDkU0pBudpAAvJB0kgDuVnbCANyddN2QAA6Z2QpDI+P1K9MdRF09ZEWsa2O0hyTbs9kkkrEkk322sf7CQjO7c9bXt5NLDXRPZSEr0unxud1sAgOqhIAICQiAA)

  - 확장, 상속을 받고 메서드 오버라이딩을 하더라도, 본 클래스의 메서드는 변하지 않는다.

- 인터페이스[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUwPccBkXAZy4F3HAlQ1GHIEsB2AXAUwCcAzAQwGNCsBaSQVAnANcbskBJBwEZqstsBbABwA2hXoQIBnVoBtawCBrGYOHB4iZKoUgAFEuID2uSAG8okE7nKiAXJHH5ieAObGT5e4Su4ArrwBGJcAF9FSj0bSAApclx7Ky1iXX0AXkMnSDNLSAAiMIBBKIyAGhSXN0gARgBmAPAgA)

  - 객체의 타입을 정의하고 생김새를 가지도록 할 수 있다.
  - Typescript에서의 클래스의 기능은 C#에서 유래된 것이 많다.
  - 일부 기능은 TS에서만 존재하는 고유 문법으로 컴파일 후에 사라진다.
  - extends가 아닌 implements 키워드로 구현한다.

- implements in interface[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUhLBbADgGwKb1QOwC4GcowC0cOqATgGYCGAxqpICSDgIzWA+nZIDa1gIGuA6q4CdNAdAWDhYpSrXoAFcrgD2mAN5RIK3FQCeAOSoYAFAEoAXLmxlRAc3ABfcLdHZy1OpACCmBFWSQlKlZh2ohpAmZpiWvpBkAK6YBkEAbrKwACbW4DTIVLi4rpjqAMKZ2Upp6UU5AFJUYZCoAB4OmMk5bgXlcEhoGDg50mRymAA0uR5ePr408iFRNNiyZLqIUQBGyLA0kP4YQSEW+t7KEapRiOQGh5A2F9Gx++NHkJOYcmj8yLLmutgAFrC4-FtUPoLlcImotAEDPcjmRUNgomRMJAAAaAGoHADHtgA1xyCAF3HACGdgAFxyAAEgUPz+AICVmRILSQA)

- extends in interface[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUhTAPALrAdgEwM5Rt458CWKyATgGYCGAxrJAIIoEC2FANpAN5SQ8oVOwAXJAyISRAObceJAK4oAFAEpho8SikBfcMGCBK2cAzzYBdVwDiDgFKbIgCVHAOC2ATpoB04IqUo1IABVgkMAexRwkVEx6RhZ2Lh5efiEUWSYAIy9pEQoATwA5aOVVMUlwbXAqP1FIACsKDWFPbz9IAF5OZL4BYQAiACkKiVaAGmS5RSVGyJHIElhEWRJ-VrVJVuTNPpGMNMyBZWHRmQmpmbmNACYFke1NIA)

- Type Guard
- typeof[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUgXBPADgUwPYDMoy5AUgQwDd8BnAYwCcBLRWQBdHAcQckBdxwD+7JAXCcBrxwDVXAUpsiABhcCh45EABNYBqByIAfRwA0DgBPGswcOHQBXAHZlYVVBsiJqG2AApiAGzXIAXJA1qAtgCNkFSAB9IJWEYDmASltvP0gAbyhISKp0SBMEFAxICytIAF50yAAie2dXTP8wiMjiyApkWDUKfQBlHyoNXzN8S2R-IsgAXxUS6Nj4tBjk5DSMzOD633zCkpKyiqqk5qt2rva5yv0h8C6gA)
- in[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUhLA7KMmUKFdgdocDgtlC4NYFpnAF0ckE6lwVAnJBYwcEZBwF3HJAXCcBrxwDVXAUpskAHJwH07JAAmsBqB5oBvRyIAjewDWdgDtHAPOOAdDsiAMHsAaa0mDhwCAC4BTAE4AzAIYBjbZAAiAewDmkAN5RIT+IYC22gFyQAzpt0JrRycAI0NdAGsACgBKLwAiQFkuhLjwAF91LT0jU0gAYUNNeyDIF3cvX394QKcnd0sAdxj4wAWGwE4xlPTwfQBXeGNNWEt4H0MATwBBeFhXQwAbSMMpmdmvK1sAHzyC6KKauH1ISLjQiLi4YcXpuZ2HPb3L5YA6E6jo4vS92AOjuvqzhEgD2uuzuTiBs0evxiAG53ml1EA)
- instanceof[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUhLA7AzgFwIbwMYFMD2AzKGQgKVQDdVEMAnWAB2UAXRwHEHJAXccA-uyQFwnAa8cMJwkaTLjyRAD6OAGgcAJ44BSmyIF2BwIyDMwBrjkOtRzIdATzpZIgWMHlbSIFwawC0zGwCCrgHQ7ABYuABhcCh45CuAPcciAW0cAYrYAANTwygC6rcoADk5CACMuAIz3gIMDg4HgArpjIsDjwkADmWMgAIqjIWAAUACbFWABckEUlkAA+kCi08DkAlLX1RgDeUJCDsOIVVUIo6Nj4dVUdkP2Di4vU+SnU2ZUlA4MAvtuQ+yvIa9nwWADuMyWjJR0A3OA7QA)
- 사용자정의[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUwagcSrHAJ45QqBOA1xygBhcKHjlAANYDstUE0kgJ52A4NYAM9gGEOQCWAzlrsccOAGYCuAdgMYAXegHteDRgBEAgoICmACgAmAQ3kAuSJLVzIAH0iNBAJ3q8A5gEpNq+RK07IAbyiQ3xuYO7Hxt3WaMVATkRTgd5cABfcBieAWExSHNPGXllHU1tOwMjUwtrcN0XNzd6MIUmVMU-S0tnVxKSjy8fSD8GyGjG5u9xXjkAd0L0+UsAbijwM3ljThV+XQBhNXrG3hUAWzlNXLNzDq2RAYUCgCJABYbATjHTyaneGbmFrRFzVZL1rZ2TPY6AIxVjABrE6aU6AWS6wTdonEhKJxJUXgogvQNioADaZF76SDLQQFZGotH2SRY4pNTy9SCnf5A04McQE9G3GEJeGMXFI3go9GY14GXH4rmE+y4snuCmtU6HAZ0syQRlo5l8WGJRgqACe0iF6M53Ixzz5OLUdTFDHKCPMusJtTejTcCoAdDTgZYOl0SmVIBV2WoreibabGo7pScJo1otEgA)

- 열거형(Enum) [playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUwX0cBxrCoa5AogOwK4FsoWscQgU0y0gAUAnASwC8jIBvKSVgcQHsAbAE0gF5IARgAMIgDQtWAZWpcAbkUqTWrAEKUOaepIC+hAMZaAztyIA6LhwDmACip0iASnBG0prhat2H9c514XNw8vG3saegBtACIAnmiAXScgA)

  - 의미있는 상수 자료를 정의할 수 있다. (문서화)
  - 키를 값에 할당하며 순서가 없는 집합이자 자료구조이다.
  - enum 키워드 PascalCase 조합으로 생성
  - 계산된 값을 사용할 수 있다.

- 숫자 열거형[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUxqIcBPHKBfRwDjWFQ1yBRAdgVwLZQTTDhkCme+kACgE4CWAXuZAN5SRcDiA9gDYATALwBGADScuAZQb8AbuTqSuXAEJ1e2FpIC+FKpADydQUo6rIAMQZ0AzgBcxK1dPIBjLYJdcAKgAtbQXBdIA)
- 문자형 열거[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUwObsBPHKBfRwDjWFQ1yBRAdgVwLZQTTDjgCme+kACgE4CWAXuZAN5SRcDiA9gDYATSAF5IAIj5DxAGk5cAyg34A3cnVESlq9bPmQAQnV7YWm8UZMs9AXzLgAxiYDOA8gDp+vAOYAKeszkAJSOLm6ePv6MLO5SgiFO2K78Hl5+ASwA2hbGpuTiALpBQA)
  - 각 멤버의 값을 문자열로 초기화 되어야 한다.
  - 숫자형 열거와 동작 방식이 다르다
    - 값이 자동으로 증가하지 않는다.
    - 이외에 리버스 매핑의 차이점도 존재
- 혼합형 열거[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUgJBTALvATgewObwHbzQVwGdJAX0cAcawVDXIAKQHjXBLVYEooJphxwd8BbSAER7cAnpADeUSJIBiASxSFEkALyQADABoJkgMoyANgDdUSgES7DqE+AC+HLrwBCaNHoAyMgNbwAoth7jJSQA5NCUNLUgATXhCFRNI720rWyA)
- 리버스 매핑[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUwazsEJ7AlQ5QJ52EVVyULWOcBTAOwFcBbSAeQCcATfKyAbyklYDEBLKgZwBdIAvJACMAGhasAyvgDGAe0I1BkAEzjWrACoALLkqEBmcQF8CJctTpVJvKsw2ROPfkIBETvq-Ubp8xctdfBRovCUgdPQCI2lDTcD8+SAAzLj4ANQBDABtlS3oAOg9eAG54hUSAa3wATwokosycoTyqAG0U50aAXTLCbjks-HysuQBzAAoO9OyASl7+weGx8ara+tTeRrn5gaGRiZa5hN2lg9p6GyoZoA)

  - 숫자형 열거 같은 경우 키의 값을 역으로 매핑할 수 있다.
    - 문자형 열거는 지원되지 않음

- const 열거[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUhjB7AdgZwC6UC+jgHGqhaxxhhIArZQHQ7JAUHsBgGwCdHARcckBlWyQCobAByckClRwFKbATpoB04BCnQBTRAFcAtpAAi45AGsA3lEiaAwvAA28AE6QAvJABEAdQAWAS1TizAGg2aLNgCaorJyAEYALAAMgc4AvuDgiiqCOvoGkUrKggAS4jYA5laoCSoA2mapGVlmALpAA)

  - 기본적으로 열거형은 불안전한 접근을 허용한다.
    - const enum은 이러한 점을 보완하기 위한 안전한 열거형
  - enum 앞에 const 키워드를 명시한다.
  - 컴파일 후 제거되기 때문에 javascript 코드를 생성하지 않는다.

- 열거형 활용 [playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUwX0cBxrCoa3eULUoaiHAJ4wGkoBzdekgrz2CWq5IAMLgoeNrDjgDGA9gHYDOALpAKasCuAW0gAZAIasA5vzGSekAN5RIKgCoBPAA48AyowBOAS03cAvJABEqnRdzKVAKTEA3MXqMnI5iw5t2Vji5iXpYOAIIAamG29pAASvwARuohFnEAQjEAvgycWvLiUgDCzAAm8uYA1jzqzABmkHna9aIS0rI8ufmtxWU8AEypGtruxpwWkAA+oUGjJhPTPkELlgnJFl3aPZJDNlOhNgx1-KyMnIZskHKchZIAFAA2bSXlAFzbLzwAlIqxLBzMB48AB0D2Y9yevXKX3AOXA11udwsgBFRwAs3YAO0cALaMWGEItpIgAK6k4AAs2DigA)

  - 런타임에 존재하는 실제 객체
  - keyof, keyof typeof와 조합하여 활용할 수 있다.

- 타입 별칭 소개[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUgVBPADgU0gQQDYEsCGBnZPSACkAGFwUPHJARnsFs5gSihkeHHABclU82AnSAXkjceWAHYBzANztOkUQFcAtgLlKARsh7SOKSDh59BCxQG0AutJm6AZvNEBjFcToCAfJABuAeywATVjqoAAqaeF6iKgDeUJCxojiKyABcQrwxsTjiyaqK6ZD2XnZseCn6PHlZbACSotZeKbYO4AC+rGJsmtY49sGh4TUdPF09kNGxcQnZwnmZ2cZ5BUUlegYtrEA)

  - 의미없는 반복을 줄이고 타입을 명시적으로 사용하도록 돕는다.
  - let, const를 선언해 변수를 초기화 하듯이 사용할 수 있다.
  - 컴파일러가 따로 추론하지는 않는다.

- Union 타입 (합집합)[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUhVA7Alge3pQAwuFDxyAKQlquCLk3gJRQwC0kgGi2Ai45HoDpzkgDTWA-NblZIIiTkgGquAZDaWjBw4AC4BPAA4BTSAGUxAJ0TwA5gHklAOQCuAWwBGMpZAC8kAM7LVayAB9I8A8aXjpcgOIz4AExMAKh7mkABEALKhDmEAYqGiAMao1pAAhgBcCjbqWnpGJiGh8gEASvFJ8CmGmYoqOTouBRYAjABMAMzgwMCQFSkJNdmaDfmmFobIyAA2MqnwopKykAAKJpaoIQDeUJC78Kn6MpnWdWo7u6lqR06NbgC+C8Hhchbbu3sH1ye255BXfoEPJlvAClEFZOAHuA+mJIMhDAArTKrJTrNCOZ5bX77Q6ZUIAKTmalCABpfpdrgBOSlk95-Hz+MFA2LxKFAA)

- intersection 타입 (교집합)[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUhLA7ALgUwE4GdkGNGwPbySADC4KHjkAFIAq1gi5OCWqwJRQwC0kgGi2Aa45IK81grYuSAQ3sAVXU2DhwiAJ4AHZJADKiVAgDmAQXgATAHIBXALYAjNJAC8kdEtWQAZJHgHjqCTLkBxZFrQAVV2cgARACyAZAAPoEAYgHiLrKQAApo6AT+AN5QkFnwAIb6yABcFlbwKplZOSqF9o5o4AC+4lLxQQCi6eX2edWWyqWdVV6ovrJFHkMjyA3iWASWkHiGAFZFSRipdm0dWdndRQEAUjmlAQA0nZXVAJxX5zuQg5o+rvsh00A)

- 유니온 타입 판별[playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUwCccCabAUY5QAwuFDxygEZcCM9UaBTZwAw7ANVcAY6yQFtHASDsBaxuJVNQEXHIizJAQccAtVvSPYcAEsAdgBcApgCcAZgEMAxuMgBZWQBslAbyiRdw2QFtxALkgBnUZJEBzHbtnWTkYQFcDAIyl3Ij4QBMpABUATwAHJwAiZQjwAF9wITEpOUVIADFxA3Utb30jUwsrYVtde0dTVw8vUp9xfyCwyLSY+PBRRsgABSkzAHthSABeFWzIAB90zOyE6RdheVFBfsh5SXFZCVUNAApNZ0NxABpIByPa+skQ8MhY027JPuEASlMtnJq10RdJAe0amryZ1Ox18AUujW88Vas3mi2Wq3WEgyWR2e0Bx2B5zBVyUty6PX6L0mKPepU+31+3gBBwxjhBdWxEJqUKAA)

