import ejs from 'ejs';
import { changePassword } from './changePassword.tmpl';
import userAvatar from '../../../../../static/avatars/kindred.jpg';
import { openModal, closeModal } from '../../changeAvatarModal/handleModal';



let object = {
    userAvatar,
    username: 'IvanChick.clueyou',
}

let changePasswordTemplate = ejs.render(changePassword, object);

const elem = document.querySelector('#mainContent');


if (window.location.pathname === '/updatePassword') {
    elem.innerHTML = changePasswordTemplate;

    const img = document.querySelector('#changeAvatar');
    img.addEventListener('click', openModal);
}