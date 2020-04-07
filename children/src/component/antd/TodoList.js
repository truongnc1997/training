import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

function TodoList1() {
  const [hasError, setError] = useState(false);
  const [todoList, getValue] = useState([{ id: "1", name: "hihi" }]);
  // const [todoList, getValue] = useState([]);
  // async function fetchData() {
  //   const res = await fetch("https://uh48h.sse.codesandbox.io/products/");
  //   res
  //     .json()
  //     .then((res) => getValue(res))
  //     .catch((err) => setError(err));
  // }
  // useEffect(() => {
  //   fetchData();
  // });
  function handleClick(todo) {
    console.log(todo);

    const index = todoList.findIndex((x) => x.id == todo.id);
    if (index < 0) return;
    const newList = [...todoList];
    newList.splice(index, 1);
    getValue(newList);
  }
  return (
    <div>
      hihi hhi
      {/* <TodoList todos={todoList} onTodoClick={handleClick} /> */}
      <TodoList todos={todoList} />
    </div>
  );
}

export default TodoList1;
