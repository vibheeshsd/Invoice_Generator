import React, { useEffect, useState } from "react";
import SenderAddress from "./SenderAddress";
import ReceiverAddress from "./ReceiverAddress";
import "../styles/address.css";
import ShippingAddress from "./ShippingAddress";
import "../styles/shippingAddress.css";
import { Button, Modal } from "antd";
import InvoiceTable from "./table/InvoiceTable";

const Address = ({ handleSave, save }) => {
  const [showModal, setShowModal] = useState(false);
  const [senderAddress1, setSenderAddress1] = useState("");
  const [senderAddress2, setSenderAddress2] = useState("");
  const [senderAddress3, setSenderAddress3] = useState("");
  const [receiverAddress1, setReceiverAddress1] = useState("");
  const [receiverAddress2, setReceiverAddress2] = useState("");
  const [receiverAddress3, setReceiverAddress3] = useState("");
  const [pan, setPan] = useState("");
  const [utCode, setUtCode] = useState("");
  const [supplierPlace, setSupplierPlace] = useState("");
  const [deliveryPlace, setDeliveryPlace] = useState("");
  const [date, setDate] = useState(new Date());
  const [invoiceNo, setInvoiceNo] = useState("");
  const [orderNo, setOrderNo] = useState("");
  const [gstNo, setGstNo] = useState("");

  const handleClick = () => {
    setShowModal(true);
  };
  const handleOk = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  useEffect(() => {
    const InvoiceNo = Math.floor(Math.random() * 1e3).toString();
    const orderNumber = Math.floor(Math.random() * 1e17)
      .toString()
      .padStart(12, "0");
    function randomString(length, chars, e) {
      var result = "";
      for (var i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
    var GSTNo = randomString(15, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    setGstNo(GSTNo);
    setInvoiceNo(InvoiceNo);
    setOrderNo(orderNumber);
  }, []);
  return (
    <>
      {save ? (
        <div>
          <div id="address">
            <SenderAddress
              address1={senderAddress1}
              address2={senderAddress2}
              address3={senderAddress3}
            />
            <ReceiverAddress
              address1={receiverAddress1}
              address2={receiverAddress2}
              address3={receiverAddress3}
            />
          </div>
          <div id="info">
            <div id="content-left">
              <span>
                <h2>PAN No:</h2>
                <h3>{pan}</h3>
              </span>
              <div>
                <span>
                  <h2>GST Registration No :</h2>
                  <h3>{gstNo}</h3>
                </span>
              </div>
            </div>
            <div id="content-right">
              <span>
                <h2>State/UT Code :</h2>
                <h3>{utCode}</h3>
              </span>
            </div>
          </div>
          <div id="shipping-container">
            <ShippingAddress
              address1={receiverAddress1}
              address2={receiverAddress2}
              address3={receiverAddress3}
              utcode={utCode}
              supplierplace={supplierPlace}
              deliveryplace={deliveryPlace}
            />
          </div>
          <div id="base-container">
            <div id="left-span">
              <span>
                <h2>Order Number :</h2>
                <h3>{orderNo}</h3>
              </span>
              <span>
                <h2>Order Date :</h2>
                <h3>{date.toDateString()}</h3>
              </span>
            </div>
            <div id="right-span">
              <span>
                <h2>Invoice Number :</h2>
                <h3>IN-{invoiceNo}</h3>
              </span>
              <span>
                <h2>Invoice Details :</h2>
                <h3>KA-310565025-1920</h3>
              </span>
              <span>
                <h2>Invoice Date :</h2>
                <h3>{date.toDateString()}</h3>
              </span>
            </div>
          </div>
          <div>
            <Modal
              title="Invoice Data"
              open={showModal}
              onOk={handleOk}
              onCancel={() => setShowModal(false)}
              width="50%"
            >
              <div>
                <form id="form">
                  <div id="addr">
                    <div id="modalSender">
                      Enter Sender Address{" "}
                      <input
                        type="text"
                        placeholder="Address Line 1"
                        value={senderAddress1}
                        onChange={(e) => setSenderAddress1(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Address Line 2"
                        value={senderAddress2}
                        onChange={(e) => setSenderAddress2(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Address Line 3"
                        value={senderAddress3}
                        onChange={(e) => setSenderAddress3(e.target.value)}
                        required
                      />
                    </div>
                    <div id="modalReceiver">
                      Enter Receiver Address{" "}
                      <input
                        type="text"
                        placeholder="Address Line 1"
                        value={receiverAddress1}
                        onChange={(e) => setReceiverAddress1(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Address Line 2"
                        value={receiverAddress2}
                        onChange={(e) => setReceiverAddress2(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Address Line 3"
                        value={receiverAddress3}
                        onChange={(e) => setReceiverAddress3(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div id="code">
                    <div id="left-bottom">
                      Enter Pan No{" "}
                      <input
                        type="text"
                        placeholder="Pan Number"
                        value={pan}
                        onChange={(e) => {
                          setPan(e.target.value);
                        }}
                      />
                      Enter State/UT Code{" "}
                      <input
                        type="text"
                        placeholder="State/UT Code"
                        value={utCode}
                        onChange={(e) => setUtCode(e.target.value)}
                        required
                      />
                    </div>
                    <div id="right-bottom">
                      Enter Place of Supply{" "}
                      <input
                        type="text"
                        placeholder="Place Of Supply"
                        value={supplierPlace}
                        onChange={(e) => setSupplierPlace(e.target.value)}
                        required
                      />
                      Enter Place of Delivery{" "}
                      <input
                        type="text"
                        placeholder="Place Of Delivery"
                        value={deliveryPlace}
                        onChange={(e) => setDeliveryPlace(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
            </Modal>
          </div>
        </div>
      ) : (
        <div>
          <div id="address">
            <SenderAddress
              address1={senderAddress1}
              address2={senderAddress2}
              address3={senderAddress3}
            />
            <ReceiverAddress
              address1={receiverAddress1}
              address2={receiverAddress2}
              address3={receiverAddress3}
            />
          </div>
          <div id="info">
            <div id="content-left">
              <span>
                <h2>PAN No:</h2>
                <h3>{pan}</h3>
              </span>
              <div>
                <span>
                  <h2>GST Registration No :</h2>
                  <h3>{gstNo}</h3>
                </span>
              </div>
            </div>
            <div id="content-right">
              <span>
                <h2>State/UT Code :</h2>
                <h3>{utCode}</h3>
              </span>
            </div>
          </div>
          <div id="shipping-container">
            <ShippingAddress
              address1={receiverAddress1}
              address2={receiverAddress2}
              address3={receiverAddress3}
              utcode={utCode}
              supplierplace={supplierPlace}
              deliveryplace={deliveryPlace}
            />
          </div>
          <div id="base-container">
            <div id="left-span">
              <span>
                <h2>Order Number :</h2>
                <h3>{orderNo}</h3>
              </span>
              <span>
                <h2>Order Date :</h2>
                <h3>{date.toDateString()}</h3>
              </span>
            </div>
            <div id="right-span">
              <span>
                <h2>Invoice Number :</h2>
                <h3>IN-{invoiceNo}</h3>
              </span>
              <span>
                <h2>Invoice Details :</h2>
                <h3>KA-310565025-1920</h3>
              </span>
              <span>
                <h2>Invoice Date :</h2>
                <h3>{date.toDateString()}</h3>
              </span>
            </div>
          </div>
          <div id="edit-btn">
            <Button type="primary" block onClick={handleClick}>
              Edit Bill Data
            </Button>
          </div>
          <div>
            <Modal
              title="Invoice Data"
              open={showModal}
              onOk={handleOk}
              onCancel={() => setShowModal(false)}
              width="50%"
            >
              <div>
                <form id="form">
                  <div id="addr">
                    <div id="modalSender">
                      Enter Sender Address{" "}
                      <input
                        type="text"
                        placeholder="Address Line 1"
                        value={senderAddress1}
                        onChange={(e) => setSenderAddress1(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Address Line 2"
                        value={senderAddress2}
                        onChange={(e) => setSenderAddress2(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Address Line 3"
                        value={senderAddress3}
                        onChange={(e) => setSenderAddress3(e.target.value)}
                        required
                      />
                    </div>
                    <div id="modalReceiver">
                      Enter Receiver Address{" "}
                      <input
                        type="text"
                        placeholder="Address Line 1"
                        value={receiverAddress1}
                        onChange={(e) => setReceiverAddress1(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Address Line 2"
                        value={receiverAddress2}
                        onChange={(e) => setReceiverAddress2(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Address Line 3"
                        value={receiverAddress3}
                        onChange={(e) => setReceiverAddress3(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div id="code">
                    <div id="left-bottom">
                      Enter Pan No{" "}
                      <input
                        type="text"
                        placeholder="Pan Number"
                        value={pan}
                        onChange={(e) => {
                          setPan(e.target.value);
                        }}
                      />
                      Enter State/UT Code{" "}
                      <input
                        type="text"
                        placeholder="State/UT Code"
                        value={utCode}
                        onChange={(e) => setUtCode(e.target.value)}
                        required
                      />
                    </div>
                    <div id="right-bottom">
                      Enter Place of Supply{" "}
                      <input
                        type="text"
                        placeholder="Place Of Supply"
                        value={supplierPlace}
                        onChange={(e) => setSupplierPlace(e.target.value)}
                        required
                      />
                      Enter Place of Delivery{" "}
                      <input
                        type="text"
                        placeholder="Place Of Delivery"
                        value={deliveryPlace}
                        onChange={(e) => setDeliveryPlace(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
            </Modal>
          </div>
        </div>
      )}
    </>
  );
};

export default Address;
