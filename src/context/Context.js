import { useEffect, useContext, useReducer, createContext } from 'react';

import { ADD_PERSON } from './types';
import items from '../services/data';
import reducer from './Reducer';

const peopleKey = 'people';

const getLocalStorage = () => {
    const people = localStorage.getItem(peopleKey);
    if (people) return JSON.parse(people);
    return items;
};

const initialState = {
    people: getLocalStorage(),
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem(peopleKey, JSON.stringify(state.people));
    }, [state.people]);

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
