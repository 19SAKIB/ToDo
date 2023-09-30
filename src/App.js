import React, { useState } from 'react';
import TodoList from './ToDoList';
import './Todo.css';

const App = () => {

  const [inputList, setinputList] = useState();
  const [Items, setItems] = useState([]);

  const inputItems = (e) => {
    e.preventDefault();
    setinputList(e.target.value);
  }

  const addItems = () => {
    setItems((allItems) => {

      return [...allItems, inputList];

    });
    setinputList("");

  };

  const deleteItems = (id) => {
    alert("Do You Want to Delete This Items!")

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;

      });
    });
  };
  return (
    <div className='main-div'>
      <div className='center-div'>
        <h1>To Do App</h1>
        <div>

          <input

            type='text'
            placeholder='Add an Items'
            value={inputList}
            onChange={inputItems} />
          <button onClick={addItems} className='add-button'>
            +

          </button>
        </div>
        <div>


          <ol>
            {Items.map((itemsValu, index) => {
              return <TodoList
                id={index}
                key={index}
                text={itemsValu}
                onSelect={deleteItems}
              />

            }
            )}
          </ol>
        </div>
      </div>

    </div>
  )
}

export default App;