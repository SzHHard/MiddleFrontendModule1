import ejs from 'ejs';
import { registrationPage } from './registration.tmpl';
import registerLoginRedirectImg from '../../../../static/devImages/registerRedirect.png'

let object = {
    registerLoginRedirectImg
}

let registrationPageTemplate = ejs.render(registrationPage, object);

const elem = document.querySelector('#mainContent');

elem.innerHTML = registrationPageTemplate;