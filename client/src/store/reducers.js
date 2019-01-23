import { ACTION_CHANGE_CURRENT_NOTE, ACTION_CHANGE_NOTES } from '../index';

const initialState = {
    currentNote: { },
    notes: []
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_CHANGE_CURRENT_NOTE: 
            return { ...state, currentNote: action.payload };
        
        case ACTION_CHANGE_NOTES:
            return { ...state, notes: action.payload };
    };

    return state;
};