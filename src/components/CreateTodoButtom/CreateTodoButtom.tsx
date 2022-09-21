import * as React from 'react';
import "./CreateTodoButtom.css"
import {TodoContext} from "../TodoContext/TodoContext"

interface Props {
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export function CreateTodoButtom({setOpenModal}: Props){

	//const {setOpenModal} = React.useContext(TodoContext);

	const onClickButton = () => {
		setOpenModal (prevState => !prevState);//es otra opción que podemos hacer en n todos los estados.
	};

	
    return(
        <button 
        className="CreateTodoButtom"
        onClick={onClickButton}
        >
        +
        </button>
    );
}