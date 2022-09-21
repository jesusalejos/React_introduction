import * as React from 'react';
import * as ReactDOM from "react-dom";
import "./styles.css"

import {App} from './components/App/App';


const mountNode = document.getElementById('app');

ReactDOM.render(<App/>
	, mountNode);