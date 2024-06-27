import React from "react";
import { Button } from "antd";
const Print = ({ handleSave }) => {
  return (
    <>
      <div id="print-btn">
        <Button type="primary" onClick={handleSave}>
          Save
        </Button>
      </div>

    </>
  );
};

export default Print;
