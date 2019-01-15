import React, { Component } from 'react';
import './list.css';    

class List extends Component {
    state = {  }
    render() { 
        return (
            <ul className="notes">
                <li>
                    <div className="out">
                        <h2>Виктория Викторова</h2>
                    </div>   
                    <p>Родилась 5 августа 1915 года в/на Украине в селе Первозвановка Полтавской губернии. В семь лет осталась полной сиротой. В семь лет осталась полной сиротой.</p>
                </li>
                <li><div className="out"><h2>Заметка 2</h2></div></li>
                <li><div className="out"><h2>Заметка 3</h2></div></li>
                <li><div className="out"><h2>Заметка 4</h2></div></li>
                <li><div className="out"><h2>Заметка 5</h2></div></li>
                <li>
                    <div className="out">
                        <h2>Виктория Викторова</h2>
                    </div>   
                    <p>Родилась 5 августа 1915 года в/на Украине в селе Первозвановка Полтавской губернии. В семь лет осталась полной сиротой. В семь лет осталась полной сиротой.</p>
                </li>
                <li><div className="out"><h2>Заметка 6</h2></div></li>
                <li><div className="out"><h2>Заметка 7</h2></div></li>
                <li><div className="out"><h2>Заметка 8</h2></div></li>
                <li><div className="out"><h2>Заметка 9</h2></div></li>
                <li><div className="out"><h2>Заметка 10</h2></div></li>
                <li><div className="out"><h2>Заметка 11</h2></div></li>
                <li><div className="out"><h2>Заметка 12</h2></div></li>
                <li><div className="out"><h2>Заметка 13</h2></div></li>
                <li><div className="out"><h2>Заметка 14</h2></div></li>
                <li><div className="out"><h2>Заметка 15</h2></div></li>
                <li><div className="out"><h2>Заметка 16</h2></div></li>
            </ul>
        );
    }
}

export default List