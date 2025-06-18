import React from 'react'

const TaskList = ({tasks,toggleTask,deleteTask}) => {
  return (
    <>
    <ul className='input-list'>
      {tasks.map((input,index) => 
        <li key={index} >
          <span className={input.completed && 'completed'}>{input.text}</span>
          <span className='icons'>
            <i className="bx bx-task" onClick={() => toggleTask(input.id)}></i>
            <i className='bx bxs-trash delete' onClick={() => deleteTask(input.id)}></i>
          </span>
        </li>)}
    </ul>
    
    </>
  )
}

export default TaskList