import { useRef, useState } from "react";
import "./App.css";
import Address from "./components/Address";
import Header from "./components/Header";
import InvoiceTable from "./components/table/InvoiceTable";
import ReactToPrint from "react-to-print";
import { Button } from "antd";

function App() {
  // const handlePrint = () => {
  //   window.print();
  // };
  const [save, setSave] = useState(false);

  const handleSave = () => {
    setSave(true);
  };
  const componentRef = useRef();

  return (
    <div className="App">
      <ReactToPrint
        className="print"
        trigger={() => <Button>Print / Download</Button>}
        content={() => componentRef.current}
      />
      <div ref={componentRef}>
        <div id="header">
          <Header />
        </div>
          <div>
            <Address handleSave={handleSave} save={save} />
          </div>
          <div>
            <InvoiceTable handleSave={handleSave} save={save} />
          </div>
      </div>
    </div>
  );
}

export default App;
