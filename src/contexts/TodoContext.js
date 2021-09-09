import React, {createContext, useEffect, useReducer} from "react";
import {v4 as uuidv4} from 'uuid'
import { todoReducer } from '../reducers/TodoReducer'
import { GET_TODOS, SAVE_TODOS } from "../reducers/types";
export const TodoContext = createContext();

const TodoContextProvider = ({children}) => {
    //State
    // const [todos, setTodos] = useState([
    //     {id: uuidv4(), title: 'Viec 1'},
    //     {id: uuidv4(), title: 'Viec 2'},
    //     {id: uuidv4(), title: 'Viec 3'}
    // ])

    const [todos, dispatch] = useReducer(todoReducer, [])

    //useEffect
    // useEffect(() => {
    //     const todos = localStorage.getItem('todos')
    //     if(todos) setTodos(JSON.parse(todos))
    // }, [])

    useEffect(() => {
        dispatch({
            type: GET_TODOS,
            payload: null
        })
    }, [])

    useEffect(() => {
        dispatch({
            type: SAVE_TODOS,
            payload: {todos}
        })
    }, [todos])
    //Function
    // const addTodo = todo => {
    //     setTodos([...todos, todo])
    // }
    // const deleteTodo = id => {
    //     setTodos(todos.filter(todo => todo.id !== id))
    // }

    //Context data
    const todoContextData = {
        todos,
        dispatch
    }

    //return Provider
    return (
        <TodoContext.Provider value={todoContextData} >     
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider