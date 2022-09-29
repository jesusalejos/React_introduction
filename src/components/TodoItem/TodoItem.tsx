import * as React from 'react';
import  "./TodoItem.css"

 
interface Props {
text: string; 
completed: boolean;
onComplete: ()=> void;
onDelete: ()=> void;

}

export function TodoItem(props: Props){

	const {text,completed, onComplete, onDelete} = props;
	
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${completed && 'Icon-check--active' }`} 
            onClick={onComplete}>          
            √
            </span>
            <p className= {`TodoItem-p ${completed && 'TodoItem-p--completed'}`}>
            {text}
            </p>
            <span className="Icon Icon-delete"
             onClick={onDelete}
            >
            X
            </span>   
        </li>
    );
}