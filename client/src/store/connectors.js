import { changeNoteId, changeNotes } from './actions';
import { bindActionCreators } from 'redux';

export const putStateToProps = (state) => {
    return {
        noteId: state.noteId,
        notes: state.notes
    };
};

export const putActionsToProps = (dispatch) => {
    return {
        changeNoteId: bindActionCreators(changeNoteId, dispatch),
        changeNotes: bindActionCreators(changeNotes, dispatch)
    };
};