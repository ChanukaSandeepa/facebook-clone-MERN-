import React, { createContext, useContext, useReducer } from 'react'
import contextReducer, { initialState } from './contextReducer'

const Context = createContext()

const AppContext = (props) => {
    return (
        <Context.Provider value={useReducer(contextReducer, initialState)}>
            {props.children}
        </Context.Provider>
    )
}


export default AppContext
export const useAppContext = () => useContext(Context)
    