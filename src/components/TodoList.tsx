import React from 'react'
import { Todo } from '../Models/TodoModel'

interface props{
    todos:Array<Todo>
}

const TodoList:React.FC<props> = ({todos}) => {
  return (
    <div>{todos?.map((item:Todo)=>
      (
           <li style={{ color:'white' }} key={item.id}>
           { item.content }
            </li>
        )
    )}</div>
  )
}

export default TodoList