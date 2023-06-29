'use client'
import React from 'react'
import { Todo } from '../utils/interface'
import { deletePost, getAllPosts } from '../utils/supabaseFunction'

type Props = {
  todos : Todo[]
  setTodos:React.Dispatch<any>
}

const TodoList = (props:Props) => {
  const{todos ,setTodos}=props;

  const handleDelete = async(id:number) => {
    await deletePost(id);
    const newTodos = await getAllPosts();
    setTodos(newTodos.data);
  }

  return (
    <div>
      <ul className="mx-auto">
        {todos.map((todo)=>{
          return (
            <div key={todo.id} className="flex bg-orange-200 rounded-md mt-2 p-2 justify-between">
              <li className="font-medium">{todo.isCompled?"✅":"🍊"} {todo.title}</li>
              <span className="cursor-pointer" onClick={()=>handleDelete(todo.id)}>✖️</span>
            </div>
          ) 
        })}
        
      </ul>
    </div>
  )
}

export default TodoList
