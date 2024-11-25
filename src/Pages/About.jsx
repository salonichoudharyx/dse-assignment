import React from "react";
function Category() {
  return (
    <div
      style={{
        width: "100%",
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      
      <div
        style={{
          width: "45%",
          height: "auto",
          position: "absolute",
          left: "26%",
          top: "50%",
          transform: "translateY(-50%)",
          backdropFilter: "blur(2px)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "10px 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p
          style={{
            fontFamily: "cursive",
            fontSize: "1.2rem",
            color: "green",
            marginBottom: "20px",
            fontFamily: "lato",
            letterSpacing: "1px",
          }}
        >
          Welcome to Organic Oasis, your one-stop destination for farm-fresh,
          locally sourced food that brings an authentic taste right to your
          table. At Organic Oasis, we pride ourselves on delivering the highest
          quality products directly from local farms to you. Our commitment to
          freshness and quality means you get to enjoy the rich, vibrant flavors
          of just-harvested cereals, pulses, fruits, vegetables, frozen foods,
          and dairy products.
          <br />
          But our mission goes beyond providing premium food; we're dedicated to
          supporting local farmers and small businesses. By choosing Organic
          Oasis, you're not just making a healthier choice for yourself, but
          also empowering local farmers and helping to strengthen our community.
          Join us in celebrating the true essence of farm-to-table living, where
          every bite you take supports a sustainable, thriving local economy.
          Experience the Organic Oasis difference today – because fresh tastes
          better.
        </p>
      </div>
    </div>
  );
}

export default Category;
