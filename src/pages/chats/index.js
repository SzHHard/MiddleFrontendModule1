import { chats } from "./chats.tmpl.js";
import ejs from 'ejs';
import avatar from '../../../static/avatars/szh.jpg'

let data = {
    text: 'леее',
    avatar: avatar
}

let template = ejs.render(chats, data);

const elem = document.querySelector('#chatsPreviewPage');

elem.innerHTML = template;  //потом, возможно, поменять innerHTML на другие слова

console.log(chats);
