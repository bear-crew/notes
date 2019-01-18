import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import {convertToRaw, convertFromRaw} from "draft-js";
import './reacteditor.css';

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

export default ReactEditor;

