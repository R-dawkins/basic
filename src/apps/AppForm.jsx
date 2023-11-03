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
    setForm({...form,[name]:value})
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