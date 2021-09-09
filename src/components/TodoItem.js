import React, {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
import {TodoContext} from '../contexts/TodoContext'
import { DELETE_TODO } from '../reducers/types'

const TodoItem = ({todo}) => {
    //load context theme
    const {theme} = useContext(ThemeContext)
    const {isLightTheme, light, dark} = theme
    const style = isLightTheme ? light: dark

    //load context todos
    const { dispatch } = useContext(TodoContext)

    return (
        <div>
            <li 
                onClick={
                    () => {
                        dispatch({
                            type: DELETE_TODO,
                            payload: {
                                id: todo.id
                            }
                        })
                    }
                } 
                style={style}
            >
                {todo.title}
            </li>
        </div>
    )
}

export default TodoItem
