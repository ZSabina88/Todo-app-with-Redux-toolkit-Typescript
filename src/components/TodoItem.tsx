import { useAppDispatch } from "../hooks/hooks";
import { toggleComplete, removeTodo } from "../store/todoSlice";
import classes from "../styles/TodoItem.module.css";
import { IoClose } from "react-icons/io5";

interface TodoItemProps {
  id: string,
  title: string,
  completed: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <li className={classes.item}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      <span className={classes.x} onClick={() => dispatch(removeTodo(id))}>
        <IoClose color="var(--color-puprple)" size="30px"/>
      </span>
    </li>
  );
}

export default TodoItem;
