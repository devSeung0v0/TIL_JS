//1️⃣ Arrow function 장점

//1. function 키워드 쓰는 것보다 직관적임
//2. 괄호 생략 가능 (파라미터 한 개일 때 소괄호 생략, 실행할 코드 한 줄일때 중괄호 생략 가능)

const func = num =>  console.log(num + 10)

func(5)

//2️⃣ Arrow function 예시

//1. forEach 콜백함수
const arr = [1,2,3,4]
arr.forEach(a => console.log(a))

//2. 이벤트리스너에서는 바깥에 있던 this 값을 가져옴 (아래 예시의 경우 window 객체)
// const btn = document.getElementById('btn')
// btn.addEventListener('click', e => {
//   e.currentTarget
// })

//3. Object 안의 함수
const obj = {
  func : ()=>{
    return this//{window}
  }
}
obj.func()

//💡 this & arrow function 연습문제

//1. 간단한 메소드 만들기
const people = {
  name: '김혜수',
  sayHi : function(){
    console.log(`안녕 나는 ${this.name}`)
  }
}
people.sayHi()//안녕 나는 김혜수

//2. 오브젝트 내의 데이터를 전부 더해주는 메소드 만들기
const obj2 = {
  data : [1,2,3,4,5]
}
const plusAll = (arr)=>{
  const sum = arr.reduce((a,b)=> a+b)
  console.log(sum)
}
plusAll(obj2.data)

//답안 : '오브젝트 내'의 함수 / this 키워드 사용
obj2.sum = function(){
  let addAll = 0
  this.data.forEach((a)=>{
    addAll = addAll + a
  })
  console.log(addAll)
}
obj2.sum()

//3. setTimeout 이용해보기 (1초 뒤에 this.innerHTML 콘솔창에 출력)
document.getElementById('btn').addEventListener('click',setTimeout(function(){
  console.log(this.innerHTML)
},1000))

//⭐️ 답안: funcion 키워드 사용시 this가 window으로 찍혀서 this.innerHTML는 undefined로 출력된다. 여기서는 상위 this 값을 그대로 가져오는 화살표 함수 사용해야함.
document.getElementById('btn').addEventListener('click',setTimeout(()=>{
  console.log(this.innerHTML)
},1000))