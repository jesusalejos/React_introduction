import * as React from 'react';
import {AppUI} from "./AppUI";
import {useLocalStorage} from "../TodoContext/useLocalStorage"
import {TodoProvider} from "../TodoContext/TodoContext"



export function App(): JSX.Element  {

    return (
             
        <TodoProvider>
          <AppUI/>
        </TodoProvider>
      
      );
  
}