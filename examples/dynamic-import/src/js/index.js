import '../css/styles.css';
import React from 'react';
import { render } from 'react-dom';
import Users from './components/users.js';
import data from './users.json';

const $button = document.getElementById('message');
$button.addEventListener('click', async () => {
  const { default: message } = await import('./message.js');
  message();
})

render(<Users data={data} />, document.getElementById('users'));

