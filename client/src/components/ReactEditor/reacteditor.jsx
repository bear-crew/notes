import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { convertToRaw, convertFromRaw } from "draft-js";
import { putStateToProps, putActionsToProps } from '../../store/connectors';
import { connect } from 'react-redux';
import './reacteditor.css';

class ReactEditor extends React.Component {
	state = {
		editorState: EditorState.createEmpty()
	};

	componentDidUpdate(prevProps, prevState) {
		// console.log("prev props = ",prevProps);
		// console.log("new props = ", this.props);
		if(prevProps.currentNote !== this.props.currentNote && this.props.currentNote) { //TO FIX additional condition
			console.log("didUpdate", this.props.currentNote.content);
			console.log("currentContent", convertToRaw(this.state.editorState.getCurrentContent()));
			console.log("this1", this.state.editorState.getCurrentContent()); //TODO check if content in database is empty and create empty note manually
			// this.state.editorState.push(this.state.editorState, convertFromRaw(this.props.currentNote.content));
		}

	}

	onEditorStateChange = (editorState) => {
		this.setState({
			editorState,
		});
		const contentState = editorState.getCurrentContent();
		let request = {
			content: convertToRaw(contentState)
		}
		console.log("onEditorStateChange", request.content)
		// fetch('http://localhost:3001/note', {
		//   method: 'post',
		//   headers: {'Content-Type':'application/json'},
		//   body: request
		// });
	}
	// request = JSON.stringify(request);
	// sendData.open('POST', '/note', false);
	// sendData.setRequestHeader('Content-type','application/json; charset=utf-8');
	// sendData.send(request);
	// console.log(convertToRaw(contentState));

	render() {
		if(this.props.noteId === "") {
			console.log("no note");
			return null;
		}
		console.log("sdasd");
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