import classes from "../styles/NewTodo.module.css";
import { useRef, useEffect } from 'react';
import Clock from '../components/Clock';

interface NewTodoProps {
  value: string,
  updateText: (str: string) => void,
  handleAction: () => void,
  onKeyDown:  (str: React.KeyboardEvent <HTMLInputElement>) => void 
}

const NewTodo: React.FC<NewTodoProps> = ({ value, updateText, handleAction, onKeyDown }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const now = new Date();

  useEffect(()=> {
    if(inputRef.current) inputRef.current.focus();
  }, [])

  return (
    <section className={classes.form}>
      <input 
      ref={inputRef}
      placeholder="New Todo"
      value={value}
      onChange={(e)=> updateText(e.target.value)}
      onKeyDown={onKeyDown}
       />
       <div className={classes.flex}>
       <Clock time={now.getTime()}/>
       <button onClick={handleAction}>Add Todo</button>
       </div>
    </section>
  );
}

export default NewTodo;
