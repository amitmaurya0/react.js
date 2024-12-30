import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlices";

const TodoForm = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const addNewTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(value))
        setValue('')
    }

    return (
        <div>
            <h4>Add New Todo</h4>
            <form onSubmit={addNewTodo}>

                <input name="name" value={value} onChange={(e) => setValue(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TodoForm;