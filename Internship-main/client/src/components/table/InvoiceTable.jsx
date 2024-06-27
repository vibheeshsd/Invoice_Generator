import React, { Fragment, useState } from "react";
import "../../styles/table.css";
import "../../styles/tableData.css";
import { Button, Modal, Table } from "antd";
import columnData from "../table/tableData";
import Print from "../Print";

const InvoiceTable = ({ supplierplace, deliveryplace, handleSave, save }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [description, setDescription] = useState();
  const [sumTotalAmount, setSumTotalAmount] = useState(12345);
  const [sumTax, setSumTax] = useState(12345);
  const data = columnData();
  const [dataSource, setDataSource] = useState([{}]);


  const showModal = () => {
    setIsModalOpen(true);
  };
  const discount = 10;
  const net_amount = price * quantity - discount;
  const taxAmount = (net_amount * 18) / 100;
  const totalAmount = net_amount + taxAmount;
  const taxType = supplierplace === deliveryplace ? "CGST" : "IGST";
  const newData = {
    id: 1,
    description: description,
    unit_price: price,
    qty: quantity,
    net_amount: net_amount,
    tax_type: taxType,
    tax_rate: "18%",
    tax_amount: taxAmount,
    total_amount: totalAmount,
  };
  const handleOk = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setDataSource((prev) => {
      return [...prev, newData];
    });
    // setSumTotalAmount((prev) => {
    //   let sum = 0;
    //   for(var i=0 ; i< prev.length; i++){
    //     sum += prev[i].totalAmount
    //   }
    //   return sum
    // })
    setPrice("");
    setQuantity("");
    setDescription("");
  };


  return (
    <Fragment>
      {save ? (
        <div>
          <div>
            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={() => setIsModalOpen(false)}
            >
              <div>
                <form id="form">
                  Enter Unit Price{" "}
                  <input
                    type="text"
                    placeholder="Unit Price"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    required
                  />
                  Enter Quantity{" "}
                  <input
                    type="text"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                    required
                  />
                  Enter Discount{" "}
                  <input
                    type="text"
                    placeholder="Discount"
                    value="10"
                    onChange={(e) => {}}
                    required
                  />
                  Description{" "}
                  <textarea
                    rows="4"
                    cols="40"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    required
                  />
                </form>
              </div>
            </Modal>
          </div>
          <div className="table-container">
            <Table columns={data.column} dataSource={dataSource} />
          </div>
          <div id="footer">
            <div id="table-bottom">
              <div id="heading">
                <h2>Total:</h2>
              </div>
              <div id="total">
                <h3>{sumTax}</h3>
                <h3>{sumTotalAmount}</h3>
              </div>
            </div>
            <div id="signature-table">
              <div id="amount">
                <h2>Amount in Words:</h2>
                <h2>One Thousand One Hundred And Ninety-five only</h2>
              </div>
            </div>
            <div id="signature">
              <h2>For Varasiddhi Silk Exports</h2>
              <div id="sign-box"></div>
              <h2>Authorized Signature</h2>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div id="filters">
            <div id="btn">
              <Button type="primary" onClick={showModal}>
                Add Data
              </Button>
            </div>
            <div id="print-btn">
              <Print handleSave={handleSave} />
            </div>
          </div>
          <div>
            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={() => setIsModalOpen(false)}
            >
              <div>
                <form id="form">
                  Enter Unit Price{" "}
                  <input
                    type="text"
                    placeholder="Unit Price"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    required
                  />
                  Enter Quantity{" "}
                  <input
                    type="text"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                    required
                  />
                  Enter Discount{" "}
                  <input
                    type="text"
                    placeholder="Discount"
                    value="10"
                    onChange={(e) => {}}
                    required
                  />
                  Description{" "}
                  <textarea
                    rows="4"
                    cols="40"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    required
                  />
                </form>
              </div>
            </Modal>
          </div>
          <div className="table-container">
            <Table columns={data.column} dataSource={dataSource} />
          </div>
          <div id="footer">
            <div id="table-bottom">
              <div id="heading">
                <h2>Total:</h2>
              </div>
              <div id="total">
                <h3>{sumTax}</h3>
                <h3>{sumTotalAmount}</h3>
              </div>
            </div>
            <div id="signature-table">
              <div id="amount">
                <h2>Amount in Words:</h2>
                <h2>One Thousand One Hundred And Ninety-five only</h2>
              </div>
            </div>
            <div id="signature">
              <h2>For Varasiddhi Silk Exports</h2>
              <div id="sign-box"></div>
              <h2>Authorized Signature</h2>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default InvoiceTable;
