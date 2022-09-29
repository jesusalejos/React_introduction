import * as React from 'react';
import  "./TodoCounter.css"

interface Props {
	totalTodos: number
	completedTodos: number
	loading?: boolean | any
}


export function TodoCounter ({totalTodos, completedTodos,loading}: Props)
	{

	//const {total,completed} = props; así con la props sin el usecontext, lo cual es más compeljo

	
	
	return (
		<h2 className = {`TodoCounter ${!!loading && "TodoCounter--loading"}`}
		>
			Has completado {completedTodos} de {totalTodos} Tareas
		</h2>
		)
}