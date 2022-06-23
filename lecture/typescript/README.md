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
