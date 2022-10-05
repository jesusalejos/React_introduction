import * as React from 'react';
import{useStorageListener, Showers}from './useStorageListener';
import "./changeAlert.css"



export function ChangeAlert({sincronize}: Showers){

	const {show, toggleShow} = useStorageListener({sincronize});

if(show){
  return(<div className="ChangeAlert-bg">
  	<div className = "ChangeAlert-container">

  	<p>Parece que cambiaste tus tareas en otras pestaña o ventana</p>
  	
  	<p>¿Quieres sincronizar tus tareas</p>
  			<button	
  	className="TodoForm-button TodoForm-button--add" 
  	onClick={toggleShow}
  	>
  	¡YES!
			</button>
		</div>
	</div>
	);
} else {
  return null;	
	}
}


