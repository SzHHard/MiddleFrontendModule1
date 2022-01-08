import ejs from 'ejs';
import { loginPage } from './login.template';
import registerRedirectImg from '../../../../static/devImages/registerRedirect.png'

let object = {
    registerRedirectImg
}

let loginPageTemplate = ejs.render(loginPage, object);

let elem = document.querySelector('#mainContent');

elem.innerHTML = loginPageTemplate;