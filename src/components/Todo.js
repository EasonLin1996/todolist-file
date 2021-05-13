import React, { Fragment, useEffect, useState } from 'react';
import {Clickable, ListItem} from '../styled/styled';

const Todo = (props) => {
  const [check, setCheck] = useState(props.todo.check);
  const [date,setDate] = useState(undefined);

  const handleChecked = async ()=>{
    await setCheck(!check);
    await handleDate();
    props.handleChecked(props.todo.id,!check,date);
  }

  const handleDate = (props) => {
    if(props){
      setDate(props);
    }else{
      const today = new Date();
      const month = (today.getMonth()+1).toString().padStart(2,'0');
      const day = today.getDate().toString().padStart(2,'0');
      const year = today.getFullYear();
      const hours = today.getHours().toString().padStart(2,'0');
      const min = today.getMinutes().toString().padStart(2,'0');
      const string = `${year}/${month}/${day} ${hours}:${min}`
      setDate(string);
    }
  }

  useEffect(()=>{
    handleDate(date);
  },[])

  return (
    
    <ListItem>
      {
        check?
          <Fragment>
            <span>{props.todo.do}</span>
            <strong>
              完成時間:{date}
            </strong>
          </Fragment>
        :
          <Fragment>
            {props.todo.do}
            <Clickable>
              <button value={props.todo.id} onClick={handleChecked} >Mark as done</button>
              <button value={props.todo.id} onClick={props.handleDelete}>Delete</button>
            </Clickable>
          </Fragment>
      }
    </ListItem>
  );
}

export default Todo;
