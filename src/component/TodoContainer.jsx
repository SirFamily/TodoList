// TodoContainer.js

import TodoItem from "./TodoItem"

function TodoContainer(props) {
  const { todos, hdlDel, hdlEdit } = props;

  return (
    <div className="divide-y divide-gray-200">
      {todos.map((el) => (
        <TodoItem key={el.id} job={el} hdlDel={hdlDel} hdlEdit={hdlEdit} />
      ))}
    </div>
  );
}

export default TodoContainer;
