import { ACTION_CHANGE_CURRENT_NOTE, ACTION_CHANGE_NOTES, ACTION_UPDATE_NOTE, ACTION_DELETE_NOTE, ACTION_CHANGE_SEARCH } from '../index';

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

export const deleteNote = (noteId) => {
    return {
        type: ACTION_DELETE_NOTE,
        payload: noteId
    };
};

export const changeSearch = (search) => {
    return {
        type: ACTION_CHANGE_SEARCH,
        payload: search
    };
};