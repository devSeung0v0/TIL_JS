//๐ก ๋ฐ๋ณต๋ฌธ์ ์ฉ๋
//1. ์ฝ๋๋ฅผ ์ฌ๋ฌ๋ฒ ์คํํ  ๋
//2. Array, Object์์ ์๋ฃ ๊บผ๋ด์ธ ๋


//1๏ธโฃ for ๋ฐ๋ณต๋ฌธ
for(let i=0; i < 3; i ++){

}

//2๏ธโฃ forEach() ๋ฐ๋ณต๋ฌธ(Array ์ ์ฉ)
// [1,2,3].forEach()

//3๏ธโฃ for in ๋ฐ๋ณต๋ฌธ(Object ์ ์ฉ)
//์ฉ๋ : Object์ ์๋ ๊ฐ์ ์ ๋ถ ํ๋์ฉ ๊บผ๋ด์ ์ฌ์ฉํ  ๋
//ํน์ง 1: โญ๏ธ enumerableํ(์ ์ ์๋ or ๋์ดํ  ์ ์๋) ๊ฒ๋ง ๋ฐ๋ณต
const obj = { name : 'Kim', age : 30}

for(let key in obj){
  console.log(obj[key])//Kim, 30

}

//ํน์ง 2: ๋ถ๋ชจ์ prototype๋ ๋ฐ๋ณต
class ๋ถ๋ชจ {

}
๋ถ๋ชจ.prototype.name = 'Park'

const obj2 = new ๋ถ๋ชจ()

for(let key2 in obj2){
  
  console.log(obj2[key2])//Park -> ๋ถ๋ชจ ์ ์ ์(prototype)์ name ๊ฐ

  if(obj2.hasOwnProperty(key2)){
    console.log(console.log(obj2[key2]))
  }//๋ด๊ฐ ๊ฐ์ง ๊ฐ๋ง ์ถ๋ ฅํ๊ณ  ์ถ์ ๋ hasOwnProperty ๋ด์ฅํจ์ ์ฌ์ฉ
}

//ํน์ง 3: Object ์๋ฃํ์๋ง!(enumerableํ ์๋ฃํ์๋ง) ์ด๋ค


//4๏ธโฃ for of ๋ฐ๋ณต๋ฌธ(iterable ์ ์ฉ)
//Array,String,argumnents,NodeList,Map,Set...๋ฑ์ ์ฌ์ฉ
//ํน์ง: iterableํ(๋ฐ๋ณต ๊ฐ๋ฅํ) ์๋ฃํ์๋ง ์ฌ์ฉ ๊ฐ๋ฅ
const array = [2,3,4,5]

for(let item of array){
  console.log(item)//Array ์์ ๊ฐ๋ค์ ํ๋์ฉ ๊บผ๋ด์ค๋ค
}

for(let spell of '๋๋ ๋ฏธํ์'){
  console.log(spell)//String ์์ ๊ฐ๋ค์ ํ๋์ฉ ๊บผ๋ด์ค๋ค
}

