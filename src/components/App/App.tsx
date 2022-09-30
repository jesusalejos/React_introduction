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
import {TodosError} from "../TodosError/TodosError"
import {TodosLoading} from "../TodosLoading/TodosLoading"
import {EmptyTodos} from "../EmptyTodos/EmptyTodos"

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

     <TodoHeader loading={loading}>
     
     <TodoCounter 

     totalTodos={totalTodos}
     completedTodos ={completedTodos}
     
     
     /> 

     <TodoSearch 
  
      searchValue={searchValue}
      setSearchValue={setSearchValue}


     />
     
     </TodoHeader >

     <TodoList
     error= {error}
     loading= {loading}
     searchedTodos= {searchedTodos}
     searchText= {searchValue}
     totalTodos= {totalTodos}
     onError={() => <TodosError />}     
	 onLoading={()=> <TodosLoading/>}
	 onEmptyTodos={()=> <EmptyTodos/>}
	 onEmptySearchResults={(searchText)=> 
	 	<p>No hay resultados para {searchText}</p>}
	 render={todo=> (
	 	<TodoItem 
         key= {todo.text} 
         text= {todo.text}
         completed = {todo.completed}
         onComplete={()=> completeTodo(todo.text)} 
         onDelete = {()=> deleteTodo(todo.text)}
         />
	 	)}
	   />

     {/* renderFunctions //for use with renderProps superpowerful
		{todo=> (
	 	<TodoItem 
         key= {todo.text} 
         text= {todo.text}
         completed = {todo.completed}
         onComplete={()=> completeTodo(todo.text)} 
         onDelete = {()=> deleteTodo(todo.text)}
         />
	 	)}
     </TodoList>*/}

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