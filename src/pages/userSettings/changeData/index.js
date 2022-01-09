import ejs from 'ejs';
import { changeData } from './changeData.tmpl';
import userAvatar from '../../../../static/avatars/kindred.jpg';
import { openModal, closeModal } from '../changeAvatarModal/handleModal';



let object = {
    userAvatar,
    username: 'IvanChick.clueyou',
}

let changeDataTemplate = ejs.render(changeData, object);

const elem = document.querySelector('#mainContent');


if (window.location.pathname === '/updateInfo') {
    elem.innerHTML = changeDataTemplate;

    const img = document.querySelector('#changeAvatar');
    img.addEventListener('click', openModal);
}