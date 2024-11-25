import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Spinner() {
  const [text, setText] = useState("");
  const [showSpinner, setShowSpinner] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
      setShowMessage(true);
      setText("Thank you for shopping");
    }, 3000);
  }, []);

  return (
    <div>
      {showSpinner ? (
        <img
          src="./spinner.svg"
          style={{
            position: "absolute",
            height: "250px",
            left: "50%",
            top: "30%",
            transform: "translate(-50%)",
          }}
        />
      ) : (
        showMessage && (
          <div
            style={{
              position: "absolute",
              height: "250px",
              left: "50%",
              top: "30%",
              transform: "translate(-50%)",
            }}
          >
            <h3 style={{ color: "black", fontSize: "2.5rem" }}>{text}</h3>

            <Link style={{ textDecoration: "none" }} to="/">
              <button
                style={{
                  width: "150px",
                  height: "50px",
                  borderRadius: " 15px",
                  fontSize: " 1.0rem",
                  fontWeight: "bold",
                  backgroundColor: " #dadecfe0",
                }}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )
      )}
    </div>
  );
}

export default Spinner;
