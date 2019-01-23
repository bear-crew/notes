import { ACTION_CHANGE_CURRENT_NOTE, ACTION_CHANGE_NOTES, ACTION_UPDATE_NOTE } from '../index';

const initialState = {
    currentNote: null,
    notes: []
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_CHANGE_CURRENT_NOTE: 
            return { ...state, currentNote: action.payload };
        
        case ACTION_CHANGE_NOTES:
            return { ...state, notes: action.payload };

        case ACTION_UPDATE_NOTE:
            return { ...state, notes: state.notes.map( note => note._id === action.payload._id? action.payload: note) }
    };

    return state;
};