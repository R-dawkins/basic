import React, { useState } from "react";
import './App.css';

// uncontrolled component, form 브라우저에서 별도로 동작하는 컴포넌트, 폼 ex) submit
// react의 원칙을 벗어나는 component
// react의 원칙을 지키려면 별도의 이벤트를 주어야한다.
// onChange이벤트가 발생할 때 마다
// useState(); 안의 값은 초기화 시켜줘야함
export default function App(){
  const [aname,setName] = useState();
  const [aemail,setEmail] = useState();
  const [subname,setSubname] = useState();
  const [subemail,setSubemail] = useState();
  const [form,setForm] = useState({name:'',email:''}); // 값 초기화 시켜주기 초기화 시키지 않으면 에러가능성

  /* const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value,e.target[1].value)
    // setSubname(e.target[0].value)
    // setSubemail(e.target[1].value)
    const {name,value} = e.target
    console.log(e.target[0].value);
    console.log(value);
    setForm({...form}, [])
  } */
  const handleName = (e) => {
    // setName(e.target.value);
    const {name,value} = e.target;
    console.log(name)
    //e.target.name과 e.target.value를 구조분해하여 개별변수에 할당한 후
    setForm({...form,[name]:value})
    // spread 연산자로 form 기존 객체에 e.target.name에 해당하는 키(이벤트가 일어나고 있는 input의 name에 해당하는 키값이 [name]에 할당됨)와
    // e.target.value에 해당하는 value(마찬가지로 이벤트가 일어나고 있는 input의 value값)를 추가하여 새로운 객체로 만듦 
    
    /* React에서 상태는 컴포넌트가 렌더링될 때마다 React에 의해 추적됩니다. 상태가 변경되면 React는 컴포넌트를 다시 렌더링하여 변경 사항을 반영합니다.

    상태를 불변으로 유지하면 React가 상태의 변경을 쉽게 감지할 수 있습니다. 불변 상태는 객체의 참조를 변경하지 않고 객체의 새 버전을 생성하는 것을 의미합니다.

    상태를 변형하면 React는 상태의 변경을 감지하지 못합니다. 이는 이전 상태의 렌더링 "스냅샷"이 그대로 유지되기 때문입니다.

    따라서 React에서 상태를 업데이트하려면 항상 새 버전을 생성하고 상태를 이 버전으로 설정해야 합니다.

    객체 확산 구문은 기존 객체에 새로운 키-값 쌍을 추가하는 방법입니다. 이 구문은 기존 객체의 깊은 복사본을 만들지 않고, 기존 객체에 새 값을 추가하여 새로운 객체를 만듭니다. */
    
    console.log(form);
    if(form.name.length >= 10){
      alert('이름은 10자 이내로 작성해주세요');
    }

  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleChange = (e) => {
    setName(e.target.value)
    setEmail(e.target.value)
    //이렇게하면 name state와 email state가 충돌나서 setEmail에 값을 넣어도 name에 값이 같이 들어가고 그 반대도 같다
  }
  const handleSubmit = (e) => {
    const {name,value} = e.target;
    // console.log(name)
    setForm({...form,[name]:value})
    console.log(form);
/*     if(form.name.length >= 10){
      alert('이름은 10자 이내로 작성해주세요');
    } */
  }

  return(
    <form onSubmit={(e)=>e.preventDefault()}>
    <label htmlFor="name">이름</label>
    <input type="text" name="name" id="name" placeholder="이름" value={form.name} onChange={handleSubmit}/>
    <p>이름 : {form.name}</p>
    <br />
    <label htmlFor="email">이메일</label>
    <input type="text" name="email" id="email" placeholder="이메일" value={form.email} onChange={handleSubmit}/>
    <p>이메일 : {form.email}</p>
    <br />
    <button type="submit">전송</button>
    <p>이름 :  이메일 :  전체 : {form.name}</p>
    </form>
  );

}