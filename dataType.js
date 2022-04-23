//primitive data type은 변수에 값이 바로 저장된다.
//reference data type(Object, Array)은 값이 저장되지 않고 레퍼런스(값이 어디에 있다고 가르키는 화살표)가 저장된다.

//primitive data type 다루기 : 복사
let name1 = 'Kim'
let name2 = name1//'Kim'
name1 = 'Park'//name1만 바뀐다

//reference data type 다루기 : 복사
let name3 = { name : 'Kim' }
let name4 = name3
name3.name = 'Park'//name3, name4 둘 다 바뀐다

//reference data type 예제

let name5 = { name : 'Lee' }
let name6 = { name : 'Lee' }

name5 == name6//false -> 오브젝트를 가리키는 화살표가 다르므로 다른 자료형이다.

//오브젝트 내의 값을 바꿔주는 함수 cng -> 성공
let cng = (obj)=>{
  obj.name = 'Park'
}

cng(name5)
console.log(name5)//{ name: 'Park' }

//오브젝트를 재할당해주는 함수 cng2 -> 실패
let cng2 = (obj)=>{
  obj = { name : 'Park' }
}

console.log(cng2(name5))// { name : 'Lee' } -> ⭐️ 파리미터는 변수 생성 & 할당과 같음
//즉, cng2(name5)가 cng2(let obj = name5)로 해석된다. 화살표가 name5 오브젝트를 가리키게 된다.