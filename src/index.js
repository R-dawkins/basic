import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import AppCounter from './AppCounter.jsx'

// ReactDOM = virtual DOM
// yarn start => react app start => public의 index.html 확인 >> body안의 div id 확인 >> index.js에서 div의 id를 가져와서 
// >> virtual dom에 등록, 보관 >> 채워주는작업 .render >> 채워주려면 컴포넌트 필요 >> 그 컴포넌트가 app.js = App
// rendering App.js
// strictMode 엄격모드 > 문법을 정확하게 체크하는 모드
// Create React App (CRA)
// reportWebVitals를 활용하여 바이탈체크
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppCounter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
