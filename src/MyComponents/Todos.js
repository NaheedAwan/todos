import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {

  return (
    <div className='container'>
      <h3 className='text-center my-5'> Todos List</h3>
      {props.todos.length === 0 ? <h1>"No todos to display"</h1> :
        props.todos.map((todo) => {
            return (
             <>
             <TodoItem todo={todo} key={todo.sn} onDelete={props.onDelete} />
              <hr/>
              </>)
          })
        
      }

    </div>
  )
}
