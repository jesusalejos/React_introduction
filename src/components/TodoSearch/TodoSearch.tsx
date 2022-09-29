import * as React from 'react';
import "./TodoSearch.css"


interface Props {
    searchValue: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
    loading?: boolean | any

}

export function TodoSearch({searchValue, setSearchValue, loading}: Props){
	
//Aquí en las props usamos un estilo más desordenado para tener en cuenta que es otra forma

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
        onChange={onSearchValueChange}
        disabled={loading}
        />
        </>
    );
}
