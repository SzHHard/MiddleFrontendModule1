function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},l=n.parcelRequireae13;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){i[e]=n},n.parcelRequireae13=l),l("bXuNP").register(JSON.parse('{"cSpQD":"index.202598dd.js","4UQhZ":"registerRedirect.750b6fcb.png"}'));var a=l("8wf3I");let r={registerRedirectImg:e(l("kPq84").getBundleURL("cSpQD")+l("bXuNP").resolve("4UQhZ"))},s=e(a).render("\n    <div class='loginContainer'>\n        <div class='registerButtonContainer'>\n            <button>Зарегистрироваться <img src=<%= registerRedirectImg %> /> </button> \n        </div>\n        <div class='formContainer'>\n            <form>\n                <div class='inputField'>\n                    <label for='first_name'>Name:</label>\n                    <input class='textInput' type='text' id='first_name' name='first_name'/>\n                </div>\n                <div class='inputField'>\n                    <label for='login'>Surname:</label>\n                    <input class='textInput' type='text' id='second_name' name='second_name'/>\n                </div>\n                <div class='inputField'>\n                    <label for='login'>Login:</label>\n                    <input class='textInput' type='text' id='login' name='login'/>\n                </div>\n                 <div class='inputField'>\n                    <label for='email'>Email:</label>\n                    <input class='textInput' type='text' id='email' name='email'/>\n                </div>\n                <div class='inputField'>\n                    <label for='phone'>Phone:</label>\n                    <input class='textInput' type='text' id='phone' name='phone'/>\n                </div>\n                <div class='inputField'>\n                    <label for='password'>Password: </label>\n                    <input class='textInput' type='text' id='password' name='password' />\n                </div>\n                \n                <div class='checkboxContainer'>\n                    <input type='checkbox' />\n                    <label>Remember me</label>\n                </div>\n\n                <div class='submitContainer'>\n                    <button type='submit' >Войти</button>\n                </div>\n            </form>\n        </div>\n    </div>\n",r);const o=document.querySelector("#mainContent");"/registration"===window.location.pathname&&(o.innerHTML=s);
//# sourceMappingURL=index.202598dd.js.map
