import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from "./TodoItem";
let styles={
    ul:{
        listStyle:'none',
        margin:0,
        padding:0
    }
};
 function TodoList(props){
return(
    <ul style={styles.ul}>
        {props.todos.map((todo,index) => {
            return <TodoItem todo={todo} key={todo.id} index={index}/>
        })}

    </ul>
)
}
TodoList.propType={
     todos:PropTypes.arrayOf(PropTypes.object).isRequired
}
export default TodoList