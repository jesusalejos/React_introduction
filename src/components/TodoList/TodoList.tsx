import * as React from 'react';
import "./TodoList.css"

interface Props {
	children: JSX.Element | JSX.Element[]; //it was the solution.
}

export function TodoList(props: Props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}