import * as React from 'react';
import './TodoForm.css';

interface Props {
  addTodo: (text: string) => void
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>

}

export function TodoForm ({addTodo, setOpenModal}: Props) {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  
  // Parameter 'event' implicitly has an 'any' type.


  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodoValue(e.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };



  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva tarea...</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe tu Tarea aquí..."
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}