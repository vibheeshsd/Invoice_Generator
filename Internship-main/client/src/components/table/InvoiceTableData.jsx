// import React, { useState } from "react";
// import "../../styles/tableData.css";
// import { Button, Modal } from "antd";
// const InvoiceTableData = ({ dataSource, setDataSource }) => {
//   const [price, setPrice] = useState();
//   const [quantity, setQuantity] = useState();
//   const [discount, setDiscount] = useState();
//   const [description, setDescription] = useState();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newData = {
//       id: 1,
//       description: { description },
//       unit_price: { price },
//       qty: { quantity },
//       net_amount: "0",
//       tax_rate: "0",
//       tax_type: "0",
//       tax_amount: "0",
//       total_amount: "0",
//     };

//     setDataSource((prev) => {
//       return [...prev, newData];
//     });
//     console.log("data", dataSource);
//   };
//   return (
//     <div>
//       <div>
//         <Button type="primary" onClick={() => setIsModalOpen(true)}>
//           Add Data
//         </Button>
//       </div>
//       <div>
//         <Modal
//           title="Basic Modal"
//           open={isModalOpen}
//           onOk={() => setIsModalOpen(false)}
//           onCancel={() => setIsModalOpen(false)}
//         >
//           <div>
//             <form id="form" onSubmit={handleSubmit}>
//               Enter Unit Price{" "}
//               <input
//                 type="text"
//                 placeholder="Unit Price"
//                 value={price}
//                 onChange={(e) => {
//                   setPrice((prev) => {
//                     return {...prev, e.target.value}
//                   })
//                 }}
//               />
//               Enter Quantity{" "}
//               <input
//                 type="text"
//                 placeholder="Quantity"
//                 value={quantity}
//                 onChange={(e) => setQuantity(e.target.value)}
//               />
//               Enter Discount{" "}
//               <input
//                 type="text"
//                 placeholder="Discount"
//                 value={discount}
//                 onChange={(e) => setDiscount(e.target.value)}
//               />
//               Description{" "}
//               <textarea
//                 rows="4"
//                 cols="40"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </form>
//           </div>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default InvoiceTableData;
