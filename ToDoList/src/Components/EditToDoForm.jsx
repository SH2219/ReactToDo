import React,{useState} from 'react'
import './Style.css'
const EditToDoForm = ({editToDo, task}) => {
    const [value, setValue] = useState(task.task);
    const handleSubmit = e =>{
        e.preventDefault();
        editToDo(value, task.id);
        setValue("")
    }
  return (
    <>
    <div className="container">
    <form className='toDoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='Update Task?' onChange={(e) => setValue(e.target.value)}/>
        <button className='todoBtn' type='submit' >Update Task</button>
    </form>
    </div>
    </>
  )
}

export default EditToDoForm