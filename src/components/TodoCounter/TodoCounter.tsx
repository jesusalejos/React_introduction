import * as React from 'react';
import  "./TodoCounter.css"

interface Props {
	totalTodos: number
	completedTodos: number
}


export function TodoCounter ({totalTodos, completedTodos}: Props)
	{

	//const {total,completed} = props; así con la props sin el usecontext, lo cual es más compeljo

	
	
	return (
		<h2 className = "TodoCounter">Has completado {completedTodos} de {totalTodos} TOdoS</h2>
		)
}