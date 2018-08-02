/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index_js__ = __webpack_require__(3);


class Negociacao {

    constructor(
        _data = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["a" /* obrigatorio */]('data'),
        _quantidade = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["a" /* obrigatorio */]('quantidade'),
        _valor = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["a" /* obrigatorio */]('valor')) {
        
        Object.assign(this, { _quantidade, _valor })
        this._data = new Date(_data.getTime());
        Object.freeze(this);
    }

    get volume() {

        return this._quantidade * this._valor;
    }

    get data() {

        return new Date(this._data.getTime());
    }

    get quantidade() {

        return this._quantidade;
    }

    get valor() {

        return this._valor;
    }

    equals(negociacao) {

        return JSON.stringify(this) == JSON.stringify(negociacao);
    }      
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Negociacao;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isApplicationException */
/* unused harmony export getExceptionMessage */
class ApplicationException extends Error {

    constructor(msg = '') {

        super(msg);
        this.name = this.constructor.name;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ApplicationException;
 

const exception = ApplicationException;

function isApplicationException(err) {

    return err instanceof exception ||
        Object.getPrototypeOf(err) instanceof exception;
}

function getExceptionMessage(err) {

    if(isApplicationException(err)) {
        return err.message;

    } else {
        console.log(err);
        return 'Não foi possível realizar a operação';
    }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class View {

    constructor(seletor) {

        this._elemento = document.querySelector(seletor);
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }

    template(model) {

        throw new Error('Você precisa implementar o método template');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = View;
  

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bind_js__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConnectionFactory_js__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DaoFactory_js__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ApplicationException_js__ = __webpack_require__(1);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HttpService_js__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ProxyFactory_js__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_index_js__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__decorators_Debounce_js__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__decorators_Controller_js__ = __webpack_require__(20);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Obrigatorio_js__ = __webpack_require__(21);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__Obrigatorio_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__decorators_BindEvent_js__ = __webpack_require__(22);
/* unused harmony namespace reexport */












/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ProxyFactory {
    
    static create(objeto, props, armadilha) {
        
        return new Proxy(objeto, {
             
            get(target, prop, receiver) {
                
                if(ProxyFactory._ehFuncao(target[prop]) 
                    && props.includes(prop)) {
                
                    return function() {

                        console.log(`"${prop}" disparou a armadilha`);
                        target[prop].apply(target, arguments);
                        armadilha(target);
                    }

                } else {

                    return target[prop];
                }
            },

             set(target, prop, value, receiver) {
                
                 const updated = Reflect.set(target, prop, value);
                 if(props.includes(prop)) armadilha(target);
                 return updated;
             }
             
         });
   }

    static _ehFuncao(fn) {

        return typeof(fn) == typeof(Function);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProxyFactory;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const stores = ['negociacoes'];
let connection = null;
let close = null;

class ConnectionFactory {

    constructor() {

        throw new Error('Não é possível criar instâncias dessa classe');
    }

    static getConnection() {

        return new Promise((resolve, reject) => {

            if (connection) return resolve(connection);

            const openRequest = indexedDB.open('jscangaceiro', 2);

            openRequest.onupgradeneeded = e => {

                ConnectionFactory._createStores(e.target.result);

            };

            openRequest.onsuccess = e => {

                connection = e.target.result;

                close = connection.close.bind(connection);

                connection.close = () => {
                    throw new Error('Você não pode fechar diretamente a conexão');
                };

                resolve(e.target.result);

            };

            openRequest.onerror = e => {

                console.log(e.target.error)
                reject(e.target.error.name)

            };

        });
    }

    static _createStores(connection) {

        stores.forEach(store => {

            if (connection.objectStoreNames.contains(store))
                connection.deleteObjectStore(store);

            connection.createObjectStore(store, { autoIncrement: true });
        });
    }

    static closeConnection() {

        if (connection) {
            close();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ConnectionFactory;




/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Negociacao_js__ = __webpack_require__(0);


class NegociacaoDao {

    constructor(connection) {

        this._connection = connection;
        this._store = 'negociacoes';
    }


    adiciona(negociacao) {

        return new Promise((resolve, reject) => {

            const request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(negociacao);

            request.onsuccess = e => resolve();
            request.onerror = e => {

                console.log(e.target.error);
                reject('Não foi possível salvar a negociação');
            }
        });
    }
    listaTodos() {

        return new Promise((resolve, reject) => {

            const negociacoes = [];

            const cursor = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .openCursor();

            cursor.onsuccess = e => {

                const atual = e.target.result;

                if (atual) {

                    const negociacao = new __WEBPACK_IMPORTED_MODULE_0__Negociacao_js__["a" /* Negociacao */](
                        atual.value._data,
                        atual.value._quantidade,
                        atual.value._valor);

                    negociacoes.push(negociacao);
                    atual.continue();

                } else {

                    resolve(negociacoes);
                }
            };

            cursor.onerror = e => {
                console.log(e.target.error);
                reject('Não foi possível listar nas negociações');
            }

        });
    }

    apagaTodos() {

        return new Promise((resolve, reject) => {

            const request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .clear();

            request.onsuccess = e => resolve();

            request.onerror = e => {
                console.log(e.target.error);
                reject('Não foi possível apagar as negociações');                
            };

        });
    }    
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NegociacaoDao;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class HttpService {

    _handleErros(res) {

        if (!res.ok) throw new Error(res.statusText);

        return res;
    }

    get(url) {

        return fetch(url)
            .then(res => this._handleErros(res))
            .then(res => res.json());

        // return new Promise((resolve, reject) => {

        //     const xhr = new XMLHttpRequest();

        //     xhr.open('GET', url);

        //     xhr.onreadystatechange = () => {

        //         if (xhr.readyState == 4) {

        //             if (xhr.status == 200) {

        //                 resolve(JSON.parse(xhr.responseText));
        //             } else {

        //                 console.log(xhr.responseText);
        //                 reject(xhr.responseText);
        //             }
        //         }
        //     };

        //     xhr.send();

        // });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HttpService;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DataInvalidaException_js__ = __webpack_require__(9);


class DateConverter {

    constructor() {

        throw new Error('Esta classe não pode ser instanciada');
    }

    static paraTexto(data) {

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static paraData(texto) {
        if (!/\d{2}\/\d{2}\/\d{4}/.test(texto))
            throw new __WEBPACK_IMPORTED_MODULE_0__DataInvalidaException_js__["a" /* DataInvalidaException */]();

        return new Date(...texto.split('/')
            .reverse()
            .map((item, indice) =>
                item - indice % 2));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DateConverter;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ApplicationException_js__ = __webpack_require__(1);


class DataInvalidaException extends __WEBPACK_IMPORTED_MODULE_0__util_ApplicationException_js__["a" /* ApplicationException */] {

    constructor() {

        super('A data deve estar no formato dd/mm/aaaa');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DataInvalidaException;
  

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_NegociacaoController_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_NegociacaoController_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__controllers_NegociacaoController_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_index_js__ = __webpack_require__(12);



const controller = new __WEBPACK_IMPORTED_MODULE_0__controllers_NegociacaoController_js__["NegociacaoController"]();

const negociacao = new __WEBPACK_IMPORTED_MODULE_1__domain_index_js__["a" /* Negociacao */](new Date(), 1, 200);
const headers = new Headers();
headers.set('Content-Type', 'application/json');
const body = JSON.stringify(negociacao);
const method = 'POST';

const config = {
    method,
    headers,
    body
};

fetch('/negociacoes', config)
    .then(() => console.log('Dado enviado com sucesso!'));


/***/ }),
/* 11 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: C:\\Users\\Janiel\\Desktop\\jscangaceiro\\client\\app-src\\controllers\\NegociacaoController.js Unexpected character '@' (5:0)\nYou may need an appropriate loader to handle this file type.\n| import { getNegociacaoDao, Bind, getExceptionMessage, debounce, controller, bindEvent }  from '../util/index.js';\n| \n| @controller('#data', '#quantidade',\t'#valor')\n| export class NegociacaoController {\n| ");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__negociacao_Negociacao_js__ = __webpack_require__(0);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__negociacao_Negociacao_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__negociacao_NegociacaoDao_js__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__negociacao_NegociacaoService_js__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__negociacao_Negociacoes_js__ = __webpack_require__(24);
/* unused harmony namespace reexport */





/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProxyFactory_js__ = __webpack_require__(4);


class Bind {

    constructor(model, view, ...props) {

       const proxy = __WEBPACK_IMPORTED_MODULE_0__ProxyFactory_js__["a" /* ProxyFactory */].create(model, props, model => {
           view.update(model)
       });

       view.update(model);

       return proxy;
    }
}
/* unused harmony export Bind */


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getNegociacaoDao */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnectionFactory_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_negociacao_NegociacaoDao_js__ = __webpack_require__(6);



async function getNegociacaoDao() {

    let conn = await __WEBPACK_IMPORTED_MODULE_0__ConnectionFactory_js__["a" /* ConnectionFactory */].getConnection();
    return new __WEBPACK_IMPORTED_MODULE_1__domain_negociacao_NegociacaoDao_js__["a" /* NegociacaoDao */](conn);
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_MensagemView_js__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_NegociacoesView_js__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_View_js__ = __webpack_require__(2);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Mensagem_js__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__converters_DataInvalidaException_js__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__converters_DateConverter_js__ = __webpack_require__(8);
/* unused harmony namespace reexport */







/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_js__ = __webpack_require__(2);


class MensagemView extends __WEBPACK_IMPORTED_MODULE_0__View_js__["a" /* View */] {

    template(model) {

        return model.texto
            ? `<p class="alert alert-info">${model.texto}</p>`
            : `<p></p>`;
    }
}
/* unused harmony export MensagemView */
  

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__converters_DateConverter_js__ = __webpack_require__(8);



class NegociacoesView extends __WEBPACK_IMPORTED_MODULE_0__View_js__["a" /* View */] {

    template(model) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.paraArray().map(negociacao =>
                `
                    <tr>
                        <td>${__WEBPACK_IMPORTED_MODULE_1__converters_DateConverter_js__["a" /* DateConverter */].paraTexto(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>                        
                `).join('')}
            </tbody>
            
            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>${model.volumeTotal}</td>            
                </tr>
            </tfoot>
            
        </table>               
        `
    }
}
/* unused harmony export NegociacoesView */


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Mensagem {

    constructor(texto = '') {
        
        this._texto = texto
    }

    get texto() {

        return this._texto;
    }

    set texto(texto) {

        this._texto = texto;
    }    
}
/* unused harmony export Mensagem */


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export debounce */
function debounce(milissegundos = 500) {
	
	return function(target, key, descriptor) {

		const metodoOriginal = descriptor.value;

		let timer = 0;

		descriptor.value = function(...args) {

			if(event) event.preventDefault();

			clearTimeout(timer);

			timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
		}

		return descriptor;
	}
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export controller */
function controller(...seletores) {

    const elemetents = seletores.map(seletor => document.querySelector(seletor));

    return function(constructor) {
        const constructorOriginal = constructor;

        const constructorNovo = function() {

            const instance = new constructorOriginal(...elemetents);

            Object
                .getOwnPropertyNames(constructorOriginal.prototype)
                .forEach(property => {

                    if (Reflect.hasMetadata('bindEvent', instance, property)) {

                        associaEvento(instance,
                            Reflect.getMetadata('bindEvent', instance, property));
                    }
                });

        }

        constructorNovo.prototype = constructorOriginal.prototype;

        return constructorNovo;
    }
}

function associaEvento(instance, metadado) {

    document
        .querySelector(metadado.selector)
        .addEventListener(metadado.event, event => {
            if (metadado.prevent) event.preventDefault();
            instance[metadado.propertyKey](event);
        });
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = obrigatorio;
function obrigatorio(parametro) {

    throw new Error(`${parametro} é um parâmetro obrigatório`);
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bindEvent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index_js__ = __webpack_require__(3);


function bindEvent(
    event = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["a" /* obrigatorio */]('event'),
    selector = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["a" /* obrigatorio */]('selector'),
    prevent = true) {

    return function(target, propertyKey, descriptor) {

        Reflect.defineMetadata(
            'bindEvent',
            { event, selector, prevent, propertyKey },
            Object.getPrototypeOf(target), propertyKey);

        return descriptor;
    }

}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_HttpService_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Negociacao_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__ = __webpack_require__(1);




class NegociacaoService {

    constructor() {

        this._http = new __WEBPACK_IMPORTED_MODULE_0__util_HttpService_js__["a" /* HttpService */]();
    }

    obtemNegociacoesDaSemana() {
    
        return this._http
            .get('negociacoes/semana')
            .then(
                dados => 
                    dados.map(objeto => 
                        new __WEBPACK_IMPORTED_MODULE_1__Negociacao_js__["a" /* Negociacao */](new Date(objeto.data), objeto.quantidade, objeto.valor))
                ,
                err => {

                    throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('Não foi possível obter as negociações da semana');
                }
            );
    }

    obtemNegociacoesDaSemanaAnterior() {
        
        return this._http
            .get('negociacoes/anterior')
            .then(
                dados => dados.map(objeto =>
                    new __WEBPACK_IMPORTED_MODULE_1__Negociacao_js__["a" /* Negociacao */](new Date(objeto.data), objeto.quantidade, objeto.valor))
                ,
                err => {
                    
                    throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('Não foi possível obter as negociações da semana anterior');
                }
            );
    }

    obtemNegociacoesDaSemanaRetrasada() {
        
        return this._http
            .get('negociacoes/retrasada')
            .then(
                dados => dados.map(objeto =>
                    new __WEBPACK_IMPORTED_MODULE_1__Negociacao_js__["a" /* Negociacao */](new Date(objeto.data), objeto.quantidade, objeto.valor))
                ,
                err => {
                    throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('Não foi possível obter as negociações da semana retrasada');
                }
            );
    }  

    async obtemNegociacoesDoPeriodo() {
        try {
            let periodo = await Promise.all([
                this.obtemNegociacoesDaSemana(),
                this.obtemNegociacoesDaSemanaAnterior(),
                this.obtemNegociacoesDaSemanaRetrasada()
            ]);

            return periodo
                .reduce((novoArray, item) => novoArray.concat(item), [])
                .sort((a, b) => b.data.getTime() - a.data.getTime());
        } catch(err) {

            console.log(err);
            throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('Não foi possível obter as negociações do período');
        }
    }             
}
/* unused harmony export NegociacaoService */


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Negociacoes {
    
    constructor() {

        this._negociacoes = [];
        Object.freeze(this);
    }


    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
    }

    paraArray() {

        return [].concat(this._negociacoes);
    }

    get volumeTotal() {

        return this._negociacoes
            .reduce((total, negociacao) =>
                total + negociacao.volume, 0);
    }

    esvazia() {

        this._negociacoes.length = 0;
    }
}
/* unused harmony export Negociacoes */


/***/ })
/******/ ]);