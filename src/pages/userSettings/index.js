import ejs from 'ejs';
import { settings } from './settings.tmpl';
import userAvatar from '../../../static/avatars/kindred.jpg';

let object = {
    userAvatar,
    username: 'IvanChick.clueyou'
}

let settingsTemplate = ejs.render(settings, object);

const elem = document.querySelector('#mainContent');


elem.innerHTML = settingsTemplate;


