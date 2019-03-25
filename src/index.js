import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Note from './Note';
import Board from './Board';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Board />, document.getElementById('lauta'));
ReactDOM.render(<Note />, document.getElementById('nootti'));
serviceWorker.unregister();
