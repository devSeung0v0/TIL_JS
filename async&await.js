const plus = async ()=>{
  return 1 + 1
}

plus().then((result)=>{
  console.log(result)
})
//๐ก async๋ฅผ ํจ์ ์์ ๋ถ์ด๋ฉด ํจ์ ์คํ ํ์ Promise ๊ฐ์ฒด๊ฐ ๋จ๋๋ค
// async ๋จ์  : ์ฑ๊ณต์ ์ฝ๋ ์คํ๋ง ๊ฐ๋ฅ

//๐ก async function ์์์ ์ฐ๋ await -> then ๋์  ์ฌ์ฉ ๊ฐ๋ฅ
//await์ ํ๋ก๋ฏธ์ค ์คํจ์ ์๋ฌ๊ฐ ๋๊ณ  ๋ฉ์ถ๋ค -> ๋ฐฉ์งํ๋ ค๋ฉด try{} catch{}
// try { ์ด๊ฑธ ํด๋ณด๊ณ  ์๋ฌ ๋๋ฉด } catch { ์ด๊ฑธ ์คํํด์ฃผ์ธ์ }
async function plus2(){
  const promise = new Promise((reslove,reject)=>{
    const cal = 1 + 1
    reslove(cal)
  })
  try{
    const result2 = await promise
    console.log(result2) //์๋ then ์ฝ๋์ ๋์ผ, 100
  } catch {
    console.log('ํ๋ก๋ฏธ์ค ์ฐ์ฐ ์คํจ')
  }

  //promise.then((result2)=>{
  // console.log(result2)
  // })
}

plus2()

//๐ก์ฐ์ต๋ฌธ์  : <button>์ ๋๋ฅด๋ฉด ์ฑ๊ณต ํ์ ํ๋ Promise & ์ฑ๊ณต์ '์ฑ๊ณต'์ ์ฝ์์ ์ถ๋ ฅ

const btn = document.getElementById('btn')

async function btnClick(){
  const promise2 = new Promise((resolve,reject)=>{
    btn.addEventListener('click'),()=>{resolve('์ฑ๊ณต')}
  })
  try{
    const result3 = await promise2
    console.log(result3)
  } catch {
    console.log('์คํจ')
  }
}
