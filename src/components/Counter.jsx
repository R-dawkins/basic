import React, {useState} from "react";
// useState(initialState 이벤트를 줬을 때 상태가 변하는 개체의 초기값) 아래와 같은 경우에서 0이 1,2,3...로 변해야 하니까 초기값은 0
// state : 변한 값 저장, 출력할 값
// setState : 이벤트 발생 알리기 일종의 함수
export default function Counter(){
  const [count, setCount] = React.useState(0);
  /* const Add = (event)=>{
    setCount(count+1);
  } */
  function Add(){
    setCount(count => count+1);
  }

  return(
    <div>
      <span className="number">{count}</span>
      <button className="button" onClick={()=>{Add(); Add(); Add()}}>Add 3+</button>
      <button className="button" onClick={()=>{Add()}}>Add 1+</button>
    </div>
  );
}