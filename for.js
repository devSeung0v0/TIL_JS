//💡 반복문의 용도
//1. 코드를 여러번 실행할 때
//2. Array, Object에서 자료 꺼내쓸 때


//1️⃣ for 반복문
for(let i=0; i < 3; i ++){

}

//2️⃣ forEach() 반복문(Array 전용)
// [1,2,3].forEach()

//3️⃣ for in 반복문(Object 전용)
//용도 : Object에 있던 값을 전부 하나씩 꺼내서 사용할 때
//특징 1: ⭐️ enumerable한(셀 수 있는 or 나열할 수 있는) 것만 반복
const obj = { name : 'Kim', age : 30}

for(let key in obj){
  console.log(obj[key])//Kim, 30

}

//특징 2: 부모의 prototype도 반복
class 부모 {

}
부모.prototype.name = 'Park'

const obj2 = new 부모()

for(let key2 in obj2){
  
  console.log(obj2[key2])//Park -> 부모 유전자(prototype)의 name 값

  if(obj2.hasOwnProperty(key2)){
    console.log(console.log(obj2[key2]))
  }//내가 가진 값만 출력하고 싶을 때 hasOwnProperty 내장함수 사용
}

//특징 3: Object 자료형에만!(enumerable한 자료형에만) 쓴다


//4️⃣ for of 반복문(iterable 전용)
//Array,String,argumnents,NodeList,Map,Set...등에 사용
//특징: iterable한(반복 가능한) 자료형에만 사용 가능
const array = [2,3,4,5]

for(let item of array){
  console.log(item)//Array 안의 값들을 하나씩 꺼내준다
}

for(let spell of '도레미파솔'){
  console.log(spell)//String 안의 값들을 하나씩 꺼내준다
}

