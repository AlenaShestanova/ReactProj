import React from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";

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
    function removeTodo(id) {
setTodos(todos.filter(todo=>todo.id!==id))
    }
  return (
    <Context.Provider value={{removeTodo:removeTodo}}>
   <div className="wrapper">
<h1> React tutorial
    <TodoList todos={todos} onToggle={toggleTodo}/>
</h1>
   </div>
    </Context.Provider>
  );
}

export default App;
