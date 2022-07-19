import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/todos';
import Modal from './models/model';

function App() {
  const [todos, setTodos] = useState<Modal[]>([]);
  // console.log(todos);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Modal(todoText);

    setTodos((prevTodos) => [...prevTodos, newTodo]);

    //setTodos((prevTodos) => {
      // return (prevTodos.concat(newTodo));
    // });
  }

  return (
    <div>
    <NewTodo onAddToDo={addTodoHandler}/>
    <Todos items={todos}/>
    </div>
  );
}

export default App;
