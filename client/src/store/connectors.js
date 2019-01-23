import { changeCurrentNote, changeNotes } from './actions';
import { bindActionCreators } from 'redux';

export const putStateToProps = (state) => {
    return {
        currentNote: state.currentNote,
        notes: state.notes
    };
};

export const putActionsToProps = (dispatch) => {
    return {
        changeCurrentNote: bindActionCreators(changeCurrentNote, dispatch),
        changeNotes: bindActionCreators(changeNotes, dispatch)
    };
};