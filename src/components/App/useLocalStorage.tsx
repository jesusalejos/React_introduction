import * as React from "react";

let parsedItem: any;

export function useLocalStorage(itemName: string, initialValue: any){ //custom hooks = se hizo así para que sea universal,(por eso muchos :any)

const [error, setError]= React.useState(false);
const [loading, setLoading]= React.useState(true);
const [item, setItem] = React.useState(initialValue);//super importante el uso de useState

React.useEffect(()=> {
  setTimeout(()=>{
    try {
      const localStorageItem = localStorage.getItem (itemName);
       let parsedItem;

    if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }


  setItem(parsedItem);
  setLoading(false);


  } 
  catch (e){
    
    setError(true);  
    
    
  }
},3000),[]    
  

});


const saveItem = (newItem: any) => {
  try {
    const stringifiedItem =  JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem); //para causar el render.
  } catch(e){
    setError(true);
  }
};

return {
  item,
  saveItem, 
  loading, 
  error,
};
 
}