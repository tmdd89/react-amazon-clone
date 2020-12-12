// setup data layer 
//for tracking basket 
import React, { createContext, useContext, useReducer } from 'react'

//DATA LAYER
export const StateContext = createContext();

//BUILD PROVIDER
export const StateProvider = ({ reducer, initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//for use inside component
export const useStateValue = () => useContext(StateContext);