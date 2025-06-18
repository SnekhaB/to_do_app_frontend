import React, {useState, useEffect} from 'react'
import TaskForm from './TaskForm'
import './TaskManager.css'
import TaskList from './TaskList'
import ToastNotification from './ToastNotification'
import { toast } from 'react-toastify';

const API_URL = "https://to-do-app-backend-2-qfhp.onrender.com/tasks"

const TaskManager = () => {
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    async function fetchData(){
      try{
        const response = await fetch(API_URL)
        if(!response.ok){
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setTasks(data)
      } catch(error){
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };

    fetch(API_URL,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newTask)
    })
      .then(res => res.json())
      .then(data => {
        setTasks([...tasks, data]);
        toast.success('Task added successfully!');
      })
      .catch(() => toast.error('Failed to add task'));
  };


  //changing the completed field of a task
  const toggleTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const updated = { ...task, completed: !task.completed };

    fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: updated.completed })
    })
      .then(res => res.json())
      .then(() => {
        setTasks(tasks.map(t => t.id === id ? updated : t));
        if(updated.completed){
          toast.success('Task completed!');
        } else{
          toast.error('Marked as not done');
        }
        // toast.success(updated.completed ? 'Task completed!' : 'Marked as not done');
      })
      .catch(() => toast.error('Error updating task'));
};


  //deleting the task that has the given ID, then update the state
  const deleteTask = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
        toast.error('Task deleted successfully!');
      })
      .catch(() => toast.error('Failed to delete task'));
  };

  return (
    <div className='task-list'>
    <h1 className='heading'><i class='bx bxs-notepad'></i>To Do List</h1>
    <h3 className='line-below-heading'>What's on your to-do list today?</h3>
    <TaskForm addTask = {addTask}/>
    <h3 className='line-below-input'>One step closer to done</h3>
    <TaskList tasks = {tasks} toggleTask = {toggleTask} deleteTask = {deleteTask} />
    <ToastNotification />    
    </div>
  )
}

export default TaskManager