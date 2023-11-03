
export default function OliveProducts(props){
  return(
  <div className="product_wrap">
    <img className="product_img" src={props.url} alt="상품사진" />
    <p className="product_title">{props.title}</p>
    <p className="product_price">{props.price}</p>
    
  </div>
  );
}