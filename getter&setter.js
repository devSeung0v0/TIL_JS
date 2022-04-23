
//자료를 꺼내는 법을 만들어서 꺼내기
const people = {
  name : 'Park',
  age : 30,
  get nextAge(){
    return console.log(this.age +1) 
  },
  set setAge(age){
    this.age = parseInt(age)//실수로 age에 문자를 넣어도 숫자로 치환하여 대입
  }
}


//⭐️ 함수를 만들어 object 데이터를 다루는 이유
//1️⃣ object 자료가 복잡할 때 유용
//2️⃣ object 자료 수정할 때 실수 방지(미리 검사)

// people.nextAge()//31
// people.setAge(20)
// console.log(people.age)//20

//💡 복잡한 소괄호 생략하기 -> set / get 키워드(ES6 신문법)
//1️⃣ set은 데이터 변경하는 함수에 / ⭐️조건 :파라미터 1개 있어야 함
//2️⃣ get은 데이터 꺼내쓰는 함수에 / ⭐️ 조건 : return 있어야 함. 파라미터 x
people.setAge = '20'
people.nextAge


class Animal {
  constructor(){
    this.name = 'Dog'
    this.age = 13
  }
  get nextAge(){
    return this.age + 1 
  }
  set setAge(age){
    this.age = parseInt(age)
  }
}

//💡 연습문제
const animal1 = new Animal
animal1.setAge = 14

class Dog{
  constructor(type,color){
    this.type = type
    this.color = color
  }
  한살먹기(){
    if( this instanceof Cat )
    this.age ++
  }
}

class Cat extends Dog{
  constructor(type,color,age){
    super(type,color)
    this.age = age
  }
}

const dog1 = new Dog('푸들','white')


const cat1 = new Cat('코숏','brown',8)


//get/set 1
class Unit{
  constructor(){
    this.공격력 = 5
    this.체력 = 100
  }
  get battlePoint(){
    return this.공격력 + this.체력
  }
  set heal(point){
    this.체력 = this. 체력 + point
  }
}

const char1 = new Unit()

char1.heal = 100
console.log(char1.battlePoint)//205

//get/set 2
const data = {
  odd : [],
  even : [],
  setter함수 : function(...rest){
    rest.forEach((num)=>{
      if(num % 2 == 1){
        this.odd.push(num)
      }else{
        this.even.push(num)
      }
    })
  },
  get getter함수(){
    return [...this.odd, ...this.even].sort()
  }
}

data.setter함수(1,2,3)
console.log(data.getter함수)
