import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Card />, document.getElementById('root'));

serviceWorker.unregister();
