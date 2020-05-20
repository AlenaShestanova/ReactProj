import React from 'react';
import TodoList from "./Todo/TodoList";

function App() {
    let [todos,setTodos]=React.useState([
        {id:1,completed:false, title:'Дело1'},
        {id:2,completed:false, title:'Дело2'},
        {id:3,completed:false, title:'Дело3'}
    ])

    function toggleTodo(id) {
        setTodos(
            todos.map(todo=>{
            if(todo.id===id){
                todo.completed=!todo.completed
            }
            return todo
        })
        )
    }
  return (
   <div className="wrapper">
<h1> React tutorial
    <TodoList todos={todos} onToggle={toggleTodo}/>
</h1>
   </div>
  );
}

export default App;
