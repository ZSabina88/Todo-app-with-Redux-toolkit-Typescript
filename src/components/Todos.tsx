import { useAppSelector } from "../hooks/hooks";
import TodoItem from "./TodoItem";
import classes from "../styles/Todos.module.css";

const Todos: React.FC = () => {
  const todos = useAppSelector((state) => state.todo.list);
  return (
    <ul className={classes.todos}>
      {todos.map((todo) => (
        <TodoItem 
        key={todo.id} 
        {...todo} />
      ))}
    </ul>
  );
}

export default Todos;
