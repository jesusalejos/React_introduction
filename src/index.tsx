import * as React from 'react';
import * as ReactDOM from "react-dom";
import "./styles.css"

//import {App} from './components/App/App';

//Aprendiendo HOC

interface Pro {
	saludo: string 
	name: string
}


function App({name, saludo}: Pro): JSX.Element {
return <h1> {saludo} {name}</h1>
}

function withSaludo(WrappedComponent: any){ //esta funcion puede ser de cualquier tipo
	//y me espcifica que quiero hacerle al componente
	return function WrappedComponentWithSaludo(saludo: any){// otro wrapped, puedo hacer cuantos
		//sean necesario o quiera según las modificaciones por las que quiero que pase un 
		//mismo componente. 
		return function ComponenteDeReact(props: any) {
			return (
				<>
				<WrappedComponent {...props} saludo={saludo}/>
				<p>Estamos acompañando al msj</p>
				</>
				)
	
	
		}
	}
}

const AppWithSaludo= withSaludo(App)("Chao");

const mountNode = document.getElementById('app');

//ReactDOM.render(<App/>
//	, mountNode);

ReactDOM.render(<AppWithSaludo name="jesús"/>
	, mountNode);