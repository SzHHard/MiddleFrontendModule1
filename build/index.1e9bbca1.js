function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequireae13;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequireae13=o),o.register("bXuNP",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("bXuNP").register(JSON.parse('{"8bMKF":"index.1e9bbca1.js","9ui3t":"szh.9e914510.jpg","klW5B":"2.0d87ed5f.png"}'));o.register("8wf3I",(function(e,t){var n=o("iCyng"),r=o("jz00A"),i=o("jxbUi"),s=!1,a=o("jUu3B").version,c="locals",l=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],u=l.concat("cache"),h=/^\uFEFF/;function p(t,r){var i;if(r.some((function(r){return i=e.exports.resolveInclude(t,r,!0),n.existsSync(i)})))return i}function f(t,n){var r,i=t.filename,o=arguments.length>1;if(t.cache){if(!i)throw new Error("cache option requires a filename");if(r=e.exports.cache.get(i))return r;o||(n=m(i).toString().replace(h,""))}else if(!o){if(!i)throw new Error("Internal EJS error: no file name or template provided");n=m(i).toString().replace(h,"")}return r=e.exports.compile(n,t),t.cache&&e.exports.cache.set(i,r),r}function d(t,n,r){var i;if(!r){if("function"==typeof e.exports.promiseImpl)return new e.exports.promiseImpl((function(e,r){try{e(i=f(t)(n))}catch(e){r(e)}}));throw new Error("Please provide a callback function")}try{i=f(t)(n)}catch(e){return r(e)}r(null,i)}function m(t){return e.exports.fileLoader(t)}function g(t,r){var o=i.shallowCopy({},r);if(o.filename=function(t,r){var i,o,s=r.views,a=/^[A-Za-z]+:\\|^\//.exec(t);if(a&&a.length)t=t.replace(/^\/*/,""),i=Array.isArray(r.root)?p(t,r.root):e.exports.resolveInclude(t,r.root||"/",!0);else if(r.filename&&(o=e.exports.resolveInclude(t,r.filename),n.existsSync(o)&&(i=o)),!i&&Array.isArray(s)&&(i=p(t,s)),!i&&"function"!=typeof r.includer)throw new Error('Could not find the include file "'+r.escapeFunction(t)+'"');return i}(t,o),"function"==typeof r.includer){var s=r.includer(t,o.filename);if(s&&(s.filename&&(o.filename=s.filename),s.template))return f(o,s.template)}return f(o)}function v(e,t,n,r,i){var o=t.split("\n"),s=Math.max(r-3,0),a=Math.min(o.length,r+3),c=i(n),l=o.slice(s,a).map((function(e,t){var n=t+s+1;return(n==r?" >> ":"    ")+n+"| "+e})).join("\n");throw e.path=c,e.message=(c||"ejs")+":"+r+"\n"+l+"\n\n"+e.message,e}function x(e){return e.replace(/;(\s*$)/,"$1")}function w(t,n){n=n||{};var r={};this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",r.client=n.client||!1,r.escapeFunction=n.escape||n.escapeFunction||i.escapeXML,r.compileDebug=!1!==n.compileDebug,r.debug=!!n.debug,r.filename=n.filename,r.openDelimiter=n.openDelimiter||e.exports.openDelimiter||"<",r.closeDelimiter=n.closeDelimiter||e.exports.closeDelimiter||">",r.delimiter=n.delimiter||e.exports.delimiter||"%",r.strict=n.strict||!1,r.context=n.context,r.cache=n.cache||!1,r.rmWhitespace=n.rmWhitespace,r.root=n.root,r.includer=n.includer,r.outputFunctionName=n.outputFunctionName,r.localsName=n.localsName||e.exports.localsName||c,r.views=n.views,r.async=n.async,r.destructuredLocals=n.destructuredLocals,r.legacyInclude=void 0===n.legacyInclude||!!n.legacyInclude,r.strict?r._with=!1:r._with=void 0===n._with||n._with,this.opts=r,this.regex=this.createRegex()}e.exports.cache=i.cache,e.exports.fileLoader=n.readFileSync,e.exports.localsName=c,e.exports.promiseImpl=new Function("return this;")().Promise,e.exports.resolveInclude=function(e,t,n){var i=r.dirname,o=r.extname,s=(0,r.resolve)(n?t:i(t),e);return o(e)||(s+=".ejs"),s},e.exports.compile=function(e,t){return t&&t.scope&&(s||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),s=!0),t.context||(t.context=t.scope),delete t.scope),new w(e,t).compile()},e.exports.render=function(e,t,n){var r=t||{},o=n||{};return 2==arguments.length&&i.shallowCopyFromList(o,r,l),f(o,e)(r)},e.exports.renderFile=function(){var e,t,n,r=Array.prototype.slice.call(arguments),o=r.shift(),s={filename:o};return"function"==typeof arguments[arguments.length-1]&&(e=r.pop()),r.length?(t=r.shift(),r.length?i.shallowCopy(s,r.pop()):(t.settings&&(t.settings.views&&(s.views=t.settings.views),t.settings["view cache"]&&(s.cache=!0),(n=t.settings["view options"])&&i.shallowCopy(s,n)),i.shallowCopyFromList(s,t,u)),s.filename=o):t={},d(s,t,e)},e.exports.Template=w,e.exports.clearCache=function(){e.exports.cache.reset()},w.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},w.prototype={createRegex:function(){var e="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",t=i.escapeRegExpChars(this.opts.delimiter),n=i.escapeRegExpChars(this.opts.openDelimiter),r=i.escapeRegExpChars(this.opts.closeDelimiter);return e=e.replace(/%/g,t).replace(/</g,n).replace(/>/g,r),new RegExp(e)},compile:function(){var e,t,n,o=this.opts,s="",a="",c=o.escapeFunction,l=o.filename?JSON.stringify(o.filename):"undefined";if(!this.source){if(this.generateSource(),s+='  var __output = "";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n',o.outputFunctionName&&(s+="  var "+o.outputFunctionName+" = __append;\n"),o.destructuredLocals&&o.destructuredLocals.length){for(var u="  var __locals = ("+o.localsName+" || {}),\n",h=0;h<o.destructuredLocals.length;h++){var p=o.destructuredLocals[h];h>0&&(u+=",\n  "),u+=p+" = __locals."+p}s+=u+";\n"}!1!==o._with&&(s+="  with ("+o.localsName+" || {}) {\n",a+="  }\n"),a+="  return __output;\n",this.source=s+this.source+a}e=o.compileDebug?"var __line = 1\n  , __lines = "+JSON.stringify(this.templateText)+"\n  , __filename = "+l+";\ntry {\n"+this.source+"} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n":this.source,o.client&&(e="escapeFn = escapeFn || "+c.toString()+";\n"+e,o.compileDebug&&(e="rethrow = rethrow || "+v.toString()+";\n"+e)),o.strict&&(e='"use strict";\n'+e),o.debug&&console.log(e),o.compileDebug&&o.filename&&(e=e+"\n//# sourceURL="+l+"\n");try{if(o.async)try{n=new Function("return (async function(){}).constructor;")()}catch(e){throw e instanceof SyntaxError?new Error("This environment does not support async/await"):e}else n=Function;t=new n(o.localsName+", escapeFn, include, rethrow",e)}catch(e){throw e instanceof SyntaxError&&(o.filename&&(e.message+=" in "+o.filename),e.message+=" while compiling ejs\n\n",e.message+="If the above error is not helpful, you may want to try EJS-Lint:\n",e.message+="https://github.com/RyanZim/EJS-Lint",o.async||(e.message+="\n",e.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),e}var f=o.client?t:function(e){return t.apply(o.context,[e||{},c,function(t,n){var r=i.shallowCopy({},e);return n&&(r=i.shallowCopy(r,n)),g(t,o)(r)},v])};if(o.filename&&"function"==typeof Object.defineProperty){var d=o.filename,m=r.basename(d,r.extname(d));try{Object.defineProperty(f,"name",{value:m,writable:!1,enumerable:!1,configurable:!0})}catch(e){}}return f},generateSource:function(){this.opts.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var e=this,t=this.parseTemplateText(),n=this.opts.delimiter,r=this.opts.openDelimiter,i=this.opts.closeDelimiter;t&&t.length&&t.forEach((function(o,s){var a;if(0===o.indexOf(r+n)&&0!==o.indexOf(r+n+n)&&(a=t[s+2])!=n+i&&a!="-"+n+i&&a!="_"+n+i)throw new Error('Could not find matching close tag for "'+o+'".');e.scanLine(o)}))},parseTemplateText:function(){for(var e,t=this.templateText,n=this.regex,r=n.exec(t),i=[];r;)0!==(e=r.index)&&(i.push(t.substring(0,e)),t=t.slice(e)),i.push(r[0]),t=t.slice(r[0].length),r=n.exec(t);return t&&i.push(t),i},_addOutput:function(e){if(this.truncate&&(e=e.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!e)return e;e=(e=(e=(e=e.replace(/\\/g,"\\\\")).replace(/\n/g,"\\n")).replace(/\r/g,"\\r")).replace(/"/g,'\\"'),this.source+='    ; __append("'+e+'")\n'},scanLine:function(e){var t,n=this.opts.delimiter,r=this.opts.openDelimiter,i=this.opts.closeDelimiter;switch(t=e.split("\n").length-1,e){case r+n:case r+n+"_":this.mode=w.modes.EVAL;break;case r+n+"=":this.mode=w.modes.ESCAPED;break;case r+n+"-":this.mode=w.modes.RAW;break;case r+n+"#":this.mode=w.modes.COMMENT;break;case r+n+n:this.mode=w.modes.LITERAL,this.source+='    ; __append("'+e.replace(r+n+n,r+n)+'")\n';break;case n+n+i:this.mode=w.modes.LITERAL,this.source+='    ; __append("'+e.replace(n+n+i,n+i)+'")\n';break;case n+i:case"-"+n+i:case"_"+n+i:this.mode==w.modes.LITERAL&&this._addOutput(e),this.mode=null,this.truncate=0===e.indexOf("-")||0===e.indexOf("_");break;default:if(this.mode){switch(this.mode){case w.modes.EVAL:case w.modes.ESCAPED:case w.modes.RAW:e.lastIndexOf("//")>e.lastIndexOf("\n")&&(e+="\n")}switch(this.mode){case w.modes.EVAL:this.source+="    ; "+e+"\n";break;case w.modes.ESCAPED:this.source+="    ; __append(escapeFn("+x(e)+"))\n";break;case w.modes.RAW:this.source+="    ; __append("+x(e)+")\n";break;case w.modes.COMMENT:break;case w.modes.LITERAL:this._addOutput(e)}}else this._addOutput(e)}this.opts.compileDebug&&t&&(this.currentLine+=t,this.source+="    ; __line = "+this.currentLine+"\n")}},e.exports.escapeXML=i.escapeXML,e.exports.__express=e.exports.renderFile,e.exports.VERSION=a,e.exports.name="ejs","undefined"!=typeof window&&(window.ejs=e.exports)})),o.register("iCyng",(function(e,t){})),o.register("jz00A",(function(e,t){var n=o("d6KlF");function r(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,t){for(var n,r="",i=0,o=-1,s=0,a=0;a<=e.length;++a){if(a<e.length)n=e.charCodeAt(a);else{if(47===n)break;n=47}if(47===n){if(o===a-1||1===s);else if(o!==a-1&&2===s){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var c=r.lastIndexOf("/");if(c!==r.length-1){-1===c?(r="",i=0):i=(r=r.slice(0,c)).length-1-r.lastIndexOf("/"),o=a,s=0;continue}}else if(2===r.length||1===r.length){r="",i=0,o=a,s=0;continue}t&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+e.slice(o+1,a):r=e.slice(o+1,a),i=a-o-1;o=a,s=0}else 46===n&&-1!==s?++s:s=-1}return r}var s={resolve:function(){for(var e,t="",o=!1,s=arguments.length-1;s>=-1&&!o;s--){var a;s>=0?a=arguments[s]:(void 0===e&&(e=n.cwd()),a=e),r(a),0!==a.length&&(t=a+"/"+t,o=47===a.charCodeAt(0))}return t=i(t,!o),o?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(r(e),0===e.length)return".";var t=47===e.charCodeAt(0),n=47===e.charCodeAt(e.length-1);return 0!==(e=i(e,!t)).length||t||(e="."),e.length>0&&n&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return r(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var n=arguments[t];r(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":s.normalize(e)},relative:function(e,t){if(r(e),r(t),e===t)return"";if((e=s.resolve(e))===(t=s.resolve(t)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var i=e.length,o=i-n,a=1;a<t.length&&47===t.charCodeAt(a);++a);for(var c=t.length-a,l=o<c?o:c,u=-1,h=0;h<=l;++h){if(h===l){if(c>l){if(47===t.charCodeAt(a+h))return t.slice(a+h+1);if(0===h)return t.slice(a+h)}else o>l&&(47===e.charCodeAt(n+h)?u=h:0===h&&(u=0));break}var p=e.charCodeAt(n+h);if(p!==t.charCodeAt(a+h))break;47===p&&(u=h)}var f="";for(h=n+u+1;h<=i;++h)h!==i&&47!==e.charCodeAt(h)||(0===f.length?f+="..":f+="/..");return f.length>0?f+t.slice(a+u):(a+=u,47===t.charCodeAt(a)&&++a,t.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(r(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,o=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!o){i=s;break}}else o=!1;return-1===i?n?"/":".":n&&1===i?"//":e.slice(0,i)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');r(e);var n,i=0,o=-1,s=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var a=t.length-1,c=-1;for(n=e.length-1;n>=0;--n){var l=e.charCodeAt(n);if(47===l){if(!s){i=n+1;break}}else-1===c&&(s=!1,c=n+1),a>=0&&(l===t.charCodeAt(a)?-1==--a&&(o=n):(a=-1,o=c))}return i===o?o=c:-1===o&&(o=e.length),e.slice(i,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!s){i=n+1;break}}else-1===o&&(s=!1,o=n+1);return-1===o?"":e.slice(i,o)},extname:function(e){r(e);for(var t=-1,n=0,i=-1,o=!0,s=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47!==c)-1===i&&(o=!1,i=a+1),46===c?-1===t?t=a:1!==s&&(s=1):-1!==t&&(s=-1);else if(!o){n=a+1;break}}return-1===t||-1===i||0===s||1===s&&t===i-1&&t===n+1?"":e.slice(t,i)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){r(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,i=e.charCodeAt(0),o=47===i;o?(t.root="/",n=1):n=0;for(var s=-1,a=0,c=-1,l=!0,u=e.length-1,h=0;u>=n;--u)if(47!==(i=e.charCodeAt(u)))-1===c&&(l=!1,c=u+1),46===i?-1===s?s=u:1!==h&&(h=1):-1!==s&&(h=-1);else if(!l){a=u+1;break}return-1===s||-1===c||0===h||1===h&&s===c-1&&s===a+1?-1!==c&&(t.base=t.name=0===a&&o?e.slice(1,c):e.slice(a,c)):(0===a&&o?(t.name=e.slice(1,s),t.base=e.slice(1,c)):(t.name=e.slice(a,s),t.base=e.slice(a,c)),t.ext=e.slice(s,c)),a>0?t.dir=e.slice(0,a-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};s.posix=s,e.exports=s})),o.register("d6KlF",(function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,l=[],u=!1,h=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):h=-1,l.length&&f())}function f(){if(!u){var e=a(p);u=!0;for(var t=l.length;t;){for(c=l,l=[];++h<t;)c&&c[h].run();h=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new d(e,t)),1!==l.length||u||a(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("jxbUi",(function(t,n){var r,i,o,s,a;e(t.exports,"escapeRegExpChars",(()=>r),(e=>r=e)),e(t.exports,"escapeXML",(()=>i),(e=>i=e)),e(t.exports,"shallowCopy",(()=>o),(e=>o=e)),e(t.exports,"shallowCopyFromList",(()=>s),(e=>s=e)),e(t.exports,"cache",(()=>a),(e=>a=e));var c=/[|\\{}()[\]^$+*?.]/g;r=function(e){return e?String(e).replace(c,"\\$&"):""};var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},u=/[&<>'"]/g;function h(e){return l[e]||e}(i=function(e){return null==e?"":String(e).replace(u,h)}).toString=function(){return Function.prototype.toString.call(this)+';\nvar _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n'},o=function(e,t){for(var n in t=t||{})e[n]=t[n];return e},s=function(e,t,n){for(var r=0;r<n.length;r++){var i=n[r];void 0!==t[i]&&(e[i]=t[i])}return e},a={_data:{},set:function(e,t){this._data[e]=t},get:function(e){return this._data[e]},remove:function(e){delete this._data[e]},reset:function(){this._data={}}}})),o.register("jUu3B",(function(e,t){e.exports=JSON.parse('{"name":"ejs","description":"Embedded JavaScript templates","keywords":["template","engine","ejs"],"version":"3.1.6","author":"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)","license":"Apache-2.0","bin":{"ejs":"./bin/cli.js"},"main":"./lib/ejs.js","jsdelivr":"ejs.min.js","unpkg":"ejs.min.js","repository":{"type":"git","url":"git://github.com/mde/ejs.git"},"bugs":"https://github.com/mde/ejs/issues","homepage":"https://github.com/mde/ejs","dependencies":{"jake":"^10.6.1"},"devDependencies":{"browserify":"^16.5.1","eslint":"^6.8.0","git-directory-deploy":"^1.5.1","jsdoc":"^3.6.4","lru-cache":"^4.0.1","mocha":"^7.1.1","uglify-js":"^3.3.16"},"engines":{"node":">=0.10.0"},"scripts":{"test":"mocha"}}')}));var s,a=o("8wf3I");o.register("kPq84",(function(t,n){var r;e(t.exports,"getBundleURL",(()=>r),(e=>r=e));var i={};function o(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),i[e]=t),t}})),s=o("kPq84").getBundleURL("8bMKF")+o("bXuNP").resolve("9ui3t");var c;c=o("kPq84").getBundleURL("8bMKF")+o("bXuNP").resolve("klW5B");let l={text:"леее",avatar1:t(s),avatar2:t(c)},u=t(a).render("\n<div class='chatsBlock'>\n    <div class = 'chatsBlock__searchbarContainer'>\n        <input placeholder=\"Search\" />\n        <div class='searchbarContainer__createGroupChatButton'>\n            <button> img '+'' </button>\n        </div>\n    </div>\n\n\n    \x3c!-- тут нужно будет сделать цикл с выводом чатов --\x3e\n    <div class='chatsBlock__chatPreviewContainer'>\n        <img src= <%= avatar1 %> alt='avatar'>\n        <div class='chatPreview'>\n            <div class='dialogName'> Mr Pointer </div>\n            <div class='dialogLastMessage'> <%= text %> куда прешь </div>\n        </div>\n    </div>  \n    <div class='chatsBlock__chatPreviewContainer'>\n        <img src= <%= avatar2 %> alt='avatar'>\n        <div class='chatPreview'>\n            <div class='dialogName'> Mr Pointer </div>\n            <div class='dialogLastMessage'> <%= text %> куда прешь! </div>\n        </div>\n    </div>  \n    \x3c!-- таких будет много --\x3e\n</div>\n",l);const h=document.querySelector("#mainContent");"chats"===window.location.pathname&&(h.innerHTML=u);
//# sourceMappingURL=index.1e9bbca1.js.map
