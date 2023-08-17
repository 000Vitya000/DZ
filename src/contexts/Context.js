import { createContext, useReducer } from "react";
import { Reducer } from "../reducer/Reducer";

export const Context = createContext();

const initialState = {

};

export const Provider = ({ children }) => {
  const [value, dispatch] = useReducer(Reducer, initialState);


  return (<Context.Provider value={value}>{children}</Context.Provider>);
};
