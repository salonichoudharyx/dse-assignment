import React from "react";
import "./Item.css";
function Item({
  id,
  name,
  image,
  price,
  quantity,
  oldprice,
  updator,
  decrementor,
}) {
  return (
    <div className="item">
      <img classname="item-image" src={image} />
      <div className="item-name" >{name}</div>
      <div className="item-price">
        <div className="item-new">{price} Rs.</div>
        <div className="item-old">{oldprice} Rs.</div>
      </div>
    
      <div className="btncontainer">
        {quantity === 0 ? (
          <button className="btnitem" onClick={() => updator(id)}>
            Add to Cart
          </button>
        ) : (
          <div className="opscontainer">
            
            <button className="ops" onClick={() => decrementor(id)}>
              -
            </button>
            <span className="quantity-span">{quantity}</span>
            <button className="ops" onClick={() => updator(id)}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Item;
