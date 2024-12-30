import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../slices/todoSlices";

const MyTodos = () => {
    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const removeMytodo = (id) => {
        dispatch(removeTodo(id))
    }
    
    return(
        <div>
            <h5>My Todo List</h5>
            {
                todos.map((item) => (
                    <div className="todo-item" key={item.id}>
                        {item.name} 
                        <button onClick={() => removeMytodo(item.id)}>Remove</button>
                    </div>
                ))
            }
        </div>
    )
}

export default MyTodos;