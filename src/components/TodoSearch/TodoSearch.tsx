import * as React from 'react';
import "./TodoSearch.css"
import {TodoContext} from "../TodoContext/TodoContext"

export function TodoSearch(){
	
//Aquí en las props usamos un estilo más desordenado para tener en cuenta que es otra forma
const {searchValue, setSearchValue} = React.useContext(TodoContext);

	const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(event.target.value)
    
    setSearchValue(event.target.value)
}
    return(
    	<>
        <input 
        placeholder="Write here..." 
        className="TodoSearch"
        value={searchValue}
        onChange={onSearchValueChange}/>
        <p>{searchValue}</p>

        </>
    );
}
