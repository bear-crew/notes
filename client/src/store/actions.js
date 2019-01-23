import { ACTION_CHANGE_CURRENT_NOTE, ACTION_CHANGE_NOTES, ACTION_UPDATE_NOTE } from '../index';

export const changeCurrentNote = (note) => {
    return {
        type: ACTION_CHANGE_CURRENT_NOTE,
        payload: note
    };
};

export const changeNotes = (_notes) => {
    return {
        type: ACTION_CHANGE_NOTES,
        payload: _notes
    };
};

export const updateNote = (note) => {
    return {
        type: ACTION_UPDATE_NOTE,
        payload: note
    };
};