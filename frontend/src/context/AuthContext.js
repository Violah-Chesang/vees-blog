import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user : null,
    isFetching : false,
    error : false,
    logout: null
}
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE); // dispatch(updates the state) and state(updatable INITIAL STATE)

    return(
        <AuthContext.Provider value={
            {
                user: state.user,
                isFetching: state.isFetching,
                error : state.error,
                logout : state.logout,
                dispatch
            }
        }>
            {children}
        </AuthContext.Provider>
    );
}