import ejs from 'ejs';
import { template } from './notFoundScreen.tmpl'; 

let object = {}

let page404 = ejs.render(template, object)

let root = document.querySelector('#root');

if(window.location.pathname !== '/'){
    root.innerHTML = page404;
}
