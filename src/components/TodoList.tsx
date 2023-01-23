import React from 'react'
import { Todo } from '../Models/TodoModel'
import TodoItem from './TodoItem'

interface props{
    todos:Array<Todo>,
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<props> = ({todos,setTodos}) => {
  return (
    <div className='todosContainer'>{todos?.map((item:Todo,index:number)=>
      (
          <TodoItem key={item.id} index={index} todo={item}todos={todos}setTodos={setTodos}/>
        )
    )}</div>
  )
}

export default TodoList