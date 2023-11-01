import Avatar from "./Avatar";

export default function Profile({image,name,title,isNew}) {// props 일반적으로 매개변수라고 부르는 것을 리액트에서는 properties라고 한다 (속성값)
  return (
    <div className="profile">
      <Avatar
      image={image}
      isNew={isNew}
      />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
// isNew && '' : isNew가 true이면 ''가 출력 