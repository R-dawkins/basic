export default function Avatar({image,isNew}){
  return(
    <>
      <img className="img" src={image}/>
      { isNew && <span className="new">New</span>}
    </>
  );
}