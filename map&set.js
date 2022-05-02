//Map 자료형
let person = new Map()
person.set('name','Kim')
console.log(person)//Map(1) { 'name' => 'Kim' }

//⭐️ Map 자료형의 화살표? Map 자료형은 자료간의 연관성을 표현하기 위해 쓴다
//💡 Object 자료형은 자료 이름으로 글자만 가능하지만 Map 자료형은 모두 가능하다(숫자, 배열 등)
person.set([100],age)

//1️⃣ Map에서 자료 꺼내는 법 / 삭제하는 법 / 자료 개수 세는 법

person.get('name')
person.delete('name')
person.size

//2️⃣ 반복문 사용 가능하다
for (let key of person.keys()){
  console.log(key)
}

//3️⃣ Map 자료형에 직접 자료 집어넣기(대괄호 두 개)
let person2 = new Map([
  ['name', 'Lee'],
  ['age',20]
])

//---------------------------------------------------------

//Set 자료형 -> 중복 자료를 허용하지 않는 Array 비슷한 자료형
let students = ['Minji', 'Jane', 'Youna','Jane']
let students2 = new Set(students)
console.log(students2)//Set(3) { 'Minji', 'Jane', 'Youna' } 중복값인 Jane 삭제

//1️⃣ Set 자료형에 자료 추가하기 / 자료 제거하기 / 있는지 확인 / 자료 개수 확인
students2.add('Heily')
students2.delete('Jane')
console.log(students2.has('Jessy'))//false
console.log(students2.size)//3
console.log(students2)//Set(3) { 'Minji', 'Youna', 'Heily' }

//2️⃣ ⭐️ Set 자료형 <-> Array 자료형 (Set 자료형으로 중복 자료 없앤 후에 Array 자료형으로 변환)
students = [...students2]//spread operator로 괄호 없앤 후 다시 배열에 담아준다
console.log(students)//[ 'Minji', 'Youna', 'Heily' ]
