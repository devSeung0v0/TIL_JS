//1️⃣ Constructor : Object 생성 기계(⭐️상속 : 부모 - 자식)
//2️⃣ Prototype : 부모(Constructor)의 유전자 -> Prototype에 값을 추가하면 모든 자식들이 물려받기가 가능

//💡 학생 출석부 만들기
function Student(name){
  this.name = name//consturctor 함수 내의 this는 새로 생성되는 object(인스턴스 Instance)를 뜻함
  this.age = 15
  this.sayHi = ()=>{
    console.log('안녕하세요 ' + this.name + ' 입니다.')
  }
}

//파라미터로 이름 받아줌
const s1 = new Student('Jung')
const s2 = new Student('Yang')

console.log(s1)//Student { name: 'Jung', age: 15, sayHi: [Function (anonymous)] }
s1.sayHi()//안녕하세요 Jung 입니다.
s2.sayHi()//안녕하세요 Yang 입니다.

//prototype
//동작 원리 : (1)인스턴스가 직접 값을 가지고 있는지 검사 (2)인스턴스의 부모 유전자(Student.prototype)가 값을 가지고 있는지 검사 -> 실행
Student.prototype.sex = 'female'
console.log(s1.sex)//female

//prototype 특징
//(1) consturctor 함수에만 생긴다
//(2) 인스턴스의 부모 유전자 검사 / 부모님을 강제 등록하기 -> __proto__ 속성
console.log(s1.__proto__)//{ sex: 'female' }

//💡 연습문제 : 쇼핑몰 상품데이터를 consturctor 함수로 만들기

function Product(name,price){
  this.name = name
  this.price = price
  this.tax = ()=>{
    console.log(this.price * 0.1)
  }
}

const product1 = new Product('shirts', 50000)
const product2 = new Product('pants', 60000)
console.log(product1)//Product { name: 'shirts', price: 50000 }
console.log(product2)//Product { name: 'pants', price: 60000 }
product1.tax()//5000
