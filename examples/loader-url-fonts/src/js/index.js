import '../css/styles.css';
import { message } from './message-module.js'; 
import caceresJS from '../images/caceresJS.png';

document.write(message);

const img = document.createElement('img');
img.setAttribute('src', caceresJS);
document.body.append(img);