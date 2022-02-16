import React from "react";

export default function ItemsRow({ data, itemIndex, oldItems = [], setForm, form }) {

  /*
[{
    id: 1,
    itemDescription: "",
    itemDetails: "",
    itemRate: 0,
    itemQty: 1,
    itemAmount: 0,
    isTax: false,
  }]
  */
 console.log('olditems', oldItems);

  const itemsToUpdate = oldItems;

  const handleItemDescription = (e, itemIndex) => {
    
    // let objIndex = itemsToUpdate.findIndex((obj) => obj.id == data.id);
    console.log("Onchange index", itemIndex);
    // itemsToUpdate[objIndex].itemDescription = e.target.value;
    itemsToUpdate[itemIndex].itemDescription = e.target.value;

    setForm({ ...form, items: itemsToUpdate });
  };


  const handleItemDetails = (e, itemIndex) => {
    // let objIndex = itemsToUpdate.findIndex((obj) => obj.id == data.id);

    // itemsToUpdate[objIndex].itemDetails = e.target.value;
    itemsToUpdate[itemIndex].itemDetails = e.target.value;

    setForm({ ...form,items: itemsToUpdate });
  };

  const handleItemRate = (e, itemIndex) => {
    // let objIndex = itemsToUpdate.findIndex((obj) => obj.id == data.id);

    // itemsToUpdate[objIndex].itemRate = e.target.value;
    itemsToUpdate[itemIndex].itemRate = e.target.value;

    setForm({ ...form,items: itemsToUpdate });
  };  

  const handleItemQty = (e, itemIndex) => {
    // let objIndex = itemsToUpdate.findIndex((obj) => obj.id == data.id);
    if(e.target.value==''){
      alert()
      return false;
    }
    // itemsToUpdate[objIndex].itemQty = e.target.value;
    itemsToUpdate[itemIndex].itemQty = e.target.value;
    itemsToUpdate[itemIndex].itemAmount = data.itemRate * parseInt(e.target.value);

    setForm({ ...form,items: itemsToUpdate });
  };

  const handleItemTax = (e, itemIndex) => {
    // let objIndex = itemsToUpdate.findIndex((obj) => obj.id == data.id);

    itemsToUpdate[itemIndex].itemTax = !data.itemTax;

    setForm({ ...form, items: itemsToUpdate });
  };

  const handleRemove = (itemIndex) =>{
    // console.log("the index to be deleted", itemIndex);
    /*
    const oldItems = [
      0:{"name":"ope"},
      1:{"name":"tola"}
      2:{"name":"Jide"}
    ] 

    const newItems= [
       0:{"name":"ope"},
        1:{"name":"tola"}
    ]
    */

    let  newItems = oldItems.filter((obj, index)=> {
        return (itemIndex !== index)
    })
  //  let  newItems = oldItems.filter(function(obj) {
  //       return obj.id !== data.id
  //   })
    setForm({...form,items: newItems})
  }

  return (
    <tr>
      <td className="delete-item-row">
        <ul className="table-controls">
          <li>
            <a
              href="javascript:void(0);"
              className="delete-item"
              data-toggle="tooltip"
              data-placement="top"
              title
              data-original-title="Delete"
              onClick={()=>handleRemove(itemIndex)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x-circle"
              >
                <circle cx={12} cy={12} r={10} />
                <line x1={15} y1={9} x2={9} y2={15} />
                <line x1={9} y1={9} x2={15} y2={15} />
              </svg>
            </a>
          </li>
        </ul>
      </td>
      <td className="description">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Item Description"
          onChange={(e)=>handleItemDescription(e, itemIndex)}
          value={data.itemDescription}
        />{" "}
        <textarea
          className="form-control"
          placeholder="Additional Details"
          defaultValue={""}
          onChange={(e)=>handleItemDetails(e, itemIndex)}
          value={data.itemDetails}
        />
      </td>
      <td className="rate">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Price"
          onChange={(e)=>handleItemRate(e, itemIndex)}
          value={data.itemRate}
        />
      </td>
      <td className="text-right qty">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Quantity"
          onChange={(e)=>handleItemQty(e, itemIndex)}
          value={data.itemQty}
          min={1}
        />
      </td>
      <td className="text-right amount">
        <span className="editable-amount">
          <span className="currency">$</span>
          <span className="amount">{itemsToUpdate[itemIndex].itemRate  * itemsToUpdate[itemIndex].itemQty}.00</span>
          {/* <span className="amount">{data.itemAmount}.00</span> */}
        </span>
      </td>
      <td className="text-center tax">
        <div className="n-chk">
          <label
            className="new-control new-checkbox new-checkbox-text checkbox-primary"
            style={{ height: 18, margin: "0 auto" }}
          >
            <input type="checkbox" checked={data.itemTax} onChange={handleItemTax} className="new-control-input" />
            <span className="new-control-indicator" />
            <span className="new-chk-content">Tax</span>
          </label>
        </div>
      </td>
    </tr>
  );
}
