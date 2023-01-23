import React from 'react'
import { Todo } from '../Models/TodoModel'
import { IoMdDoneAll } from 'react-icons/io';
import { AiFillDelete } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { useState } from 'react'
interface props{
    index:number,
    todo:Todo,
    todos:Array<Todo>,
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem:React.FC<props> = ({index,todo,todos,setTodos}) => {
      const [edit,setEdit]=useState<Boolean>(false);
      const [editValue,setEditValue]=useState<string>('');
  const deleteHandler=(e:React.SyntheticEvent,id:number)=>{
    e.preventDefault();
    setTodos(todos.filter((todo) => todo.id !== id));
    }

    const finishHandler=(e:React.SyntheticEvent,id:number)=>{
      e.preventDefault();
      setTodos(todos.map((todo) => 
        todo.id===id?{...todo,isFinished:!todo.isFinished}:todo
      ))
     
    }

    const editHandler=(e:React.SyntheticEvent,id:number)=>{
      e.preventDefault();
      setTodos(todos.map((todo) => 
      todo.id===id?{...todo,content:editValue}:todo
    ))
    setEdit(!edit)
    }
  return (
    <div className='todoBox'>
      {
      edit?<form onSubmit={(e)=>editHandler(e,todo.id)}><input className='editInput' placeholder={todo.content} value={editValue} onChange={(e)=>{setEditValue(e.target.value)}}/></form>:
      todo.isFinished? <s className='todoContent'>
        {todo.content}
        </s>:
        <div className='todoContent'>
        {todo.content}
        </div>}
        <div className='todoIcons'>
            <MdEdit onClick={()=> setEdit(!edit)}/>
            <AiFillDelete onClick={(e)=>deleteHandler(e,todo.id)}/>
            <IoMdDoneAll onClick={(e)=>finishHandler(e,todo.id)}/>
        </div>
        </div>
  )
}

export default TodoItem