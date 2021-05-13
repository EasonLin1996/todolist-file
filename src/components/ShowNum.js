import React from 'react';

const ShowNum = (props)=> {
  return (
    <div>
      {props.filterTodos.length} item(s)
    </div>
  );
}

export default ShowNum;
