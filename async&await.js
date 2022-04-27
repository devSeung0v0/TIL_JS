const plus = async ()=>{
  return 1 + 1
}

plus().then((result)=>{
  console.log(result)
})
//💡 async를 함수 앞에 붙이면 함수 실행 후에 Promise 객체가 남는다
// async 단점 : 성공시 코드 실행만 가능

//💡 async function 안에서 쓰는 await -> then 대신 사용 가능
//await은 프로미스 실패시 에러가 나고 멈춘다 -> 방지하려면 try{} catch{}
// try { 이걸 해보고 에러 나면 } catch { 이걸 실행해주세요 }
async function plus2(){
  const promise = new Promise((reslove,reject)=>{
    const cal = 1 + 1
    reslove(cal)
  })
  try{
    const result2 = await promise
    console.log(result2) //아래 then 코드와 동일, 100
  } catch {
    console.log('프로미스 연산 실패')
  }

  //promise.then((result2)=>{
  // console.log(result2)
  // })
}

plus2()

//💡연습문제 : <button>을 누르면 성공 판정하는 Promise & 성공시 '성공'을 콘솔에 출력

const btn = document.getElementById('btn')

async function btnClick(){
  const promise2 = new Promise((resolve,reject)=>{
    btn.addEventListener('click'),()=>{resolve('성공')}
  })
  try{
    const result3 = await promise2
    console.log(result3)
  } catch {
    console.log('실패')
  }
}
