import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";
import { dataContext } from "../App";
import { MdOutlineShoppingBag } from "react-icons/md";
import { logContext } from "../App";

function Navbar() {
  let { data, setData } = useContext(dataContext);
  let [count, setCount] = useState(0);
  let { login, setLogin } = useContext(logContext);
  let [route, setRoute] = useState("/login");

  useEffect(() => {
    setCount(0);
    data.map((elem) => {
      setCount((count) => count + elem.quantity);
    });
  }, [data]);

  useEffect(() => {
    if (login) {
      setRoute("/cart");
    } else {
      setRoute("/login");
    }
  }, [login]);

  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li>
          {" "}
          <Link
            style={{
              textDecoration: "none",
              color: "#F5EFE6",
              fontSize: "1.4rem",
            }}
            to="/about"
          >
            About us
          </Link>
        </li>
      </ul>
      <div className="navbar-logo">
        <Link
          style={{ textDecoration: "none", color: "#F5EFE6", fontSize: "2rem" }}
          to="/"
        >
          Organic Oasis
        </Link>
      </div>

      {login !== false ? (
        <div className="login-ack">hello, {login}!</div>
      ) : (
        <div className="login-ack">hey, login with us</div>
      )}

      <div className="login-cart">
        <div className="shop-cart">
          <Link style={{ textDecoration: "none" }} to="/order">
            <MdOutlineShoppingBag style={{ fontSize: "2.3rem" }} />
          </Link>
        </div>

        <Link style={{ textDecoration: "none" }} to={route}>
          <PiShoppingCartBold style={{ fontSize: "2.3rem" }} />
        </Link>
        <div className="cart-count">{count}</div>
        <Link style={{ textDecoration: "none" }} to="/login">
          <FaRegCircleUser style={{ fontSize: "2.3rem" }} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
