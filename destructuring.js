//๐ก array ๋ฐ์ดํฐ๋ฅผ ์ ๋ถ ๋ณ์์ ๋ด์ผ๋ ค๋ฉด? -> destructuring
const arr = [ 2,3,4 ]
const [a,b,c] = [ 2,3,4 ]//๋ชจ์(์์น)์ ๋ง์ถฐ ๋ณ์๋ฅผ ์ ์ธํ๋ฉด ๋ณ์๊ฐ ์๊ธด๋ค.

console.log(a)//2

//๋ฑํธ๋ก ๋ํดํธ๊ฐ ์ง์  ๊ฐ๋ฅ(์ ์ธ๋ง ํ๊ณ  ๊ฐ ์ง์  ์ํ๋ฉด undefined)
const [d,e,f=10] = [ 5,6 ]
console.log(f)//10

//๐ก object ๋ฐ์ดํฐ๋ฅผ ๊บผ๋ด ๋ณ์์ ๋ด์ผ๋ ค๋ฉด?
const obj = { name: 'Kim', age : 40 }
const { name,age } = { name: 'Kim', age : 40 }//๋ณ์๋ช์ key๋ช๊ณผ ๋ง์ถฐ์ผ ํ๋ค.

//๐ก ๋ฐ๋๋ก ๋ณ์๋ค์ object์ ์ง์ด๋ฃ๊ณ  ์ถ๋ค๋ฉด?
const name2 = 'Park'
const age2 = 30

// const obj2 = { name2 : name2, age2 : age2 }
//key์ value ์ด๋ฆ ๊ฐ๋ค๋ฉด ์ถ์ฝ ๊ฐ๋ฅ
const obj2 = { name2, age2 }

//๐ก ํจ์ ํ๋ฆฌ๋ฏธํฐ์ ์ฌ์ฉํ๋ ค๋ฉด? -> ํ๋ฆฌ๋ฏธํฐ ์๋ฆฌ์ ๋ณ์ ๋ฃ์ด์ฃผ๋ฉด ๋๋ค
const people = ({ name, age })=>{
  console.log(name)
  console.log(age)
}
people({ name: 'Kim', age : 40 })

//์์  1๏ธโฃ : a, address, number ๊ฐ ๊ฐ๋ฆฌํค๋ ๊ฐ์?
var [number, address] = [ 30, 'seoul' ]
var {address : ad, number} = { address, number }
//ad๋ address ๋ผ๋ ๋ณ์์ ์ด๋ฆ์ ๋ฐ๊พผ ๊ฒ์ด๋ฏ๋ก address์ ๋์ผํ๊ฒ 'seoul'
//number์ ๊ธฐ๋ณธ๊ฐ์ 20์ด์ง๋ง number๋ผ๋ ๋ณ์์ 30์ด ํ ๋น๋์์ผ๋ฏ๋ก number๋ 30

//์์  2๏ธโฃ
//Object์์ ๋ฐ์ดํฐ ๋ฝ์ ๋ณ์ ๋ง๋ค๊ธฐ
let profile = {
  body : {
    height : 190,
    weight : 70
  },
  size : ['์์ Large', '๋ฐ์ง 30์ธ์น'],
}
//๋ด ๋ต
const {height,weight,topSize,pantSize} = { height : profile.body.height, weight : profile.body.weight, topSize : profile.size[0], pantSize : profile.size[1]}

console.log(pantSize)//๋ฐ์ง 30์ธ์น

//ํด์ค
let {
  body : {
    height,
    weight
  },
  size : [์์,ํ์]
} = profile