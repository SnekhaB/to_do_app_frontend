import React, { useState } from 'react'

const TaskForm = ({addTask}) => {

  const[value,setValue] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    if(value.trim()){
      addTask(value)
    }
    setValue("")


  }

  return (
    <>
    <form action="" onSubmit={handleSubmit} className='form'>
      <div className='container'>
        <input 
        type="text" 
        placeholder='Enter your task'
        className='input-field'
        onChange={(e) => {setValue(e.target.value)}}
        value={value}/>
        <button type="submit" className='add-button'>Add</button>
      </div>
    </form>
    </>
  )
}

export default TaskForm