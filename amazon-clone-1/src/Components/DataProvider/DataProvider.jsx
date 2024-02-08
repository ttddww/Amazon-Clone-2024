import React, { createContext, useReducer} from "react"
// import { reducer } from "../Utility/REDUCER.JS"
// import { initialState } from "../Utility/REDUCER.JS"

export const DataContext =  createContext()


 export const DataProvider = ({children,reducer,initialState})=> {
     return(
        <DataContext.Provider value={useReducer(reducer,initialState)} >
          {children}
        </DataContext.Provider>
    )
}