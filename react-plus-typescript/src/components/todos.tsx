import Modal from '../models/model'
const Todos: React.FC<{items: Modal[]}> = (props) => {
    return (
        <ul>
           {props.items.map((item, index) => <li key={index}>{item.text}</li>)}
        </ul>
    )
}
export default Todos;


//props can be made optional by ?