import React from "react";
import "../styles/address.css";

const SenderAddress = ({ address1, address2, address3 }) => {
  return (
    <div id="sender">
        <h2>Sold By:</h2>
        <h3>{address1}</h3>
        <h3>{address2}</h3>
        <h3>{address3}</h3>
    </div>
  );
};

export default SenderAddress;
