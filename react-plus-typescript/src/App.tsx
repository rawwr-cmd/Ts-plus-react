import Todos from './components/todos';
import Modal from './models/model';

function App() {
  const todos = [
    new Modal('Learn React'),
    new Modal('Learn TypeScript'),
  ]
  // console.log(todos);

  return (
    <Todos items={todos}/>
  );
}

export default App;
