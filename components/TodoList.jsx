import React from "react";
import PropTypes from 'prop-types';
import TodoListItem from "./TodoListItem.jsx";

export default function TodoList(props) {
  
  function renderTodoItem(todo){
    return <TodoListItem todo={todo} key={todo.id}></TodoListItem>;
  }

  return <div className="todo-list">
      <ul>
        { props.todos.map(renderTodoItem) }
      </ul>
    </div>;
}

TodoList.propTypes = {
  todos: PropTypes.array
};