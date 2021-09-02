import React, { useEffect, useCallback, useRef } from "react";
import { TodoType, useTodos } from "../../providers/TodoProvider";

type TodoProps = {
  todo: TodoType;
}

export const Todo: React.FC<TodoProps> = ({ todo }) => { 
  const ref = useRef({} as HTMLDivElement)
  const {
    removeTodo,
    completeTodo
  } = useTodos()

  const handleDeleteTodo = () => {
    ref.current.classList.add('fall');
  }

  useEffect(() => {
    ref.current.addEventListener("transitionend", (e) => {
      removeTodo(todo.id)
    })
  }, [removeTodo, todo.id])

  return (
    <div className="todo" ref={ref}>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {todo.value}
      </li>
      <button className="complete-btn" onClick={() => completeTodo(todo.id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={handleDeleteTodo}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  ) 
}