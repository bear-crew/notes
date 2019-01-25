import React from 'react';
//import { Editor } from 'react-draft-wysiwyg';
//import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { MegadraftEditor, editorStateFromRaw } from "megadraft";
import 'megadraft/dist/css/megadraft.css';
import { EditorState } from 'draft-js';
import { convertToRaw, convertFromRaw } from "draft-js";
import { putStateToProps, putActionsToProps } from '../../store/connectors';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import './reacteditor.css';

class ReactEditor extends React.Component {
	state = { };

	componentDidUpdate(prevProps) {
		if ( (this.props.currentNote && !prevProps.currentNote) || (this.props.currentNote && prevProps.currentNote && this.props.currentNote._id !== prevProps.currentNote._id) ) {
			if (this.props.currentNote.content) {
				let note = this.props.currentNote.content;
				if(!note.entityMap)
					note.entityMap = {};
				this.setState( { editorState: EditorState.createWithContent(convertFromRaw(note)) } );
			}
			else {
				this.setState( { editorState: EditorState.createEmpty() } );
			}
		}

		if (!this.props.currentNote && prevProps.currentNote)
			this.setState( {editorState: null} );
	}

	saveContent = debounce((request) => {
		fetch('http://localhost:3001/note', {
			method: 'post',
			headers: {
				'Content-Type':'application/json',
				'x-auth': localStorage.getItem('token')
			},
			body: JSON.stringify(request)
		})
	}, 500)

	onEditorStateChange = (editorState) => {
		console.log("editor-state-change");
		this.setState({
			editorState
		});

		let request = {
			id: this.props.currentNote._id,
			note: convertToRaw(editorState.getCurrentContent())
		}
		const { updateNote, changeCurrentNote } = this.props;
		this.props.currentNote.content = request.note;
		changeCurrentNote(this.props.currentNote);
		updateNote(this.props.currentNote);
		this.saveContent(request);
	}

	render() {
		if(!this.state.editorState) {
			return (
				<h3>Loading...</h3>
			);
		}

		return (
			<MegadraftEditor
				editorState={this.state.editorState}
				onChange={this.onEditorStateChange}
			/>
		)
	}
}

export default connect(putStateToProps, putActionsToProps)(ReactEditor);