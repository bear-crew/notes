import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, ContentState } from 'draft-js';
import { convertToRaw, convertFromRaw } from "draft-js";
import { putStateToProps, putActionsToProps } from '../../store/connectors';
import { connect } from 'react-redux';
import './reacteditor.css';
import { updateNote } from '../../store/actions';

class ReactEditor extends React.Component {
	state = {
		editorState: EditorState.createEmpty()
	};

	componentDidUpdate(prevProps) {
		if (prevProps.currentNote && this.props.currentNote && prevProps.currentNote._id !== this.props.currentNote._id) {
			if (this.props.currentNote.content) {
				console.log("govno", this.props.currentNote.content);
				//this.setState( { editorState: EditorState.createWithContent(convertFromRaw(this.props.currentNote.content)) } );
				this.setState( { editorState: EditorState.createWithContent(ContentState.createFromBlockArray(this.props.currentNote.content)) } );
			}
			else {
				this.setState( { editorState: EditorState.createEmpty() } );
				console.log("else", this.state.editorState);
			}
		}
	}

	onEditorStateChange = (editorState) => {
		this.setState({
			editorState,
		});

		console.log("pizda", convertToRaw(editorState.getCurrentContent()));

		fetch('http://localhost:3001/note', {
			method: 'post',
			headers: {
				'Content-Type':'application/json',
				'x-auth': localStorage.getItem('token')
			},
			body: JSON.stringify( {
				id: this.props.currentNote._id,
				//note: convertToRaw(editorState.getCurrentContent())
				note: editorState.getCurrentContent()
			} )
		})
		.then(res => {
			if (res.status === 200) {
				const { updateNote, changeCurrentNote } = this.props;
				res.json().then(result => {
					if (result) {
						updateNote(result);
						changeCurrentNote(result);
					}
				});
			}
			else
				console.log("401, 500 or 400");
		});
	}

	render() {
		return (
			<Editor
				editorState={this.state.editorState}
				onEditorStateChange={this.onEditorStateChange}
				toolbarClassName="block-edit"
				toolbar={{
					options: ['inline', 'image', 'list', 'blockType', 'link'],
					inline: {
						inDropdown: false,
						options: ['bold', 'italic']
					},
					blockType: {
						inDropdown: false,
						options: ['H1', 'H2', 'H3']
					},
					list: {
						inDropdown: false,
						options: ['unordered', 'ordered']
					},
				}}
			/>
		)
	}
}

export default connect(putStateToProps, putActionsToProps)(ReactEditor);