import React, { useEffect, useState } from 'react';

import FilterDone from './components/FilterDone';
import ShowNum from './components/ShowNum';
import CreateTodo from './components/CreateTodo';
import Title from './components/Title';
import TodoList from './components/TodoList';

import {Center,Container,ToolBox} from './styled/styled';
import GlobalStyle from './styled/GlobalStyle';

const App = ()=> {

  const myTodos = [
    {id:1,do:'吃飯',check:false,date:undefined},
    {id:2,do:'打掃',check:false,date:undefined},
    {id:3,do:'睡覺',check:true,date:'2021/05/13 11:26'},
    {id:4,do:'打咚咚',check:false,date:undefined},
    {id:5,do:'看電視',check:false,date:undefined},
    {id:6,do:'完成todolist',check:false,date:undefined},
    {id:7,do:'接小孩',check:false,date:undefined},
    {id:8,do:'聯絡客戶',check:false,date:undefined},
  ]
  ////////原始資料
  const [todos,setTodos]=useState(myTodos);
  const [filterTodos,setfilterTodos]=useState(myTodos);
  ////////預設是否看已完成的
  const [checked,setChecked] = useState(false);

  useEffect(()=>{
    ///////////////把資料未完成放前面、完成放後面
    const filter = ()=>{
      judgeDone(checked,todos);
    }
    filter()
  },[checked,todos])

  ///////////////新增
  const addNewTodo = (val) => {
    if (val){
      let _todos = [...todos];
      let newId = new Date().getTime();
      let newObj = {id:newId,do:val,check:false,date:undefined};
      _todos.push(newObj);
      setTodos(_todos);
      setfilterTodos(_todos);

      judgeDone(checked,_todos);
    }
  }
  ///////////////刪除
  const handleDelete = (e)=>{
    let id = e.target.value*1
    let _todos = todos.filter(item => item.id !== id)

    judgeDone(checked,_todos);
  }
  //////////////每個todo的check
  const handleChecked = (id,check,date)=>{
    const _todos = [...todos];
    const Obj = _todos.filter(item=>item.id === id)[0]
    const newObj = {
      ...Obj,
      check,
      date,
    }
    const index = _todos.findIndex(item => item.id === id);
    _todos.splice(index,1);
    _todos.push(newObj);

    judgeDone(checked,_todos);
  }
  /////////////////判斷checked是否true或false
  const judgeDone = (check,todo) =>{
    if(check === true){
      setTodos(todo);
      let _untodo = todo.filter(item=>item.check === false);
      let _dtodo =todo.filter(item=>item.check === true)
      let __todos = _untodo.concat(_dtodo)
      setfilterTodos(__todos);
    }else{
      const __todos = todo.filter(item=>item.check === false);
      setTodos(todo);
      setfilterTodos(__todos);
    }
  }

  ////////////判斷checked是否true或false且要設checked
  const filterDone = (props=todos)=>{

    setChecked(prevState => {
      prevState = !prevState

      if(prevState === true){
        const _todos = props;
        setfilterTodos(_todos);
      }else{
        const _todos = props.filter(item=>item.check === false);
        setfilterTodos(_todos);
      }

      return prevState;
    });
  }

  return (
      <div className="App">
        <Center>
          <GlobalStyle />
          <Title/>
          <CreateTodo todos={todos} addNewTodo={addNewTodo}/>
          <Container>
            <ToolBox>
              <ShowNum filterTodos={filterTodos}/>
              <FilterDone filterDone={filterDone} checked={checked}/>
            </ToolBox>
            <TodoList filterTodos={filterTodos}handleChecked={handleChecked} handleDelete={handleDelete}/>
          </Container>
        </Center>
      </div>
  );
}

export default App;
