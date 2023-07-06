
export default function TodoItem({todo, id, toggleTodoCompletion, deleteTodo}){
    return(
        <li className='task'>
            <input type='checkbox' 
            style={{cursor:"pointer", width:30, height:30,}}  
            checked={todo.completed} 
            onChange={(e) => toggleTodoCompletion(todo.id, e.target.checked)}
            />
            <p>{todo.title}</p>
            <button className='deleteTask' onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    )
}