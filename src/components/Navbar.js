import React, {useContext} from "react";
import {ThemeContext} from '../contexts/ThemeContext'
import {AuthContext} from '../contexts/AuthContext'
import { TOGGLE_AUTH } from "../reducers/types";

const Navbar = () => {
    //load context theme
    const {theme} = useContext(ThemeContext)
    const {isLightTheme, light, dark} = theme
    const style = isLightTheme ? light: dark

    //load auth context
    const {isAuthenticated, dispatch} = useContext(AuthContext)
    return (
        <div className="navbar" style={style}>
            <h1>My hooks app</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                    {isAuthenticated ? 'You are logged in ': ''}
                    <button onClick={() => {
                        dispatch({
                            type: TOGGLE_AUTH
                        })
                    }}>
                        {isAuthenticated ? 'Logout': 'Login'}
                    </button>
                </li>
            </ul>
        </div>
    )
}
export default Navbar