import React from "react";
import { TodoItem } from "./TodoItem";

function TodoList({ list, markCompleted, removeItem }) {
  return list.map((item, i) => (
    <TodoItem key={i} item={item} markCompleted={(id) => markCompleted(id)} removeItem={removeItem} />
  ));
}

export default TodoList;
