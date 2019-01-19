import { ACTION_CHANGE_NOTE_ID, ACTION_CHANGE_NOTES } from '../index';

export const changeNoteId = (id) => {
    return {
        type: ACTION_CHANGE_NOTE_ID,
        payload: id
    };
};

export const changeNotes = (_notes) => {
    return {
        type: ACTION_CHANGE_NOTES,
        payload: _notes
    };
};