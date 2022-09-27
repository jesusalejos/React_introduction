import * as React from 'react';
import {useLocalStorage} from "./useLocalStorage"

interface SelectedContextType  {
  
  loading: boolean | any
  error: boolean | any
  totalTodos: number
  completedTodos: number
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  searchedTodos: Task[]
  addTodo: (text: string)=> void
  completeTodo: (text: string)=> void
  deleteTodo: (text: string)=> void
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
 
}

interface Task {

  text: string,
  completed: boolean
}

export function useTodos (): SelectedContextType {
   const {item: todos, 
   saveItem: saveTodos,
   loading,error
  }: {item:Task[],
     saveItem: React.Dispatch<React.SetStateAction<Task[]>>, 
     loading: boolean,
     error: boolean} = useLocalStorage("TODOS_V1", []) //si fuera array ponemos as... repetimos datos (creo)
//const [name, saveName] = useLocalStorage("PRUEBA_V1", "prueba"); //es decir, el custom hooks nos sirve para todo, es abstraer una lógica
 

const [searchValue, setSearchValue] = React.useState("");
const [openModal,setOpenModal]= React.useState(false);

const completedTodos = todos.filter(todo => !!todo.completed).length; //!! es true
const totalTodos = todos.length;

let searchedTodos: Task[] | ((newItem: Task[]) => void)= [];



if (searchValue.length <= 1) {
  searchedTodos = todos;
} else {

  searchedTodos = todos.filter(todo => {

    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  })
  
}

const addTodo = (text: string) => {
  const newTodos = [... todos]; //creamos un nuevo objeto 
  newTodos.push({
    completed: false,
    text: text,
  });
  saveTodos(newTodos); //Aquí causaremos un re-render, por eso, creamo sun nuevo objeto.
}

const completeTodo = (text: string) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [... todos]; //creamos un nuevo objeto 
  newTodos[todoIndex].completed = true;
  saveTodos(newTodos); //Aquí causaremos un re-render, por eso, creamo sun nuevo objeto.
}
 
const deleteTodo = (text: string) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [... todos]; //creamos un nuevo objeto 
  newTodos.splice(todoIndex,1);
  saveTodos(newTodos); //Aquí causaremos un re-render, por eso, creamo sun nuevo objeto.
}


 return {

      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }
   
}