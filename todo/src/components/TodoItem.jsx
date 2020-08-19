import React from "react";
import moment from "moment";

export const TodoItem = ({ item, markCompleted, removeItem }) => {
  const timePast = moment().diff(item.dueDate);
  return (
    <div onClick={() => markCompleted(item.id)} onContextMenu={(e) => removeItem(e, item.id)}>
      <p
        style={{
          textDecoration: item.completed ? "line-through" : "none",
          color: timePast > 0 && !item.completed ? "red" : "inherit",
        }}
      >
        {item.text}
      </p>
      <p>Due Date: {moment(item.dueDate).calendar()}</p>
      {item.completed && <p>Completed: {moment(item.timeCompleted).format("LLL")}</p>}
    </div>
  );
};
