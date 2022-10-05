import * as React from 'react';



export interface Showers {
  show: boolean
  toggleShow: ()=> void
  sincronize?: ()=> void
}

interface ComponentWrapped {
  //WrappedComponent?:  React.ComponentType<any>
  WrappedComponent?:  React.FunctionComponent

  }

  
export function withStorageListener(WrappedComponent: React.FunctionComponent<any>) {
  return function WrappedComponentWithStorageListener(props: any) {
    const [storageChange, setStorageChange] = React.useState(false);
    
    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios en TODOS_V1');
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };

    return (
      <WrappedComponent
        show={storageChange} 
        toggleShow={toggleShow}
      />
    );
  }
}