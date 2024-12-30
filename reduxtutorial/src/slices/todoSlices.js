import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(),
        name: 'Clean the house'
    },
    {
        id: nanoid(),
        name: 'Bring the computer'
    }
]


const todoSlices = createSlice({
    name: "todos",
    initialState: initialState,
    reducers:{
        addTodo(state, action){
            state.push({
                id: nanoid(),
                name: action.payload
            })
        },

        removeTodo(state, action){
            const todoId = action.payload;
            return state.filter(item => item.id != todoId);
        }

    }
})

export const { addTodo, removeTodo } = todoSlices.actions

export default todoSlices.reducer;