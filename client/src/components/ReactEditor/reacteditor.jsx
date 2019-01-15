import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import {convertToRaw, convertFromRaw} from "draft-js";
import axios from 'axios';

class ReactEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    const contentState = editorState.getCurrentContent();
    let request = {
      content: convertToRaw(contentState)
    }
    request = JSON.stringify(request)
    fetch('http://localhost:3001/note', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: request
    });
  }  
    // request = JSON.stringify(request);
    // sendData.open('POST', '/note', false);
    // sendData.setRequestHeader('Content-type','application/json; charset=utf-8');
    // sendData.send(request);
    // console.log(convertToRaw(contentState));

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={this.onEditorStateChange}
      />
    )
  }
}

export default ReactEditor;

