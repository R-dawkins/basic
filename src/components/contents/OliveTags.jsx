import { useEffect, useState } from "react";

export default function OliveTags(){
  const [state,setState] = useState([]);
useEffect(()=>{
  fetch('/data/tags.json')
  .then(res=>res.json())
  .then(data=>setState(data))
},[])
// 하위 컴포넌트에서 map을 쓸 때 상위 컴포넌트에서 하위 컴포넌트를 임포트해서 불러오면 하위 컴포넌트에서는 배열에 값이 들어오기도 전에 실행된다
//React 는 렌더링이 화면에 커밋 된 후에야 모든 효과를 실행한다.
//즉, React는 return에서 XXX.map(...)을 반복실행할 때, 첫 턴에 데이터가 아직 안들어와도 렌더링이 실행되며 당연히 그 데이터는 undefined로 정의되어 오류가 나는 것이다.
  return(
    <div>
    {state && state.map((tags)=> <span className={tags.color +' '+"products_tag"}>{tags.name}</span>)}
    </div>
  );
}