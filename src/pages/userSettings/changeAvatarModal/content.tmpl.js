let modalContent = /*html*/ `
    <div class='changeAvatarModalContent'>
        <h4><%= status %></h4>
        <div class='file'>Выбрать файл на компьютере</div>
        <button>Поменять</button>
    </div>
`

import ejs from 'ejs';

let data = {
    status: 'Загрузите файл'
}

export let modalContentTemplate = ejs.render(modalContent, data);