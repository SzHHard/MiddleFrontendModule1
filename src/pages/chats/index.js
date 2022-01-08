import { chats } from "./chats.tmpl.js";
import ejs from 'ejs';
import avatar1 from '../../../static/avatars/szh.jpg'
import avatar2 from '../../../static/avatars/2.png'

let data = {
    text: 'леее',
    avatar1,
    avatar2
}

let template = ejs.render(chats, data);

const elem = document.querySelector('#mainContent');

if(window.location.pathname === '/chats') {
    elem.innerHTML = template;  //потом, возможно, поменять innerHTML на другие слова
}
