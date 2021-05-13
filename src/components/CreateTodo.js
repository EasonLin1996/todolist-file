import React, { useState } from 'react';
import CreateTodoBtn from './CreateTodoBtn';
import TodoInput from './TodoInput';
import {CreateBox} from '../styled/styled';

const CreateTodo = (props) => {

  const [inputVal,setInputVal] = useState('');

  const updateVal = (e) =>{
    setInputVal(e.target.value);
  }

  const addNewTodo = () => {
    if (inputVal){
      props.addNewTodo(inputVal);
      setInputVal('');
    }
  }
  const handleEnterKey = (e)=>{
    if(e.nativeEvent.keyCode === 13){
      addNewTodo();
    }
  }
  return (
    <CreateBox>
      <TodoInput handleEnterKey={handleEnterKey} updateVal={updateVal} inputVal={inputVal}/>
      <CreateTodoBtn addNewTodo={addNewTodo}/>
    </CreateBox> 
  );
}

export default CreateTodo;
