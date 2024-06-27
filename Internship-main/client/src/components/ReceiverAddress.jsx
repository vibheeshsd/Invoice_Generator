import React from 'react'
import '../styles/address.css'
const ReceiverAddress = ({ address1, address2, address3 }) => {
  return (
    <div id="receiver">
        <h2>Billing Address :</h2>
        <h3>{address1}</h3>
        <h3>{address2}</h3>
        <h3>{address3}</h3>
    </div>
  )
}

export default ReceiverAddress