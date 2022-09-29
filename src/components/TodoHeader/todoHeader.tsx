import * as React from 'react';

interface Props {
	children: React.ReactElement<{ loading: any; }>
	loading: boolean | any
}





export function TodoHeader ({children, loading}: Props) {

	//React.cloneElement(children,{loading}) //a alone child for this we have React.children, unless this last serve also with one...

	return (
		<header>
			{React.Children
				.toArray(children)
				.map(child=>React.cloneElement(children,{loading}))
			}
		</header>
		)
}