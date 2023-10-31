import './App.css'; // js가 기본이기때문에 js에 css import 필요
import Profile from './components/Profile'
// jsx javascript xml

function App() { // return시 반드시 하나의 태그만 출력한다 >> JSX 문법 >> 여러개의 태그를 출력하고 싶으면 상위태그로 묶어주어야한다
  //빈 <> angle bracket을 사용하면 단순 여러개의 태그를 리턴하는 용도만으로 사용가능하다 (기능만 사용할 때)
  // style을 적용하고싶다면 실제 태그를 사용하면 된다. div 등
  // 화살표함수를 사용할 때 arr.map(()=>{ }) brace 중괄호가 들어가면 return을 사용해야 반환된다.
  // brace가 들어가지않으면 값을 바로 반환한다.
  // <Profile></Profile>, <Profile/> 둘 모두 가능
  return (
    <>
      <Profile/>
    </>
  );
}
/* 
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 */
export default App;
