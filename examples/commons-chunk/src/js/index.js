import '../css/styles.css';
import React from 'react';
import { render } from 'react-dom';
import Users from './components/users.js';
import data from './users.json';

render(<Users data={data} />, document.getElementById('users'));

