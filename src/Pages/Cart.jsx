import React, { useContext, useState, useEffect } from "react";
import Cartitem from "./Cartitem";
import { dataContext } from "../App";
import { Link } from "react-router-dom";
import { PiSmileySad } from "react-icons/pi";

function Cart() {
  let { data, setData } = useContext(dataContext);
  let [count, setCount] = useState(0);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    setCount(0);
    setTotal(0);
    data.forEach((elem) => {
      setCount((prevCount) => prevCount + elem.quantity);
      setTotal((prevTotal) => prevTotal + elem.price * elem.quantity);
    });
  }, [data]);

  return (
    <div>
      <center>
        <h1>Cart</h1>
      </center>
      <br />
      <br />
      <br />
      {count === 0 ? (
        <div>
          <center>
            <h1>Empty </h1>
            <PiSmileySad style={{ fontSize: "2.8rem" }} />
          </center>
        </div>
      ) : (
        <div className="cart">
          {data.map((item) => {
            if (item.quantity > 0) {
              return (
                <Cartitem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              );
            }
          })}
        </div>
      )}
      {total > 0 && (
        <button className="cart-checkout">
          <Link style={{ textDecoration: "none" }} to="/checkout">
            Checkout
          </Link>
        </button>
      )}
      <div className="cart-total"> Total:{total}</div>
    </div>
  );
}

export default Cart;
