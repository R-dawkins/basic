import {Children} from 'react' //Children --> children
import '../Header.css';
// Children이 메모리에 올라가 있는 변수 children (소문자로 쓸 때)
// Children은 react에서 제공하는 컴포넌트
// Children import가 필요한가??

// {children} >> 상위에서 넘어온 컴포넌트들을 자동으로 배치
// header에서 쓰면 HeaderNavbar 
// 직관적인 컴포넌트 작명 필요
export default function Navbar({children}){
  return(
    <header>
      {children}
    </header>
  );
}