# Portfolio

index.css import 주석처리 해놈

## css

    object-fit: cover;

https://webdir.tistory.com/486

내용이 종횡비를 유지하면서 정의된 너비와 높이를 가득 채울때까지 확대된다.

    background-size: cover;
    background-position: center;

https://www.codingfactory.net/10559

https://www.codingfactory.net/10595

cover : 배경을 사용하는 요소를 다 채울 수 있게 이미지를 확대 또는 축소합니다. 가로 세로 비율을 유지합니다.

    position: relative;
    position: absolute;

https://ko.learnlayout.com/position.html

상대적, 절대적 위치

position relative는 해당 요소가 원래 있던 자리 기준

position absolute는 부모 요소인 브라우저 기준(스크롤하면 위치 변함)

position fixed는 부모 요소인 브라우저 기준(스크롤해도 위치 불변)

    height: 100vh;

https://webclub.tistory.com/356

뷰포트의 너비값과 높이값에 맞게 사용 가능.

브라우저 높이값이 900px일때 1vh는 9px이라는 뜻

100vh로 설정하면 브라우저의 높이값과 같아진다.

    background: rgba(0, 0, 0, 0.85);

https://www.codingfactory.net/10825

background color opacity

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

요소의 중앙 집결

https://www.tabmode.com/homepage/transform-translate.html

## useState, useEffect

useState() 함수의 비동기적 처리방식에 대한 해결 방법

https://velog.io/@public_danuel/trendy-react-hooks-basic-1
