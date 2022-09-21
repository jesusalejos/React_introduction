import * as React from 'react';
import  "./TodoCounter.css"
import {TodoContext} from "../TodoContext/TodoContext"



export function TodoCounter (){

	//const {total,completed} = props; así con la props sin el usecontext, lo cual es más compeljo

	const {totalTodos,completedTodos} = React.useContext(TodoContext);
	
	return (
		<h2 className = "TodoCounter">Has completado {completedTodos} de {totalTodos} TOdoS</h2>
		)
}