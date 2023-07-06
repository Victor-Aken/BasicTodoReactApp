import TodoItem from "./TodoItem";


export default function TodoList(props){


    function toggleTodoCompletion(id, completed){
        props.setTodos( currentTodos => {
            return currentTodos.map( todo => {
            if(todo.id === id){
              return { ...todo, completed}
            }
  
            return todo;
          })
        })
    }
  
    function deleteTodo(id){
        props.setTodos( currentTodos => {
          return currentTodos.filter(todo => todo.id !== id)
        })
  
        return props.todos;
    }

    return(
        <ul className='taskList'>
            {props.todos.length == 0 && (<h1 style={{color: "red"}}>No Task Has Been Set.</h1>)}
            { props.todos.map( todo => {
            return(
            <TodoItem key={todo.id} todo={todo} toggleTodoCompletion={toggleTodoCompletion} deleteTodo={deleteTodo}/>
            )
            })}
      </ul>
    )
}

