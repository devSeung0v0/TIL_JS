//1️⃣ 변수의 3가지 특성 기억하기. 선언 / 할당 / (생존)범위

// 1. var
//재선언 O / 재할당 X  / 범위: function
var name = 'Kim'
var name = 'Park'

function func(){
  var name = 'Jung'
}
//var는 함수 내에서만 존재함

// 2. let
// 재선언 X / 재할당 O / 범위 {}
let age = 25
let age = 40 //재선언 불가능 SyntaxError: Identifier 'age' has already been declared
age = 30//재할당 가능

//3. const 
//재선언 X / 재할당 X / 범위 {}
const sex = 'female'
const sex = male // SyntaxError: Identifier 'sex' has already been declared
sex = 'male'// TypeError: Assignment to constant variable.

//3-1. const로 오브젝트 만들었을 때 -> 오브젝트 내부 값은 변경해도 에러 안남. (⭐️ 재할당 아님)
const people = {name : 'Lee'}

people.name = 'Kang'

//let, const의 범위는 중괄호
if(true){
  let name = 'choi'
}
//name은 if문 안에서만 존재함

//2️⃣ Hoisting 현상 : 변수(와 함수)의 선언부를 변수 범위 맨 위로 끌고오는 현상
console.log(job)//undefined : 선언은 되었으나 값 할당이 안된 경우 
var job = 'programmer'
console.log(job)//programmer

//3️⃣ 전역변수 : 모든 곳에서 쓸 수 있는 변수

var height = 170 //전역 변수(1)
window.eye = 'blue'//전역 변수(2)

function tall(){
  console.log(height)
  var hair = 'brown'//지역 변수 (힘수 내에서만 사용)
}

tall()//170

