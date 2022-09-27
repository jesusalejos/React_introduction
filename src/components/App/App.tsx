import * as React from 'react';
import  {TodoCounter} from "../TodoCounter/TodoCounter"
import  {TodoSearch} from "../TodoSearch/TodoSearch"
import  {TodoList} from "../TodoList/TodoList"
import  {TodoItem} from "../TodoItem/TodoItem"
import  {CreateTodoButtom} from "../CreateTodoButtom/CreateTodoButtom"
//import  {Task} from "./useTodo"
import {Modal} from "../Todomodal/Todomodal"
import {TodoForm} from "../TodoForm/TodoForm"
import {TodoHeader} from "../TodoHeader/todoHeader"
import {useLocalStorage} from "./useLocalStorage"
import {useTodos} from "./useTodo"

interface Task {

  text: string,
  completed: boolean
}


export function App(): JSX.Element  {

const {
     	error, 
     	loading, 
     	searchedTodos, 
     	completeTodo,
     	deleteTodo,
     	openModal,
     	setOpenModal,
        totalTodos,
        completedTodos,
        searchValue, 
        setSearchValue,
        addTodo,
     } = useTodos()

    return (

     <>

     <TodoHeader>
     <TodoCounter 
     totalTodos={totalTodos}
     completedTodos ={completedTodos}
     /> 

     <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
     />
     </TodoHeader>

     <TodoList>
	 {error && <p>Desespérate, hubo un error...</p>}
	 {loading && <p>Estamos cargando, no desesperes...</p>}
     {(!loading && !searchedTodos.length) && <div><p>¡Crea tu primer ToDo!</p></div>}
     
       {searchedTodos.map((todo: Task)=>  {
         return  <TodoItem 
         key= {todo.text} 
         text= {todo.text}
         completed = {todo.completed}
         onComplete={()=> completeTodo(todo.text)} 
         onDelete = {()=> deleteTodo(todo.text)}
         />
        })
     }
     </TodoList>
     
     {!!openModal && (
	<Modal>
     	
     	<TodoForm
             addTodo={addTodo}
             setOpenModal={setOpenModal}
         />
     </Modal>
     	)}

  
     <CreateTodoButtom 
     	setOpenModal={setOpenModal}
     />

     </>
    )
  
}