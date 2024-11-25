import React, { useContext } from "react";
import "./Product.css";
import Item from "../Items/Item";
import { dataContext } from "../../App";

function Product() {

  let {data,setdata} = useContext(dataContext)

  let updatefn = (id) =>{
    setdata(data.map((item) => {
      if(item.id === id){
        return {...item,quantity:item.quantity+1}
        }
        return item
        }))

  }
  let decrementorfn = (id) =>{setdata(data.map((item) => {
      if(item.id === id){
        return {...item,quantity:item.quantity-1}
        }
        return item
        }))}


  return (
    <>
      <div className="product">
        <h1 style={{color:"black"}} id="cereal">Millet</h1>
        <div className="product-item">
        {
          data.map((item)=>{
            if(item.label === "millet"){
              return (
                <>
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  oldprice={item.oldprice}
                  quantity={item.quantity}
                  updator={updatefn}
                  decrementor={decrementorfn}
                  />
                  </>
              )
            }
          })
        }
        </div>
      </div>
      <div className="product">
        <h1 style={{color:"black"}} id="fruits">Fruits</h1>
        <div className="product-item">
        {
          data.map((item)=>{
            if(item.label === "fruits"){
              return (
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  oldprice={item.oldprice}
                  quantity={item.quantity}
                  updator={updatefn}
                  decrementor={decrementorfn}
                />
              )
            }
          })
        }
        </div>
      </div>
      <div className="product">
        <h1 style={{color:"black"}} id="vegies">Veggies</h1>
        <div className="product-item">
        {
          data.map((item)=>{
            if(item.label === "vegies"){
              return (
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  oldprice={item.oldprice}
                  quantity={item.quantity}
                  updator={updatefn}
                  decrementor={decrementorfn}
                />
              )
            }
          })
        }
        </div>
      </div>
      <div className="product">
        <h1 style={{color:"black"}} id="frozen">Frozen</h1>
        <div className="product-item">
        {
          data.map((item)=>{
            if(item.label === "frozen"){
              return (
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  oldprice={item.oldprice}
                  quantity={item.quantity}
                  updator={updatefn}
                  decrementor={decrementorfn}
                  
                />
              )
            }
          })
        }
        </div>
      </div>
      <div className="product">
        <h1 style={{color:"black"}} id="dairy">Dairy</h1>
        <div className="product-item">
        {
          data.map((item)=>{
            if(item.label === "dairy"){
              return (
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  oldprice={item.oldprice}
                  quantity={item.quantity}
                  updator={updatefn}
                  decrementor={decrementorfn}
                />
              )
            }
          })
        }
        </div>
      </div>
      <div className="product">
        <h1 style={{color:"black"}} id="pulses">Pulses</h1>
        <div className="product-item">
        {
          data.map((item)=>{
            if(item.label === "pulses"){
              return (
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  oldprice={item.oldprice}
                  updator={updatefn}
                  quantity={item.quantity}
                   decrementor={decrementorfn}
                />
              )
            }
          })
        }
        </div>
      </div>
    </>
  );
}

export default Product;
