import React, { useEffect, useState } from 'react';
import './TaskList.scss';
import { IInputField } from '../interface/toDo';

const TaskList:React.FC = () => {
  const[inputFields, SetInputFields]= useState <IInputField[]> ([]);
  useEffect(() => {
    SetInputFields([{value: ''}]);
  },[])

  const handleAddField = () => {
    if (inputFields[inputFields.length-1].value.trim()!==''){
    SetInputFields([...inputFields, {value: ''}]);}
  }

  const handleChange = (
    index : number,
    event : React.ChangeEvent<HTMLInputElement>) => {
    let value = [...inputFields];
    value[index].value = event.target.value;
    SetInputFields(value);
    localStorage.setItem('taskList',JSON.stringify(value).toString());
    handleAddField();
    SetInputFields(value)
    handleAddField()

  }

  return (
    <>
    <div className="task_list_section">
      {inputFields.map((item ,index)=> (
      <div className="task_list_item" key = {index}
      >
        <input type='checkbox' title='check' className='task_checkbox'/>
        <input type='text' title='task' className='task_input' value={item.value} onChange={ (Event) => {handleChange(index,Event)}}/>
        <button type='button' title='submit'>Remove</button>
      </div>
      ))}
    </div>
    </>
  )
}

export default TaskList;