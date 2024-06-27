

export default function TableData(){
    const column = [
        {
          title: "SI.No",
          dataIndex: "id",
        },
        {
          title: "Description",
          dataIndex: "description",
        },
        {
          title: "Unit Price",
          dataIndex: "unit_price",
        },
        {
          title: "Qty",
          dataIndex: "qty",
        },
        {
          title: "Net Amount",
          dataIndex: "net_amount",
        },
        {
          title: "Tax Rate",
          dataIndex: "tax_rate",
        },
        {
          title: "Tax Type",
          dataIndex: "tax_type",
        },
        {
          title: "Tax Amount",
          dataIndex: "tax_amount",
        },
        {
          title: "Total Amount",
          dataIndex: "total_amount",
        },
      ];

      const items = [
        {
          label: "Place of Supply",
          key: "1",
          value: "Place of Supply",
        },
        {
          label: "Place of Delivery",
          key: "2",
          value: "Place of Delivery",
        },
      ];

      return {column, items} ;

}