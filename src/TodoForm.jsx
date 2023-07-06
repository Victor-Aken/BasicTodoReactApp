import { useState } from "react";



export default function TodoForm(props){
    const [task, setTask] = useState("");


    function handleSubmit(e){
        e.preventDefault();
         
        if(task !== ""){
          props.setTodos( currentTodos => {
            return [
              ...currentTodos, {id: crypto.randomUUID(), title:task, completed: false},
            ]
      
          })
        } else{
          props.setTodos( currentTodos => {
            return [
              ...currentTodos
            ]
      
          })
        }   
        setTask("");
      }


    return(
        <form className='newTodoForm' onSubmit={ handleSubmit}>
            <h1>What are you doing Today?</h1> 
            <input placeholder='New Task...' 
            style={{height: 35, width: 500, outline: "none", borderRadius: 3, borderColor: "gray", borderWidth: 1, paddingLeft: 10, fontSize:18, }}
            value={task} onChange={ e => setTask(e.target.value)}
            /> 
            <button className='addTaskBtn'>Add Task!</button>
        </form>
    )
}

