import React, { useState } from "react";

export default function AppLogin(){
  const [form,setForm] = useState({id:'',pass:''}); //id와 pass 기본 값  초기화
  const handleLoginChange =(e)=>{
    const {name,value} = e.target
    // console.log(e);
    // console.log(e.target); // 여기서 change가 일어나는 대상은 input 태그이다. 따라서 input 태그가 로그로 찍힌다
    console.log({...form});
    setForm({...form,[name]:value})// input태그의 name속성이 가진 value를 업데이트하는 용도 ******************** 자세히 이해할 것
    // console.log(form);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(form)
  }
  return(
  <form onSubmit={handleSubmit}>
    <label htmlFor="id">아이디 : {form.id}</label>
    <br />
    <input type="text" name="id" id="id" value={form.id} onChange={handleLoginChange}/>
    <br />
    <label htmlFor="pass">비밀번호 : {form.pass}</label>
    <br />
    <input type="password" name="pass" id="pass" value={form.pass} onChange={handleLoginChange}/>
    <button type="button">로그인</button>
  </form>
  );
}