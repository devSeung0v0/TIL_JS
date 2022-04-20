//1️⃣ Array에 붙이면 대괄호를 제거해줌
const arr = ['hello', 'world']
console.log(...arr)//hello world

//2️⃣문자도 마찬가지 대괄호 제거해주는 느낌으로 펼쳐줌
const str = 'hello'
console.log(...str)//h e l l o -> 인덱싱이 가능함

//3️⃣ 스프레드 연산자 활용방법

//3-1. 어레이 합치기 / 복사(Deep copy: 값을 공유하지 않고 독립적으로 존재)
const a = [1,2,3]
const b = [4,5]

const c = [...a, ...b]//a,b를 복사한 후 합치기
console.log(c)//[ 1, 2, 3, 4, 5 ]

//3-2. 오브젝트 합치기 / 복사 -> 중괄호도 제거해준다

const o1 = {a : 1, b : 2}
const o2 = {...o1, c : 3}

//💡 카피하다가 값 중복이 일어나면? -> 가장 뒤에 있는 걸 적용

const o3 = {a : 2, ...o1}//a : 1
const o4 = {...o1, a : 3}// a : 3

//3-3. array 내의 모든 데이터를 함수 파라미터로 넣을 때
function plus(a,b,c){
  console.log(a + b + c)
}
const nums = [1,2,3]
plus(...nums)//6