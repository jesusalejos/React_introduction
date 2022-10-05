import * as React from 'react';

export interface Showers {
 sincronize: ()=> void
}



export function useStorageListener({sincronize}: Showers) {
  
    const [storageChange, setStorageChange] = React.useState(false);
    
    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios en TODOS_V1');
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      sincronize();
      setStorageChange(false);
    };

    return {
      show: storageChange,
      toggleShow,
    }

    
  
}