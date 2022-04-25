//💡 array 데이터를 전부 변수에 담으려면? -> destructuring
const arr = [ 2,3,4 ]
const [a,b,c] = [ 2,3,4 ]//모양(위치)을 맞춰 변수를 선언하면 변수가 생긴다.

console.log(a)//2

//등호로 디폴트값 지정 가능(선언만 하고 값 지정 안하면 undefined)
const [d,e,f=10] = [ 5,6 ]
console.log(f)//10

//💡 object 데이터를 꺼내 변수에 담으려면?
const obj = { name: 'Kim', age : 40 }
const { name,age } = { name: 'Kim', age : 40 }//변수명을 key명과 맞춰야 한다.

//💡 반대로 변수들을 object에 집어넣고 싶다면?
const name2 = 'Park'
const age2 = 30

// const obj2 = { name2 : name2, age2 : age2 }
//key와 value 이름 같다면 축약 가능
const obj2 = { name2, age2 }

//💡 함수 파리미터에 사용하려면? -> 파리미터 자리에 변수 넣어주면 된다
const people = ({ name, age })=>{
  console.log(name)
  console.log(age)
}
people({ name: 'Kim', age : 40 })

//예제 1️⃣ : a, address, number 가 가리키는 값은?
var [number, address] = [ 30, 'seoul' ]
var {address : ad, number} = { address, number }
//ad는 address 라는 변수의 이름을 바꾼 것이므로 address와 동일하게 'seoul'
//number의 기본값은 20이지만 number라는 변수에 30이 할당되었으므로 number는 30

//예제 2️⃣
//Object에서 데이터 뽑아 변수 만들기
let profile = {
  body : {
    height : 190,
    weight : 70
  },
  size : ['상의 Large', '바지 30인치'],
}
//내 답
const {height,weight,topSize,pantSize} = { height : profile.body.height, weight : profile.body.weight, topSize : profile.size[0], pantSize : profile.size[1]}

console.log(pantSize)//바지 30인치

//해설
let {
  body : {
    height,
    weight
  },
  size : [상의,하의]
} = profile