import React from "react";
import "../styles/address.css";

const ShippingAddress = ({ address1, address2, address3, utcode, supplierplace, deliveryplace }) => {
  return (
    <>
      <div id="shipping-address">
        <h2>Billing Address :</h2>
        <h3>{address1}</h3>
        <h3>{address2}</h3>
        <h3>{address3}</h3>
        <div>
          <span>
            <h2>State/UT Code :</h2>
            <h3>{utcode}</h3>
          </span>
          <span>
            <h2>Place of Supply :</h2>
            <h3>{supplierplace}</h3>
          </span>
          <span>
            <h2>Place of Delivery :</h2>
            <h3>{deliveryplace}</h3>
          </span>
        </div>
      </div>
    </>
  );
};

export default ShippingAddress;
