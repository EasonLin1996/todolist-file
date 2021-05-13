import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <ul>
        {props.filterTodos.map(item=>
          <Todo key={item.id} todo={item} handleChecked={props.handleChecked} handleDelete={props.handleDelete}/>   
        )}
    </ul>
  );
}

export default TodoList;
