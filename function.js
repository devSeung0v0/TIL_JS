//1️⃣ default parameter
//단일값, 연산, 함수까지 default parameter로 지정할 수 있다.

//b 파라미터 지정되지 않았을 때 10으로 할당됨
function plus(a,b = 10){
  console.log(a + b)
}

plus(1)//11

//2️⃣ arguments ⭐️ 예전 문법
// -> 모든 파라미터를 [] 안에 넣은 변수
//모든 파라미터를 한꺼번에 다루고 싶을 때 사용한다. 
function func(a,b,c){
  console.log(arguments[0])//1번째 파라미터
  console.log(arguments[1])//2번째 파라미터
  console.log(arguments[2])//3번째 파라미터
}
func(1,2,3)

//입력한 파라미터를 전부 콘솔창에 출력해주는 함수
function func2(a,b,c){
  for(let i=0; i<arguments.length; i++){
    console.log(arguments[i])
  }
}
func2(2,3,4)

//3️⃣ Rest 파라미터
// -> 모든 파라마터를 어레이 []에 보관해준다.
//⭐️ argument와의 차이점: 파라미터를 구분해줄 수 있다. '위치' 지정 가능.
//⭐️ spread operator와의 차이점 : 함수 파라미터 자리에 있는 것만 Rest, 나머지는 spread operator
function func3(a,b, ...rest){
  console.log(rest)//세번째 파라미터부터 출력
}
func3(1,4,65,7,8,3)//[ 65, 7, 8, 3 ]

//입력한 파라미터를 전부 콘솔창에 출력해주는 함수
function func3(...rest){//파라미터 개수 미리 지정하지 않아도 돼서 argument보다 편리하다.
  for(let i=0; i < rest.length; i++){
    console.log(rest[i])
  }
}
func3(1,2,3,4)

//⭐️rest parmeter 주의점
//1. 가장 뒤에 써야함 ('나머지'라는 의미)
//2. 두 번 이상 금지