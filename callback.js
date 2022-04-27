//web api를 통한 비동기 처리 -> 오래 걸리는 작업은 스킵해두고 다른 작업부터 처리하고 돌아옴
console.log(1)
setTimeout(()=>{ console.log(2)},1000)
console.log(3)

//콜백함수를 이용한 함수 디자인 패턴-> first 실행후 second 실행
const first = (func)=>{
  console.log(1)
  func()
}
const second = ()=>{
  console.log(2)
}

first(second)

//혹은 함수 이름을 짓지 않고 실행
first(()=>{
  console.log(2)
})

//콜백함수의 문제점 -> 코드 복잡해짐
first(()=>{
  second(()=>{
    third(()=>{
    })
  })
})

//💡해결 -> Promise 패턴
first().then(()=>{

}).then(()=>{

})