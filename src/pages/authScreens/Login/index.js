import ejs from 'ejs';
import { loginPage } from './login.tmpl.js';
import registerRedirectImg from '../../../../static/devImages/registerRedirect.png'

let object = {
    registerRedirectImg
}

let loginPageTemplate = ejs.render(loginPage, object);

const elem = document.querySelector('#mainContent');

if(window.location.pathname === '/login'){  
    elem.innerHTML = loginPageTemplate;
}

