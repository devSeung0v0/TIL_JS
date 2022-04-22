//spread Q1
const a = [1,2,3]
const b = '김밥'
const c = [...a,...b]
console.log(c)//[1,2,3,'김','밥']

//spread Q2
const a2 = [1,2,3]
const b2 = ['you', 'are']
const c2 = function(a,b){
  console.log( [[...a], ...[...b]][1] )
}
c2(a2,b2);//'you', console.log([[1,2,3],'you', 'are'][1] )

//default 파라미터 Q1
function 함수(a = 5, b = a * 2 ){
  console.log(a + b)
  return 10
}
함수(3);//a=3, b=6 이므로 9

//default 파라미터 Q2
function 함수(a = 5, b = a * 2 ){
  console.log(a + b)
}
함수(undefined, undefined);//15, undefined -> default 파라미터 다 발동중

//array를 만들어주는 함수
function 어레이(...rest){
  return rest
}

const newArray = 어레이(1,2,3,4,5);
console.log(newArray); 

//최댓값 구하기
const numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];
console.log(Math.max(...numbers) )

//글자를 알파벳순으로 정렬해주는 함수
function 정렬(t){
  console.log(...[...t].sort()) 
}

정렬('bear'); 

//데이터마이닝 기능 함수