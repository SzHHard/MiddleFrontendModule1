function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},d={},a=n.parcelRequireae13;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in d){var n=d[e];delete d[e];var a={id:e,exports:{}};return i[e]=a,n.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){d[e]=n},n.parcelRequireae13=a),a("bXuNP").register(JSON.parse('{"58yWx":"index.be2dd2e5.js","bDEYj":"kindred.20857057.jpg"}'));var s=a("8wf3I");var t;t=a("kPq84").getBundleURL("58yWx")+a("bXuNP").resolve("bDEYj");let l=e(s=a("8wf3I")).render("\n    <div class='changeAvatarModalContent'>\n        <h4><%= status %></h4>\n        <div class='file'>Выбрать файл на компьютере</div>\n        <button>Поменять</button>\n    </div>\n",{status:"Загрузите файл"});s=a("8wf3I");console.log(l);const r=document.querySelector("#root"),v=e(s).render("\n    <div class='modalWindow'>\n        <div class='modalWindowContent'>\n           \n        </div>\n    </div>\n",{});r.insertAdjacentHTML("beforeend",v);const o=document.querySelector(".modalWindowContent");console.log(v),o.innerHTML=l;let c={userAvatar:e(t),username:"IvanChick.clueyou"},u=e(s).render("\n\n    <a class=\"toChats\" href=\"/\">К чатам</a>\n\n    <div class='settingsContainer'>    \n\n        <div class='avatarAndNickname'>\n\n        <div class='balancerLeft'>\n           <div class='imgWrapper'> <img  id = 'changeAvatar' src=<%= userAvatar %> > </div>\n            <p> <%= username %> </p>\n        </div>\n\n        <div class='balancerRight'>\n        </div>\n\n\n        </div>\n        \n        <div class='fields'>\n            <div class='field'> <div class='left'> Почта: </div> <div class='right'> pochta@yandex.ru </div>  </div>\n            <div class='field'>  <div class='left'> Логин: </div> <div class='right'> ivanIvanov </div>  </div>\n            <div class='field'>  <div class='left'> Имя: </div> <div class='right'> Иван </div>  </div>\n            <div class='field'><div class='left'> Фамилия: </div> <div class='right'> Иванов </div>  </div> \n            <div class='field'> <div class='left'> Телефон: </div> <div class='right'> +7 (800) 555 35 35  </div>  </div> \n        </div>\n  \n        <div class = 'bottom'> <div class='bottomLeft'> <a href='#'> Изменить данные </a> </div> <div class='bottomRight'> <a href='#'> Изменить пароль </a> </div> </div>\n    </div>\n",c);document.querySelector("#mainContent").innerHTML=u;document.querySelector("#changeAvatar").addEventListener("click",(()=>{document.querySelector(".modalWindow").classList.add("active")}));
//# sourceMappingURL=index.be2dd2e5.js.map
