import React, {useState} from "react";
// useState(initialState 이벤트를 줬을 때 상태가 변하는 개체의 초기값) 아래와 같은 경우에서 0이 1,2,3...로 변해야 하니까 초기값은 0
// state : 변한 값 저장, 출력할 값
// setState : 이벤트 발생 알리기 일종의 함수
// 실행이되어지는 이벤트 객체도 넘어갈 수 있다.
// 쿠팡 장바구니에서 물건 갯수에 비례해 전체 가격 계산할 때 쓰일 수 있다.
// 물건 갯수 x 물건 1개의 기본 가격 = 토탈 가격
export default function Counter({onClick,totalCount}){
  const [count, setCount] = React.useState(0);
  /* const Add = (event)=>{
    setCount(count+1);
  } */
  function Add(){
    setCount(count => count+1);
    onClick();

  }
//onClick()은 부모쪽에서 넘어온 이벤트핸들러
  return(
    <div>
      <span className="number">{count}/<span className="total">{totalCount}</span></span>
      {/* <button className="button" onClick={()=>{Add(); Add(); Add()}}>Add 3+</button> */}
      <button className="button" onClick={()=>{setCount(count+1);onClick();}}>Add 1+</button>
    </div>
  );
}