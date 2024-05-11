import './App.css';
import { useState } from 'react';
import { useAppDispatch } from './hooks/hooks';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Header from './components/Header';
import { addTodo } from './store/todoSlice';
import Container from './components/Container';


function App() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(addTodo(text));
      setText("");
    }
  }

  return (
    <>
      <Container>
        <Header />
        <NewTodo
          value={text}
          handleAction={handleAction}
          updateText={setText}
          onKeyDown={handleKeyDown}
        />
        <Todos />
      </Container>
    </>
  )
}

export default App
