import '../css/styles.css';
import { message } from './message-module.js'; 
import caceresJS from '../images/caceresJS.png';
import data from './users.json';

document.write(message);

const img = document.createElement('img');
img.setAttribute('src', caceresJS);
document.body.append(img);

const ul = document.createElement('ul');
data.users.forEach((user) => {
  const li = document.createElement('li');
  li.textContent = user.name;
  ul.append(li)
})
document.body.append(ul)
