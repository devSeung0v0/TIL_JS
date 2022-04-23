//constructor, prototype 연습문제

function Student(name,age){
  this.name = name
  this.age = age
  this.sayHi = ()=>{
    console.log('안녕 나는 ' + this.name + '이야.')
  }
}
const s1 = new Student('Kim', 20)
const s2 = new Student('Park', 21)
const s3 = new Student('Lee', 24)

s1.sayHi()//안녕 나는 Kim이야.

//코드 실행 결과는?
function Parent(){
  this.name = 'Kim';
}
var a = new Parent();

a.__proto__.name = 'Park';
console.log(a.name)//'Kim' -> 직접 가지고 있는 값이 우선된다.

//모든 array에 적용할 수 있는 함수 만들기
//remove : array 내에 있는 3이라는 값을 제거헤주는 함수 -> 업그레이드 : ele를 파라미터로 받아서 원하는 값을 제거해주는 함수
const arr = [1,2,3]
Array.prototype.remove = function(ele){
  for(let i =0; i <this.length; i++){
    if( this[i]== ele )
    this.splice(i,1)
  }
}
arr.remove(1)
console.log(arr)//[ 2, 3 ]