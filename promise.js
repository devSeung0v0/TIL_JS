//๐ก Promise๋ ์ฝ๋ฐฑํจ์ ํจํด์ ์๊ทธ๋ ์ด๋ ๋ฒ์ ! ์ฑ๊ณต ์คํจ๋ฅผ ํ์ ํ๋ ๊ธฐ๊ณ๋ผ๊ณ  ์๊ฐํ๊ธฐ. 
//์์ฐจ์ ์ผ๋ก ์คํํ๊ณ  ์ถ์ ๋ ์ฝ๋ฐฑ ํจ์ ๋์ 

const promise = new Promise((resolve,reject)=>{
  resolve()//์ฑ๊ณต ํ์ 
  reject()//์คํจ ํ์ 
})

promise.then(()=>{
//์ฑ๊ณต ํ์ ์ ์คํํ  ์ฝ๋
})
.catch(()=>{
//tlfvo ํ์ ์ ์คํํ  ์ฝ๋
})

//์์  1๏ธโฃ : ์ด๋ ค์ด ์ฐ์ฐ
const promise2 = new Promise((resolve,reject)=>{
  const ์ด๋ ค์ด์ฐ์ฐ = 1 + 1
  resolve(์ด๋ ค์ด์ฐ์ฐ)// 1 + 1 ์ฐ์ฐ์ด ๋๋๋ฉด resolve() ํ์ ์ ๋ด๋ ค์ฃผ์ธ์ / ํ๋ผ๋ฏธํฐ๋ก then ํจ์์ ๊ฒฐ๊ด๊ฐ ์ ๋ฌ๋ ๊ฐ๋ฅํ๋ค
})

promise2.then((result)=>{
  console.log(result)//10
  })
  .catch(()=>{
    console.log('์คํจ')
  })


//์์  2๏ธโฃ : 1์ด ํ์ ์ฑ๊ณตํ๋ Promise, ์ฑ๊ณต์ ํน์  ์ฝ๋ ์คํ

const promise3 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve()
  },1000)
})

promise3.then(()=>{
  console.log('์ฑ๊ณต')
}).catch(()=>{
  console.log('์คํจ')
})

//โญ๏ธ Promise ๊ฐ์ฒด์ 3๊ฐ์ง ์ํ
//1) ์ฑ๊ณตํ๋ฉด <resolved>
//2) ํ์  ๋๊ธฐ์ค์ด๋ฉด <pending>
//3) ์คํจํ๋ฉด <rejected>

//์ฐ์ต๋ฌธ์  1 : ์ด๋ฏธ์ง ๋ก๋ฉ ์ฑ๊ณต์ ํน์  ์ฝ๋ ์คํ 

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
    console.log('์ฑ๊ณต')
}).catch(()=>{
    console.log('์คํจ')
})

//์ฐ์ต๋ฌธ์ 2 : Ajax ์์ฒญ์ด ์ฑ๊ณตํ๋ฉด ์ฝ๋ ์คํ / ํ๋ก๋ฏธ์ค ์ฒด์ธ

const ajaxํด์ฃผ๋ํจ์ = (URL)=>{
  return new Promise((resolve,reject)=>{
    $.get(URL).done((result)=>{
      resolve(result)
    })
  })
}

const promise5 = ajaxํด์ฃผ๋ํจ์('https://codingapple1.github.io/hello.txt')

promise5.then((result)=>{
  console.log(result)
  return ajaxํด์ฃผ๋ํจ์('https://codingapple1.github.io/hello2.txt')
}).then((result)=>{
  console.log(result)
})

