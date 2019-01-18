import { ACTION_CHANGE_NOTE_ID, ACTION_CHANGE_IS_OPEN } from '../index';

export const changeNoteId = (id) => {
    return {
        type: ACTION_CHANGE_NOTE_ID,
        payload: id
    };
};

export const changeIsOpen = (_isOpen) => {
    return {
        type: ACTION_CHANGE_IS_OPEN,
        payload: _isOpen
    };
};