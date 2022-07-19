import Modal from "../models/model";
import TodoItem from "./TodoItem";
import classes from "./todos.module.css";

const Todos: React.FC<{
  items: Modal[];
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item, index) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;

//props can be made optional by ?
