import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import { Todo } from './Models/TodoModel'

function App() {
const [todo,addTodo]=useState<string>('')
const [todoList,addTodoList]=useState<Array<Todo>>([])
const addHandler=(e:React.SyntheticEvent)=>{
e.preventDefault();
if(todo){
addTodoList([...todoList,{id:Date.now(),content:todo,isFinished:false}])}
addTodo('');
}

  return (
    <div onSubmit={addHandler} className='app'>
        <div className='heading'>To Do LIST</div>
       <form className='input'>
        <input value={todo} className='input-box' onChange={(e)=>addTodo(e.target.value)} placeholder='Add Task'/>
        <button className='input-button'type='submit'>ADD</button>
       </form>
      <TodoList todos={todoList}/>
    </div>
  )
}

export default App
