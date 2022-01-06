import ejs from 'ejs';
import { screen404 } from './notFoundScreen.tmpl'; 

let object = {}

let page404 = ejs.render(screen404, object)

let root = document.querySelector('#root');

if(window.location.pathname !== '/' && window.location.pathname !== '/bug' ){  
    root.innerHTML = page404;
}
