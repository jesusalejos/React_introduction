import * as React from 'react';
import  {TodoCounter} from "../TodoCounter/TodoCounter"
import  {TodoSearch} from "../TodoSearch/TodoSearch"
import  {TodoList} from "../TodoList/TodoList"
import  {TodoItem} from "../TodoItem/TodoItem"
import  {CreateTodoButtom} from "../CreateTodoButtom/CreateTodoButtom"
import  {Task} from "../TodoContext/TodoContext"
import {TodoContext} from "../TodoContext/TodoContext"
import {Modal} from "../Todomodal/Todomodal"
import {TodoForm} from "../TodoForm/TodoForm"


export function AppUI() {

const {
     	error, 
     	loading, 
     	searchedTodos, 
     	completeTodo,
     	deleteTodo,
     	openModal,
     	setOpenModal,
     } = React.useContext(TodoContext)	
	return (
     <>
     <TodoCounter 
     //total={totalTodos}
     //completed ={completedTodos}
     />  
     <TodoSearch 
      //searchValue={searchValue}
      //setSearchValue={setSearchValue}
     />

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
     	
     	<TodoForm/>
     </Modal>
     	)}

  
     <CreateTodoButtom 
     	setOpenModal={setOpenModal}
     />
     </>
    )
  }

//  Type  is not assignable to type 'IntrinsicAttributes'. review the component same.
  // Property does not exist on type 'IntrinsicAttributes'.

