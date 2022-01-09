import { modalWindow } from "../../../modules/modal/modal.tmpl"; // взяли шаблон
import { modalContentTemplate} from './content.tmpl';                     //взяли нужный контент для шаблона
import ejs from 'ejs';


const data = {
}

const elem = document.querySelector('#root');
const modalTemplate = ejs.render(modalWindow, data);        
elem.insertAdjacentHTML('beforeend', modalTemplate)       // добавили на экран модальное окно

const contentContainer = document.querySelector('.modalWindowContent')

contentContainer.innerHTML = modalContentTemplate;


const modal = document.querySelector('.modalWindow');

modal.addEventListener('click', closeModal)



export const openModal = () => {
   const modal = document.querySelector('.modalWindow');
   modal.classList.add('active');
   modal.firstElementChild.classList.add('active');
}

function closeModal(e)  {
    e.target.classList.remove('active');
    e.target.firstElementChild.classList.remove('active');
}

