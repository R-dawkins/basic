import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Avatar from "./components/Avatar";
import './App.css'
import HeaderImg from "./components/header/HeaderImg";
import HeaderSearch from "./components/header/HeaderSearch";
import Content from "./components/Content";
import OliveProducts from "./components/contents/OliveProducts";
import OliveTags from "./components/contents/OliveTags";
export default function AppWrap () {
  const [list,setList] = useState([]);
  useEffect(()=>{
    fetch('/data/oliveproducts.json')
    .then(res=>res.json())
    .then(data=>setList(data))
  },[])
  return(
    <div className="wrap_container">
      <Navbar>
        <HeaderImg/>
        <HeaderSearch/>
      </Navbar>
      <Content>
        {list.map((list)=>
          <OliveProducts
            url={list.url}
            title={list.title}
            price={list.price}
          /> 
        )}



      </Content>
    </div>
  );
}