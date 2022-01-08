import { headerTemplate } from "./header.template";
import ejs from 'ejs';
import userAvatar from '../../../static/avatars/kindred.jpg'


let data = {
    userAvatar
}

let template = ejs.render(headerTemplate, data);

const elem = document.querySelector('#header');

elem.innerHTML = template;  //потом, возможно, поменять innerHTML на другие слова
