import React from 'react';
import TodoList from "./Todo/TodoList";

function App() {
    const todos=[
        {id:1,completed:false, title:'title1'},
        {id:2,completed:false, title:'title2'},
        {id:3,completed:false, title:'title3'}
    ];
  return (
   <div className="wrapper">
<h1> React tutorial
    <TodoList todos={todos}/>
</h1>
   </div>
  );
}

export default App;
