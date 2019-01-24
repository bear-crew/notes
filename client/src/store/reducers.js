import { ACTION_CHANGE_CURRENT_NOTE, ACTION_CHANGE_NOTES, ACTION_UPDATE_NOTE, ACTION_DELETE_NOTE, ACTION_CHANGE_SEARCH } from '../index';

const initialState = {
    currentNote: null,
    notes: [],
    search: ""
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_CHANGE_CURRENT_NOTE: 
            return { ...state, currentNote: action.payload };
        
        case ACTION_CHANGE_NOTES:
            return { ...state, notes: action.payload };

        case ACTION_UPDATE_NOTE:
            return { ...state, notes: state.notes.map(note => note._id === action.payload._id ? action.payload : note) };

        case ACTION_DELETE_NOTE: 
            return { ...state, notes: state.notes.filter(note => { return note._id !== action.payload } ) };
        
        case ACTION_CHANGE_SEARCH:
            return { ...state, search: action.payload };   
    };

    return state;
};