import React, { Component } from 'react';

class DefaulNote extends Component {
    render() {
        return ( 
           <div className="megadraft">
                <h1>Welcome to Bear Crew Notes v0.1</h1>
                <h2>Store your notes right in a cloud!</h2>
                <h3>Available features:</h3>
                <p>Adding and deleting notes</p>
                <p>Searching through the notes</p>
                <p>Editing text:</p>
                <ul>
                    <li>Bold</li>
                    <li>Italic</li>
                    <li>Unorderd list</li>
                    <li>Ordered list</li>
                    <li>Headers</li>
                </ul>
                <p>Media content</p>
                <ul>
                    <li>Adding images</li>
                </ul>
                <h3>In the future updates (maybe):</h3>
                <p>Editing profile</p>
                <p>Better editor</p>
                <p>Sharing notes</p>
                <p>PDF export</p>
                <p>Adding tags</p>
                <p>Editing text:</p>
                <ul>
                    <li>Links</li>
                </ul>
                <p>Media content</p>
                <ul>
                    <li>Adding videos</li>
                </ul>      
           </div>
        );
    }
}

export default DefaulNote;