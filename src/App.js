import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodList';


function App() {
  const [todos, setTodos] = useState(() => {
    const LocalValue = localStorage.getItem("TODOS");
    if(LocalValue == null){
      return [];
    }
    return JSON.parse(LocalValue);

  });

  useEffect( () => {
    localStorage.setItem( "TODOS", JSON.stringify(todos))
  },[todos])


  return (
    <div className="App"> 
      <TodoForm  setTodos={setTodos}/>
      <TodoList todos={todos}  setTodos={setTodos}/>
    </div>
  );
}

export default App;





// JSON.parse(data from localStorage) which is Normal Javascript
//  0: {id: '64704ea4-63ff-46f8-9fe9-1f91da435d0a', title: 'Go shopping', completed: true}
//  1: {id: '3eedb93e-328b-497c-ba83-8b8e5c500dd4', title: 'Item2', completed: false}

// Directly From localStorage which is jSON data. You can see that it is basically made of strings hence to convert Normal Js data to JSon  we have to stringify using the syntax === JSON.stringify(Javascript Data)
// [{"id":"64704ea4-63ff-46f8-9fe9-1f91da435d0a","title":"Go shopping","completed":true},{"id":"3eedb93e-328b-497c-ba83-8b8e5c500dd4","title":"Item2","completed":false}]