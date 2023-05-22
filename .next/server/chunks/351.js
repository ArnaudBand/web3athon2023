"use strict";
exports.id = 351;
exports.ids = [351];
exports.modules = {

/***/ 5351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Faq = ()=>{
    const faqs1 = [
        {
            title: "What is Meta Legends?",
            dec: "A handcrafted collection of 10,000 characters developed by artist Frenify. In its purest form, RENGA is art and the art of storytelling."
        },
        {
            title: "WHAT IS THE ART OF SEASONS?      ",
            dec: "A handcrafted collection of 10,000 characters developed by artist Frenify. In its purest form, RENGA is art and the art of storytelling."
        },
        {
            title: "HOW DO I STAY UPDATED AND SAFE?",
            dec: "A handcrafted collection of 10,000 characters developed by artist Frenify. In its purest form, RENGA is art and the art of storytelling."
        },
        {
            title: "WHAT IS META LEGENDS?",
            dec: "A handcrafted collection of 10,000 characters developed by artist Frenify. In its purest form, RENGA is art and the art of storytelling."
        }, 
    ];
    const faqs2 = [
        {
            title: "How can I mint my character?",
            dec: "A handcrafted collection of 10,000 characters developed by artist Frenify. In its purest form, RENGA is art and the art of storytelling."
        },
        {
            title: "HOW MANY LEGENDS IS ISSUED?",
            dec: "A handcrafted collection of 10,000 characters developed by artist Frenify. In its purest form, RENGA is art and the art of storytelling."
        },
        {
            title: "WHEN IS THE SALE DATE?",
            dec: "A handcrafted collection of 10,000 characters developed by artist Frenify. In its purest form, RENGA is art and the art of storytelling."
        },
        {
            title: "WHAT ABOUT BLOCKCHAIN?",
            dec: "A handcrafted collection of 10,000 characters developed by artist Frenify. In its purest form, RENGA is art and the art of storytelling."
        }, 
    ];
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(`a0`);
    const faqMap = (arr, index)=>{
        return arr.map((data, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fn_cs_accordion",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `acc_item ${index + i === active ? "active" : ""}`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "acc_header",
                            onClick: ()=>setActive(`${index + i}` === active ? null : `${index + i}`),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "fn__maintitle",
                                    "data-text": data.title,
                                    children: data.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "icon",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "acc_content",
                            style: {
                                display: `${index + i === active ? "block" : "none"}`
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: data.dec
                            })
                        })
                    ]
                })
            }, i));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "faq",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "fn_cs_faq",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "faq_col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "fn__maintitle",
                                "data-text": "FAQ",
                                children: "FAQ"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "fn_cs_divider",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "divider",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "desc",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Pellentesque eu ex iaculis, tempus ex eu, consectetur lectus. Aenean nec iaculis est, a mattis turpis. Morbi posuere lorem id risus luctus, luctus tristique enim luctus. Vivamus ut tincidunt erat."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Nunc nec sollicitudin elit, ut pretium dui. Nulla facilisis pulvinar odio ac suscipit. Quisque pretium, est id facilisis luctus, magna lorem posuere velit."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "faq_col",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "fn_cs_accordion",
                            children: faqMap(faqs1, "a")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "faq_col",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "fn_cs_accordion",
                            children: faqMap(faqs2, "b")
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Faq);


/***/ })

};
;