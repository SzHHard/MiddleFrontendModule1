//import ejs from 'ejs';
import { settingsModal } from './modal.tmpl';
import { modalWindow } from '../../modal/modal.tmpl';


const elem = document.querySelector('#root');

elem.insertAdjacentHTML('beforeend', modalWindow)       

//console.log('elem.lastElementChild.lastElementChildTEST1', elem.lastElementChild.lastElementChild)
//console.log(settingsModal)

elem.lastElementChild.lastElementChild.innerHTML = settingsModal;

//console.log('elem.lastElementChild.lastElementChildTEST2', elem.lastElementChild.lastElementChild)

const theDiv = document.querySelector('.settingsModal')
//console.log('s0', theDiv)
//console.log(theDiv.parentElement)
const contentContainer = theDiv.closest('.modalWindowContent')
//console.log('s1', contentContainer)
contentContainer.innerHTML = settingsModal;
// console.log('s2', contentContainer)
const modal = contentContainer.closest('.modalWindow');
modal.addEventListener('click', closeModal)


export function openModal() {                             
    const theDiv = document.querySelector('.settingsModal')
    const modal = theDiv.closest('.modalWindow');
    modal.classList.add('active');
    modal.firstElementChild.classList.add('active');
}

function closeModal(e) {
    e.target.classList.remove('active');
    e.target.firstElementChild.classList.remove('active');
}