import * as React from 'react';

interface Props {
	//children: React.ReactElement<{ loading: boolean | any; }>
	//children: React.ReactNode[]
	children: React.ReactNode | React.ReactNode[]
	loading: boolean | any
	//children: React.ReactElement<{ loading: boolean | any;}, string | React.JSXElementConstructor<any>>
	//children: React.ReactElement<any | React.JSXElementConstructor<any>>
	//children: React.ReactNode[]
	//children: {
	//	loading: any
	//}
	//children: React.ReactChildren[]
	
	//children: JSX.Element[]
	//children: React.ReactElement<React.ReactNode>
	//children: React.ReactElement<React.ReactHTML, React.ReactElement<{ loading: boolean | any; }>>
	
	//the solution here: https://stackoverflow.com/questions/42261783/how-to-assign-the-correct-typing-to-react-cloneelement-when-giving-properties-to
}



export function TodoHeader ({children, loading}: Props) {


	return (
		<header>
		
			{
				React.Children
				
				.toArray(children)
				.map(child=>React.cloneElement(child as React.ReactElement<any>,{loading}))

			}
			
		</header>
		
		)
}