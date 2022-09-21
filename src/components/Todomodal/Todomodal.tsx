import * as React from 'react';
import * as ReactDOM from "react-dom"; //En react 18 es different
import  "./Todomodal.css"


interface Props {
  children: JSX.Element; //it was the solution. other is React.ReactChildren

}


const modal = document.getElementById('modal') as HTMLElement;

export function Modal({children}: Props){
	return ReactDOM.createPortal(
		<div className ="ModalBackground">
		{children}
		</div>, 
		modal
);
}


//export default  Modal;
