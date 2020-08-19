import React from "react";

export const TodoItem = ({ item, markCompleted, removeItem }) => {
  return (
    <div
      style={{ textDecoration: item.completed ? "line-through" : "none" }}
      onClick={() => markCompleted(item.id)}
      onContextMenu={removeItem}
      item-id={item.id}
    >
      {item.text}
    </div>
  );
};
