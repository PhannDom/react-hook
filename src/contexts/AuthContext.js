import React, {createContext, useState, useEffect, useReducer} from "react";
import { authReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    //State
    //const [isAuthenticated, setAuthentication] = useState(false)

    //Function
    // const toggleAuth = () => {
    //     setAuthentication(!isAuthenticated)
    // }

    const [isAuthenticated, dispatch] = useReducer(authReducer, false)
    //UseEffect
    useEffect(() => {
        alert(isAuthenticated ? 'Login Successful': 'You are logged out. Please login')
    }, [isAuthenticated])

    //Context data
    const authContextData = {
        isAuthenticated,
        dispatch
    }

    //return Provider
    return (
        <AuthContext.Provider value={authContextData} >     
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider