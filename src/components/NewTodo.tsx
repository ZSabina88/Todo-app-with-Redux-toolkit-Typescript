import classes from "../styles/NewTodo.module.css";

interface NewTodoProps {
  value: string,
  updateText: (str: string) => void,
  handleAction: () => void
}

const NewTodo: React.FC<NewTodoProps> = ({ value, updateText, handleAction }) => {
  return (
    <div className={classes.form}>
      <input 
      placeholder="New Todo"
      value={value}
      onChange={(e)=> updateText(e.target.value)}
       />
       <button onClick={handleAction}>Add Todo</button>
    </div>
  );
}

export default NewTodo;
