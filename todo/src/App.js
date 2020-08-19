import React, { useReducer, useState } from "react";
import { itemReducer, initialState, ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM, CLEAR_COMPLETED } from "./reducers/Item";

import moment from "moment";

import TodoList from "./components/TodoList";

function App() {
  const [text, setText] = useState("");
  const [list, dispatch] = useReducer(itemReducer, initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_ITEM,
      payload: {
        id: Date.now(),
        completed: false,
        text,
        timeCompleted: null,
        dueDate: moment().add(1, "second").toDate(),
      },
    });
    setText("");
  };

  const markCompleted = (id) => {
    dispatch({ type: TOGGLE_ITEM, payload: id });
  };

  const removeItem = (e, id) => {
    e.preventDefault();
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const clearCompleted = (e) => {
    e.preventDefault();
    dispatch({ type: CLEAR_COMPLETED });
  };

  return (
    <div className="App">
      Click an Item to mark it as completed (or mark a completed item as incomplete) or Right Click an item to remove
      it.
      <form onSubmit={onSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={onSubmit}>Add Item</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </form>
      <TodoList list={list} markCompleted={markCompleted} removeItem={removeItem} />
    </div>
  );
}

export default App;
