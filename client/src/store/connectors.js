import { changeCurrentNote, changeNotes, updateNote, deleteNote, changeSearch } from './actions';
import { bindActionCreators } from 'redux';

export const putStateToProps = (state) => {
    return {
        currentNote: state.currentNote,
        notes: state.notes,
        search: state.search
    };
};

export const putActionsToProps = (dispatch) => {
    return {
        changeCurrentNote: bindActionCreators(changeCurrentNote, dispatch),
        changeNotes: bindActionCreators(changeNotes, dispatch),
        updateNote: bindActionCreators(updateNote, dispatch),
        deleteNote: bindActionCreators(deleteNote, dispatch),
        changeSearch: bindActionCreators(changeSearch, dispatch)
    };
};