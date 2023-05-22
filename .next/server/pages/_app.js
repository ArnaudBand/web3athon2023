"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./src/redux/actions/type.js
var actions_type = __webpack_require__(2506);
;// CONCATENATED MODULE: ./src/redux/reducer/nfts.js

const nfts = (state = [], action)=>{
    const { type , payload  } = action;
    switch(type){
        case actions_type/* GET_DATA */.ZA:
            return {
                ...state,
                data: payload
            };
        case actions_type/* GET_SINGLE_NFT */.Wv:
            return {
                ...state,
                nft: payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducer_nfts = (nfts);

;// CONCATENATED MODULE: ./src/redux/reducer/siteSettings.js

const initialState = {
    navigation: false,
    wallet: false,
    search: false
};
const siteSettings_nfts = (state = initialState, action)=>{
    const { type , payload  } = action;
    switch(type){
        case actions_type/* NAVIGATION */.k2:
            return {
                ...state,
                navigation: payload
            };
        case actions_type/* WALLET */.Ag:
            return {
                ...state,
                wallet: payload
            };
        case actions_type/* SEARCH */.mo:
            return {
                ...state,
                search: payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const siteSettings = (siteSettings_nfts);

;// CONCATENATED MODULE: ./src/redux/reducer/index.js



/* harmony default export */ const reducer = ((0,external_redux_namespaceObject.combineReducers)({
    nfts: reducer_nfts,
    site: siteSettings
}));

;// CONCATENATED MODULE: ./src/redux/store.js




const store_initialState = {};
const middleware = [
    (external_redux_thunk_default())
];
const store = (0,external_redux_namespaceObject.createStore)(reducer, store_initialState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)(...middleware)));
/* harmony default export */ const redux_store = (store);

;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
        store: redux_store,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        type: "text/css",
                        rel: "stylesheet",
                        href: "/css/plugins.css?ver=4.1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        type: "text/css",
                        rel: "stylesheet",
                        href: "/css/style.css?ver=4.1"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ag": () => (/* binding */ WALLET),
/* harmony export */   "Wv": () => (/* binding */ GET_SINGLE_NFT),
/* harmony export */   "ZA": () => (/* binding */ GET_DATA),
/* harmony export */   "k2": () => (/* binding */ NAVIGATION),
/* harmony export */   "mo": () => (/* binding */ SEARCH)
/* harmony export */ });
const GET_DATA = "GET_DATA";
const GET_SINGLE_NFT = "GET_SINGLE_NFT";
// set settings
const NAVIGATION = "NAVIGATION";
const WALLET = "WALLET";
const SEARCH = "SEARCH";


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5719));
module.exports = __webpack_exports__;

})();