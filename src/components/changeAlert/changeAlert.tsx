import * as React from 'react';
import{withStorageListener, Showers}from './withStorageListener';
import "./changeAlert.css"



export function ChangeAlert({show,toggleShow}: Showers)

{if(show){
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

export const ChangeAlertWithStorageListener=withStorageListener(ChangeAlert)
