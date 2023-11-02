//show product!!!
import { useEffect, useState } from "react";
//useEffect() 최초에 한번만 fetch 실행
//useEffect(effectCallback, deps:DependencyList)
export default function Product(){
  const [products,setProducts] = useState([]);
  const [checked,setChecked] = useState(false) //체크박스 이벤트상태 저장
  const handleChange = (event) => setChecked(!checked) // checked의 상태를 반대로 false면 true true면 false
    useEffect(()=>{
    fetch(`data/${checked ? 'sale_' : ''}products.json`) //fetch가 실행되는 경로가 public 폴더로 추정된다
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
    });
    return(()=>{

    })

  },[checked])//체크값에 따라서 실행이 결정됨, 의존성 배열 이 배열에 포함된 값이 변경되면 useEffect() 함수가 다시 실행됩니다.
  
  // json 파일에서 데이터를 가져올 때 배열형태로 가져온다
  //Toggle이벤트가 발생할때마다 데이터를 담아둘 useState가 필요
  //react에서 html 태그를 동적으로 반복하여 생성하면 고유의 key prop이 필요하다.
  return(
    <>
    <h1>Show Product!!</h1>
    <label htmlFor="checkbox">Show only Sale</label>
    <input type="checkbox" id="checkbox" onChange={handleChange}/>
    <ul>
      {products.map((item)=>
        <li key={item.id}>
          <h3>name : {item.name}</h3>
          <h3>price : {item.price}</h3>
          <h3>id : {item.id}</h3>
        </li>
      )}
    </ul>
    </>
  );
}