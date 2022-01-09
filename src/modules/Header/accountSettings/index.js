//import ejs from 'ejs';
import { settingsModal } from './modal.tmpl';
import { modalWindow } from '../../modal/modal.tmpl';


const elem = document.querySelector('#root');

elem.insertAdjacentHTML('beforeend', modalWindow)       

elem.lastElementChild.lastElementChild.innerHTML = settingsModal;
const theDiv = document.querySelector('.settingsModal')


const contentContainer = theDiv.closest('.modalWindowContent')
contentContainer.innerHTML = settingsModal;

const modal = contentContainer.closest('.modalWindow');
modal.addEventListener('click', closeModal)


export function openModal() {                             
    console.log('aye')
    const theDiv = document.querySelector('.settingsModal')
    const modal = theDiv.closest('.modalWindow');
    modal.classList.add('active');
    modal.firstElementChild.classList.add('active');
}

function closeModal(e) {
    e.target.classList.remove('active');
    e.target.firstElementChild.classList.remove('active');
}