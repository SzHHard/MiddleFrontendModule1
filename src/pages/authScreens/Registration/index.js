import ejs from 'ejs';
import { registrationPage } from './registration.tmpl';
import registerRedirectImg from '../../../../static/devImages/registerRedirect.png'

let object = {
    registerRedirectImg
}

let registrationPageTemplate = ejs.render(registrationPage, object);

const elem = document.querySelector('#mainContent');

if(window.location.pathname === '/registration'){
    elem.innerHTML = registrationPageTemplate;
}
