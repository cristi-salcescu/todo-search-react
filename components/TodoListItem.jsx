import React from "react";
import PropTypes from 'prop-types';
export default function TodoListItem(props){
  return <li>
    <div>{ props.todo.title}</div>
    <div>{ props.todo.userName }</div>
  </li>;
}

TodoListItem.propTypes = {
  todo: PropTypes.object
};