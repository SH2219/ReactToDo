import React,{useState} from 'react'
import './Style.css'
const ToDoForm = ({addToDo}) => {
    const [value, setValue] = useState("");
    const handleSubmit = e =>{
        e.preventDefault();
        addToDo(value);


        setValue("")
    }
  return (
    <>
    <div className="container">
    <form className='toDoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)}/>
        <button className='todoBtn' type='submit' >Add Task</button>
    </form>
    </div>
    </>
  )
}

export default ToDoForm