import { modalWindow } from "../../../modules/modal/modal.tmpl"; // взяли шаблон
import { modalContentTemplate} from './content.tmpl';                     //взяли нужный контент для шаблона
import ejs from 'ejs';

console.log(modalContentTemplate);

const data = {
}

const elem = document.querySelector('#root');
const modalTemplate = ejs.render(modalWindow, data);        
// elem.insertAdjacentHTML('beforeend', modalTemplate)       // добавили на экран модальное окно

// const contentContainer = document.querySelector('.modalWindowContent')

// console.log(modalTemplate);
// contentContainer.innerHTML = modalContentTemplate;



// раскомментировать верх и удалить то, что между этих строк после разработки окна
    elem.innerHTML = modalTemplate;
    const contentContainer = document.querySelector('.modalWindowContent')

    console.log(modalTemplate);
    contentContainer.innerHTML = modalContentTemplate;
//



export const openModal = () => {
   const modal = document.querySelector('.modalWindow');
   modal.classList.add('active');
}

export const closeModal = () => {
    const modal = document.querySelector('.modalWindow');
    modal.classList.remove('active');
}

