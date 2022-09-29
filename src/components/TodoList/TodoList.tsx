import * as React from 'react';
import "./TodoList.css"

interface Props {
	children?: any; //it was the solution.
	error: string
	onError: ()=> void
	loading: string
	onLoading: ()=> void
	searchedTodos: Task[]
	onEmptyTodos: ()=> void
	render: (text: Task)=> void
	totalTodos: number
	onEmptySearchResults:(text: string)=> JSX.Element
	searchText: string
	
}

interface Task {

  text: string,
  completed: boolean
}

export function TodoList({error, 
						  onError, 
						  loading, 
					  	  onLoading, 
						  searchedTodos, 
						  onEmptyTodos, 
						  render,
						  totalTodos,
						  onEmptySearchResults,
						  searchText,
						  children}: Props){
    return(
        <section>
        {error && onError()}
        {loading && onLoading()}
        {(!loading && !totalTodos)&& onEmptyTodos()}
        {searchedTodos.map(todo=> render(todo))}        
          {/*{searchedTodos.map(todo=> children(todo))} // for renderFunction*/ }
        {(totalTodos && !searchedTodos.length) && onEmptySearchResults(searchText)}
        
         </section>
    );
}