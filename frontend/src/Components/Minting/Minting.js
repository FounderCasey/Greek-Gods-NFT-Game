import React from "react";
import "./Minting.css";

function Minting(props) {

  return (
    <div className="minting-container">
      <img src={props.uri} alt={props.name} />
      <h2>Hang tight, we're awaking {props.name}...</h2>
    </div>
  );
}

export default Minting;