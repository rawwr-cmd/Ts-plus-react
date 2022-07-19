import Modal from '../models/model';
import TodoItem from './TodoItem';

const Todos: React.FC<{items: Modal[]}> = (props) => {
    return (
        <ul>
           {props.items.map((item, index) => <TodoItem key={item.id} text={item.text} />)}
        </ul>
    )
}
export default Todos;

//props can be made optional by ?