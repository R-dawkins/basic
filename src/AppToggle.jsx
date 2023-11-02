import React from 'react';
import './App.css';
import Product from './components/Product'

export default function App() {
  const [showProduct,setShow] = React.useState(false)
  const handleClick = (e)=> setShow(!showProduct);
  // setShow((showProduct)=>!showProduct)     show(현재값) => !show(반대값으로 바꾸기)
  // 
  return(

    <>
      <button onClick={handleClick}>Toggle</button>
      {showProduct && <Product />}
    </>

  );
}