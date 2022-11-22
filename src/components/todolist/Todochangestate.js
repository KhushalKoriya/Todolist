import React from 'react'

const Todochangestate = () => {
    const [checked, setChecked] = useState('');


    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };
    
      // Generate string of checked items
      const checkedItems = checked.length
        ? checked.reduce((total, dataitem) => {
            return total + ", " + dataitem;
          })
        : "";
    
      // Return classes based on whether item is checked
      var isChecked = (dataitem) =>
        checked.includes(dataitem.value) ? "checked-item" : "not-checked-item";
    
  return (
    <div> {(() => {
        switch (props.onChangeFooter='all') {
          case "all":
            return <span>{props.filteredData.map((dataitem, i) => (
              <li key={i}><input value={dataitem.value} type="checkbox" onChange={handleCheck}/> 
                <span className={isChecked(dataitem)}>{dataitem.value}</span></li>
            ))}</span>;
          case "completed":
            return <span>{checkedItems}</span>;
          // case "active":
          default:
            return <span>{props.filteredData.map((dataitem, i) => (
              <li key={i}><input value={dataitem.value} type="checkbox" onChange={handleCheck}/> 
                <span className={isChecked(dataitem)}>{dataitem.value}</span><button type ="button" onClick={() => clickDeleteData(dataitem.id)}>Delete</button>
  {deleted && (
      <Tododelete
      onClose={onClose}
      show={setDeleted}
      onDeleteUserHandler={onDeleteUserHandler}
      deleteData = {deleteData}
      />
    )}</li>
            ))}</span>;
        }
      })()}</div>
  )
}

export default Todochangestate