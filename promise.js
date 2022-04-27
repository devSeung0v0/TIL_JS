//💡 Promise는 콜백함수 패턴의 업그레이드 버전! 성공 실패를 판정하는 기계라고 생각하기. 
//순차적으로 실행하고 싶을 때 콜백 함수 대신

const promise = new Promise((resolve,reject)=>{
  resolve()//성공 판정
  reject()//실패 판정
})

promise.then(()=>{
//성공 판정시 실행할 코드
})
.catch(()=>{
//tlfvo 판정시 실행할 코드
})

//예제 1️⃣ : 어려운 연산
const promise2 = new Promise((resolve,reject)=>{
  const 어려운연산 = 1 + 1
  resolve(어려운연산)// 1 + 1 연산이 끝나면 resolve() 판정을 내려주세요 / 파라미터로 then 함수에 결괏값 전달도 가능하다
})

promise2.then((result)=>{
  console.log(result)//10
  })
  .catch(()=>{
    console.log('실패')
  })


//예제 2️⃣ : 1초 후에 성공하는 Promise, 성공시 특정 코드 실행

const promise3 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve()
  },1000)
})

promise3.then(()=>{
  console.log('성공')
}).catch(()=>{
  console.log('실패')
})

//⭐️ Promise 객체의 3가지 상태
//1) 성공하면 <resolved>
//2) 판정 대기중이면 <pending>
//3) 실패하면 <rejected>

//연습문제 1 : 이미지 로딩 성공시 특정 코드 실행 

const img = document.getElementById('test')
const promise4 = new Promise((resolve,reject)=>{
  img.addEventListener('load',()=>{
    resolve()
  }
)
img.addEventListener('error',()=>{
  reject()
})

})

promise4.then(()=>{
    console.log('성공')
}).catch(()=>{
    console.log('실패')
})

//연습문제2 : Ajax 요청이 성공하면 코드 실행 / 프로미스 체인

const ajax해주는함수 = (URL)=>{
  return new Promise((resolve,reject)=>{
    $.get(URL).done((result)=>{
      resolve(result)
    })
  })
}

const promise5 = ajax해주는함수('https://codingapple1.github.io/hello.txt')

promise5.then((result)=>{
  console.log(result)
  return ajax해주는함수('https://codingapple1.github.io/hello2.txt')
}).then((result)=>{
  console.log(result)
})

