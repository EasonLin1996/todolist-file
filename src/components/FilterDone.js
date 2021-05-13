import React from 'react';
import {Clickable} from '../styled/styled';

const FilterDone = (props)=> {

  const handleCheck = () =>{
    props.filterDone();
  }

  return (
    <Clickable>
      <input type='checkbox' id='done' defaultChecked={props.checked}/>
      <label htmlFor='done' onClick={handleCheck}>Show done items</label>
    </Clickable>
  );
}

export default FilterDone;
