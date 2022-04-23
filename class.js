//1️⃣ 상속 기능을 구현하는 ES5 방법 : Object.create()
const 부모 = { name: 'Kim', age: 50 }

const 자식 = Object.create(부모)//prototype을 부모로 해주세요
자식.age = 20//값을 새로 부여 가능

const 손녀 = Object.create(자식)//prototype을 자식으로 해주세요

console.log(손녀.age)//20

//상속 기능을 구현하는 ES5 방법 : class

class 부모1 {
  constructor(){
    this.name = 'Kim'
  }
  sayHi(){
    console.log('hello')
  }//자식 인스턴스에는 직접 상속 안됨(constructor 안에 써줘야 함), 부모.prototype에 추가
}

const 자식2 = new 부모1()

//2️⃣ 부모 prototype 출력
console.log(자식2.__proto__)
Object.getPrototypeOf(자식)

//3️⃣ extends -> class 하나 더 만들기(상속)
class GrandMa {
  constructor(lastName){
    this.firstName = 'Kim'
    this.lastName = lastName
  }
  sayHi(){
    console.log('Hi I am grandma')
  }
}

const grandma1 = new GrandMa('Minsu')

class Mother extends GrandMa{
  constructor(lastName){
    super(lastName)//물려받는 class의 constructor (하단과 같음)
    //this.firstName = 'Kim'
    //this.lastName = lastName
    this.age = 50//extends해서 만든 class는 this를 그냥 쓸 수 없다. super() 로 받아와야 함
  }
  sayHi(){
    console.log('Hi I am mother')
    super.sayHi()// Hi I am grandma
  }
}

const mother1 = new Mother('Yeonsu')
console.log(mother1)//Father { firstName: 'Kim', lastName: 'Yeonsu', age: 50 }
mother1.sayHi()//Hi I am mother /  Hi I am grandma