import './App.css'; // js가 기본이기때문에 js에 css import 필요
import Profile from '../components/Profile'
import Avatar from '../components/Avatar';
import Counter from '../components/Counter'
import React from 'react';
// jsx javascript xml


function AppCounter() {
  const [totalCount,setTotalCount] = React.useState(0)
  const handleClick = (event) => setTotalCount((prev)=>prev+1);
  //(prev)는 자식이 실행한 결과 리턴 여기서는 onclick이벤트를 실행할 때마다 그 횟수가 리턴됨

  return (
    <>
      <div className='container'>
        <div className='banner'>Total : {totalCount}</div>
        <Counter onClick={handleClick} totalCount={totalCount}/>
        <Counter onClick={handleClick} totalCount={totalCount}/>
      </div>
    </>
  );
}

export default AppCounter;
