import React from 'react';

function TodoInput(props) {
  return (
    <input type='text' onKeyPress={props.handleEnterKey} placeholder='Add your task here...' value={props.inputVal} onChange={props.updateVal}/>
  );
}

export default TodoInput;
