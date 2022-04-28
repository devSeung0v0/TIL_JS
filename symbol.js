//1️⃣ 심볼 자료형 쓰는 방법
const sym1 = Symbol('description')

//2️⃣ 용도: Object 자료형의 비밀스런 Key값이다!
const address = Symbol('주소는 비밀')
const height = Symbol('키도 비밀')

const me = {
  name : 'Lee',
 //[height] : '174cm' Symbol 직접 집어넣기도 가능
}
me.address = 'None'//공개 키값, 반복문에서 출력 o
me[address] = 'Florida'//비공개 키값, 반복문에서 출력 x
me[height] = '174cm'

console.log(me)
// {
//   name: 'Lee',
//   address: 'None',
//   [Symbol(주소는 비밀)]: 'Florida',
//   [Symbol(키도 비밀)]: '174cm'
// }

//3️⃣ 특징 1: 설명이 같다고 같은 Symbol이 아님
const a = Symbol('설명1')
const b = Symbol('설명1')
console.log(a == b)//false

//특징 2: Symbol.for()로 전역 심볼 만들 수 있음
//Symbol.for() : 같은 설명을 가진 심볼이 위에 이미 있으면 기존 심볼을 대입해준다.
const aa = Symbol.for('설명1')
const bb = Symbol.for('설명1')
console.log(aa == bb)//true

//특징 3: 기본 내장 Symbol들이 있다.
const arr = [2,3,4]
arr[Symbol.iterator] //JS가 미리 집어넣는 기본 Symbol

//Symbol 자료형은 enumerable 하지 않기 때문에 반복문에서 출력 안된다.
for(let key in me){
  console.log(me[key])//Lee None
}



