import { configureStore, createAction } from "@reduxjs/toolkit";
import todoReducer from './../slices/todoSlices';


const store = configureStore({
    reducer:{
        todo: todoReducer,
    }
})

export default store;