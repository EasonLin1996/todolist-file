import React from 'react';

function CreateTodoBtn(props) {
  return (
    <button type='button' onClick={props.addNewTodo}>Add</button>
  );
}

export default CreateTodoBtn;
