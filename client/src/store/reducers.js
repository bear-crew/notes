import { ACTION_CHANGE_NOTE_ID, ACTION_CHANGE_NOTES } from '../index';

const initialState = {
    noteId: '',
    notes: []
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_CHANGE_NOTE_ID: 
            return { ...state, noteId: action.payload };
        
        case ACTION_CHANGE_NOTES:
            return { ...state, notes: action.payload };
    };

    return state;
};