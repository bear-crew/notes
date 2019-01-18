import { ACTION_CHANGE_NOTE_ID, ACTION_CHANGE_IS_OPEN } from '../index';

const initialState = {
    noteId: '',
    isOpen: 0
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_CHANGE_NOTE_ID:
            return { ...state, noteId: action.payload };
        case ACTION_CHANGE_IS_OPEN:
            return { ...state, isOpen: action.payload };
    };

    return state;
};