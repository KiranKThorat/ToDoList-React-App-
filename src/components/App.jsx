import React, { useState } from "react";
import ToDoItems from "./ToDoItems";



function App() {
  const [inputText, setInputText] = useState("");
  const [newItems, setItems] = useState([]);

  function handleChange(event) {
    const newvalue = event.target.value;
    setInputText(newvalue);
    console.log(newvalue);
  }

  function ShowItems() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button>
          <span onClick={ShowItems}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newItems.map((todoItems, index) => (
            <ToDoItems
              text={todoItems}
              onChecked={deleteItem}
              key={index}
              id={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
