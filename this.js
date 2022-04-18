'use strict'

//this 키워드 
//1️⃣ this 1: 그냥 쓰거나 일반 함수 안에서 쓰면 window 오브젝트를 가르킴
console.log(this)//{window}

const func = ()=>{
  console.log(this)//{window}
}
func()

//2️⃣ this 2 : 오브젝트 내(메소드)의 함수 안에서 쓰면 그 함수를 가지고 있는 오브젝트를 가르킴

const obj = {
  name: 'lee',
  // func : function(){
  //   console.log(this)
  // }
  //신문법 : function 키워드 생략 가능
  func(){
    console.log(this)//{obj}
  }
  
}
obj.func()

//💡 오브젝트>오브젝트 안의 함수라면? -> 함수를 가지고 있는 data 객체 (obj2.data)

const obj2 = {
  data : {
    func(){
      console.log(this)//{obj2.data}
    }
  }
}

obj2.data.func()

//💡 arrow function는 함수 밖 (상위 요소)에 있던 값 그대로 가져온다.
//⭐️ 함수나 변수를 전역에서 생성하면 {window} 전역 객체에 보관된다. 따라서 this1, this2  용법은 사실상 동일한 맥락

//3️⃣ this 3 : consturctor 함수 안에서 쓰면 새로 생성되는 오브젝트(instance)를 가르킴

function consturctor(){
  this.name = 'Kim'
}

const name1 = new consturctor()

//4️⃣ this 4 : 이벤트리스너 안에서는 e.currentTarget

const btn = document.getElementById('btn')
btn.addEventListener('click',(e)=>{
  console.log(this)
  const arr = [1,2,3]
  arr.forEach(function(item){
    console.log(item)//1 2 3
    console.log(this)//{window}, this 1 : 일반 함수에서는 window 전역 객체 혹은 this 2 : 메서드를 안고 있는 부모 객체
  })
})

//💡 오브젝트 내에서 콜백 함수를 쓴다면? 

const obj3 = {
  names : ['Kim', 'Lee', 'Park'],
  func(){
    console.log(this)//{obj3}
    obj3.names.forEach(function(){
      console.log(this)//{window}
    })
    obj3.names.forEach(()=>{
      console.log(this)//arrow function: 내부의 this를 변화시키지 않고 외부 this을 그대로 재사용 가능
    })
  }
}

obj3.func()//{window}