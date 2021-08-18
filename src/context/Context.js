import { useContext, useReducer, createContext } from 'react';

import { ADD_PERSON } from './types';
import items from '../services/data';
import reducer from './Reducer';

const initialState = {
    people: items,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addPerson = person => {
        dispatch({
            type: ADD_PERSON,
            payload: person
        });
    };

    return (
        <AppContext.Provider value={{ ...state, addPerson }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
