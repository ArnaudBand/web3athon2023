"use strict";
exports.id = 113;
exports.ids = [113];
exports.modules = {

/***/ 2113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/popup/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const { 0: img , 1: setImg  } = (0,external_react_.useState)(false);
    const { 0: imgValue , 1: setImgValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("img/")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const popup_ImageView = (ImageView);

;// CONCATENATED MODULE: ./src/components/popup/VideoPopup.js



const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        src: videoID,
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const { 0: video , 1: setVideo  } = (0,external_react_.useState)(false);
    const { 0: videoValue , 1: setVideoValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("www.youtube.com") || a.href.includes("vimeo.com") || a.href.includes("soundcloud.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const popup_VideoPopup = (VideoPopup);

// EXTERNAL MODULE: ./src/utilits.js
var utilits = __webpack_require__(1917);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layout/Footer.js


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        id: "footer",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "left_part",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "Copyright 2022 — Designed & Developed by",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://themeforest.net/user/frenify/portfolio",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "Frenify"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "right_part",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/policy",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "creative_link",
                                            children: "Privacy Policy"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/cookies",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "creative_link",
                                            children: "Cookies"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/terms-conditions",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "creative_link",
                                            children: "Terms & Conditions"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const layout_Footer = (Footer);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/redux/actions/type.js
var type = __webpack_require__(2506);
;// CONCATENATED MODULE: ./src/redux/actions/siteSettings.js

const navigationToggle = (value)=>(dispatch)=>{
        dispatch({
            type: type/* NAVIGATION */.k2,
            payload: value
        });
    };
const walletToggle = (value)=>(dispatch)=>{
        dispatch({
            type: type/* WALLET */.Ag,
            payload: value
        });
    };
const searchToggle = (value)=>(dispatch)=>{
        dispatch({
            type: type/* SEARCH */.mo,
            payload: value
        });
    };

;// CONCATENATED MODULE: ./src/layout/Header.js






const Header = ({ walletToggle , navigationToggle  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* stickyNav */.h4)();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        id: "header",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "header",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header_in",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "trigger_logo",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Web3athon"
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "nav",
                        style: {
                            opacity: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#home",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "creative_link",
                                            children: "Home"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#about",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "creative_link",
                                            children: "About"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#collection",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "creative_link",
                                            children: "Collection"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#news",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "creative_link",
                                            children: "Blog"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#contact",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "creative_link",
                                            children: "Contact"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "wallet",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            onClick: (e)=>{
                                e.preventDefault();
                                walletToggle(true);
                            },
                            className: "metaportal_fn_button wallet_opener",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Connect To Wallet"
                            })
                        })
                    })
                ]
            })
        })
    });
};
const mapStateToProps = (state)=>({});
/* harmony default export */ const layout_Header = ((0,external_react_redux_.connect)(mapStateToProps, {
    walletToggle: walletToggle,
    navigationToggle: navigationToggle
})(Header));

;// CONCATENATED MODULE: ./src/layout/MobileNavigation.js





const MobileNavigation = ({ walletToggle , navigationToggle  })=>{
    const { 0: toggle , 1: setToggle  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "metaportal_fn_mobnav",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mob_top",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "social_trigger",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "trigger",
                                    onClick: ()=>navigationToggle(true),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "social",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.facebook.com/",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "Fb."
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.twitter.com/",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "Tw."
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.instagram.com/",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "In."
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.linkedin.com/",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "Ln."
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "wallet",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "metaportal_fn_button wallet_opener",
                                onClick: ()=>walletToggle(true),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Wallet"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mob_mid",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/img/logo.png",
                                        alt: ""
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `trigger ${toggle ? "active" : ""}`,
                            onClick: ()=>setToggle(!toggle),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mob_bot",
                    style: {
                        display: toggle ? "block" : "none"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "creative_link",
                                    href: "#home",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "creative_link",
                                    href: "#about",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "creative_link",
                                    href: "#collection",
                                    children: "Collection"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "creative_link",
                                    href: "#news",
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "creative_link",
                                    href: "#contact",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
const MobileNavigation_mapStateToProps = (state)=>({
        navigation: state.site.navigation
    });
/* harmony default export */ const layout_MobileNavigation = ((0,external_react_redux_.connect)(MobileNavigation_mapStateToProps, {
    walletToggle: walletToggle,
    navigationToggle: navigationToggle
})(MobileNavigation));

;// CONCATENATED MODULE: ./src/layout/Navigation.js





const Navigation = ({ navigation , navigationToggle  })=>{
    const { 0: subMenu , 1: setSubMenu  } = (0,external_react_.useState)(null);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>navigationToggle(false),
                className: `metaportal_fn_leftnav_closer ${navigation ? "active" : ""}`
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `metaportal_fn_leftnav ${navigation ? "active" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        className: "fn__closer",
                        onClick: ()=>navigationToggle(false),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "navbox",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "list_holder",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "metaportal_fn_items",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://opensea.io/",
                                                        target: "_blank",
                                                        rel: "noreferrer"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/market/opensea.png",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text",
                                                        children: "Opensea"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://discord.com/",
                                                        target: "_blank",
                                                        rel: "noreferrer"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/market/discord.png",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text",
                                                        children: "Discord"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "nav_holder",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/svg/down.svg",
                                            alt: "",
                                            className: "fn__svg"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        style: {
                                            transform: `translateX(${subMenu !== null ? "-100" : "0"}%)`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            setSubMenu("home");
                                                        },
                                                        className: `${subMenu == "home" ? "active" : ""}`,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "creative_link",
                                                            children: [
                                                                "Home",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/svg/down.svg",
                                                                    alt: "",
                                                                    className: "fn__svg"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "sub-menu",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    className: "prev",
                                                                    onClick: ()=>setSubMenu(null),
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: "creative_link",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/svg/down.svg",
                                                                                alt: "",
                                                                                className: "fn__svg"
                                                                            }),
                                                                            "Home"
                                                                        ]
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        onClick: ()=>navigationToggle(false),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "creative_link",
                                                                            children: "#1 3D Carousel"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/index-2",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        onClick: ()=>navigationToggle(false),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "creative_link",
                                                                            children: "#2 Bended Carousel"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/index-3",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        onClick: ()=>navigationToggle(false),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "creative_link",
                                                                            children: "#3 Video Background"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/index-4",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        onClick: ()=>navigationToggle(false),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "creative_link",
                                                                            children: "#4 Water Effect"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/index-5",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        onClick: ()=>navigationToggle(false),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "creative_link",
                                                                            children: "#5 Simple Carousel"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/index-6",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        onClick: ()=>navigationToggle(false),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "creative_link",
                                                                            children: "#6 Fullscreen Slider"
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/nft/1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onClick: ()=>navigationToggle(false),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "creative_link",
                                                            children: "Mint Page"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/collection",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onClick: ()=>navigationToggle(false),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "creative_link",
                                                            children: "Collection"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            setSubMenu("pages");
                                                        },
                                                        className: `${subMenu == "pages" ? "active" : ""}`,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "creative_link",
                                                            children: [
                                                                "Pages",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/svg/down.svg",
                                                                    alt: "",
                                                                    className: "fn__svg"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "sub-menu",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    className: "prev",
                                                                    onClick: ()=>setSubMenu(null),
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: "creative_link",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/svg/down.svg",
                                                                                alt: "",
                                                                                className: "fn__svg"
                                                                            }),
                                                                            "Pages"
                                                                        ]
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/coming-soon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        onClick: ()=>navigationToggle(false),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "creative_link",
                                                                            children: "Coming Soon"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/404",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        onClick: ()=>navigationToggle(false),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "creative_link",
                                                                            children: "404 Page"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/protected",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        onClick: ()=>navigationToggle(false),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "creative_link",
                                                                            children: "Protected Page"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/no-results",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        onClick: ()=>navigationToggle(false),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "creative_link",
                                                                            children: "Search No Results"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/cookies",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        onClick: ()=>navigationToggle(false),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "creative_link",
                                                                            children: "Cookies"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/policy",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        onClick: ()=>navigationToggle(false),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "creative_link",
                                                                            children: "Privacy Policy"
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/terms-conditions",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        onClick: ()=>navigationToggle(false),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "creative_link",
                                                                            children: "Terms & Conditions"
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/blog",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onClick: ()=>navigationToggle(false),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "creative_link",
                                                            children: "Blog"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/blog-single",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onClick: ()=>navigationToggle(false),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "creative_link",
                                                            children: "Blog Single"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "info_holder",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "copyright",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "Copyright 2022 - Designed & Developed by",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://themeforest.net/user/codeefly/portfolio",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "CodeeFly"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "social_icons",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/svg/social/twitter-1.svg",
                                                            alt: "",
                                                            className: "fn__svg"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/svg/social/facebook-1.svg",
                                                            alt: "",
                                                            className: "fn__svg"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/svg/social/instagram-1.svg",
                                                            alt: "",
                                                            className: "fn__svg"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/svg/social/pinterest-1.svg",
                                                            alt: "",
                                                            className: "fn__svg"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/svg/social/behance-1.svg",
                                                            alt: "",
                                                            className: "fn__svg"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const Navigation_mapStateToProps = (state)=>({
        navigation: state.site.navigation
    });
/* harmony default export */ const layout_Navigation = ((0,external_react_redux_.connect)(Navigation_mapStateToProps, {
    navigationToggle: navigationToggle
})(Navigation));

;// CONCATENATED MODULE: ./src/layout/PreLoader.js

const PreLoader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "metaportal_fn_preloader",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "loading-container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "loading",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "l1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "l2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "l3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "l4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const layout_PreLoader = (PreLoader);

;// CONCATENATED MODULE: ./src/layout/ScrollTop.js



const ScrollTop = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* scrollTop */.SM)();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "#",
        className: "metaportal_fn_totop",
        style: {
            height: "183px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
            className: "totop_inner",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "icon",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/svg/down.svg",
                        alt: "",
                        className: "fn__svg"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text",
                    children: "Scroll To Top"
                })
            ]
        })
    });
};
/* harmony default export */ const layout_ScrollTop = (ScrollTop);

;// CONCATENATED MODULE: ./src/layout/Searchbox.js




const Searchbox = ({ searchToggle , search  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `metaportal_fn_search_closer ${search ? "active" : ""}`,
                onClick: ()=>searchToggle(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `metaportal_fn_searchbox ${search ? "active" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container small",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "searchbox",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                placeholder: "Search here..."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/svg/loupe.svg",
                                    alt: "",
                                    className: "fn__svg"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
const Searchbox_mapStateToProps = (state)=>({
        search: state.site.search
    });
/* harmony default export */ const layout_Searchbox = ((0,external_react_redux_.connect)(Searchbox_mapStateToProps, {
    searchToggle: searchToggle
})(Searchbox));

;// CONCATENATED MODULE: ./src/layout/SearchButton.js



const SearchButton = ({ searchToggle  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "#",
        className: "metaportal_fn_search hold",
        onClick: (e)=>{
            e.preventDefault();
            searchToggle(true);
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "icon",
            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/svg/loupe.svg",
                alt: "",
                className: "fn__svg"
            })
        })
    });
};
/* harmony default export */ const layout_SearchButton = ((0,external_react_redux_.connect)(null, {
    searchToggle: searchToggle
})(SearchButton));

;// CONCATENATED MODULE: ./src/layout/Social.js

const Social = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "social",
        className: "hold",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "social",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    className: "title",
                    children: "Follow Us:"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.facebook.com/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Fb."
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.twitter.com/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Tw."
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.instagram.com/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "In."
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.linkedin.com/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Ln."
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Social = (Social);

;// CONCATENATED MODULE: ./src/layout/WalletPopUp.js




const WalletPopUp = ({ walletToggle , wallet  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `metaportal_fn_wallet_closer ${wallet ? "active" : ""}`,
                onClick: ()=>walletToggle(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `metaportal_fn_walletbox ${wallet ? "active" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        className: "fn__closer",
                        onClick: ()=>walletToggle(false),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "walletbox",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "title_holder",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Connect Wallet"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Connect with one of our available wallet providers or create a new one."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "list_holder",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "metaportal_fn_items",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/wallet/metamask.png",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text",
                                                        children: "Metamask"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/wallet/coinbase.png",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text",
                                                        children: "Coinbase"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/wallet/walletconnect.png",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text",
                                                        children: "WalletConnect"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/wallet/venly.png",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text",
                                                        children: "Venly"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const WalletPopUp_mapStateToProps = (state)=>({
        wallet: state.site.wallet
    });
/* harmony default export */ const layout_WalletPopUp = ((0,external_react_redux_.connect)(WalletPopUp_mapStateToProps, {
    walletToggle: walletToggle
})(WalletPopUp));

;// CONCATENATED MODULE: ./src/layout/Layout.js
















const Layout = ({ children , pageTitle  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* holdSection */.Is)();
        (0,utilits/* imgToSVG */.zW)();
        (0,utilits/* dataBgImg */.sO)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                    children: [
                        "MetaPortal | ",
                        pageTitle
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(popup_ImageView, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(popup_VideoPopup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_PreLoader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Navigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Searchbox, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_WalletPopUp, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "metaportal_fn_main",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileNavigation, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "metaportal_fn_content",
                        children: [
                            children,
                            /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Social, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_ScrollTop, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_SearchButton, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


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

/***/ 1917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$g": () => (/* binding */ heroSlider2),
/* harmony export */   "Is": () => (/* binding */ holdSection),
/* harmony export */   "SM": () => (/* binding */ scrollTop),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "sO": () => (/* binding */ dataBgImg),
/* harmony export */   "zW": () => (/* binding */ imgToSVG)
/* harmony export */ });
const imgToSVG = ()=>{
    document.querySelectorAll("img.fn__svg").forEach((el)=>{
        const imgID = el.getAttribute("id");
        const imgClass = el.getAttribute("class");
        const imgURL = el.getAttribute("src");
        fetch(imgURL).then((data)=>data.text()).then((response)=>{
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response, "text/html");
            let svg = xmlDoc.querySelector("svg");
            setTimeout(()=>{
                if (svg !== null) {
                    if (typeof imgID !== "undefined") {
                        svg.setAttribute("id", imgID);
                    }
                    if (typeof imgClass !== "undefined") {
                        svg.setAttribute("class", imgClass + " replaced-svg");
                    }
                    svg.removeAttribute("xmlns:a");
                    el.parentNode && el.parentNode.replaceChild(svg, el);
                }
            }, 500);
        });
    });
};
// Data image
const dataBgImg = ()=>{
    let d = document.querySelectorAll("[data-bg-img]");
    for(let i = 0; i < d.length; i++){
        const element = d[i];
        element.style.backgroundImage = `url(${element.getAttribute("data-bg-img")})`;
    }
};
// Header
const stickyNav = ()=>{
    const header = document.querySelector(".header");
    window.addEventListener("scroll", ()=>{
        let offset = window.scrollY;
        if (offset > 10) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });
};
// Hold
const holdSection = ()=>{
    const social = document.querySelector("#social");
    const metaportal_fn_search = document.querySelector(".metaportal_fn_search");
    window.addEventListener("scroll", ()=>{
        let offset = window.scrollY;
        if (offset < 2000) {
            metaportal_fn_search.classList.add("hold");
            social.classList.add("hold");
        } else {
            social.classList.remove("hold");
            metaportal_fn_search.classList.remove("hold");
        }
    });
};
// scroll to top
const scrollTop = ()=>{
    const body = document.querySelector("body");
    window.addEventListener("scroll", ()=>{
        let offset = window.scrollY;
        if (offset > 300) {
            body.classList.add("totop-active");
        } else {
            body.classList.remove("totop-active");
        }
    });
};
const heroSlider2 = ()=>{
    const flow_calc = (element)=>{
        let w = element.clientWidth, initial_width = element.getAttribute("data-initial-width"), ratio = element.getAttribute("data-ratio"), padding = 20;
        padding *= 2;
        let width = (w - padding) / 2 > initial_width ? initial_width : (w - padding) / 2, height = width * ratio + padding, ul = element.getElementsByTagName("ul")[0], children_ = ul.getElementsByTagName("li");
        ul.style.height = `${height}px`;
        for(let i = 0; i < children_.length; i++){
            const children = children_[i], img = children.getElementsByTagName("img")[0];
            img.style.width = `${width}px`;
            img.style.height = `${height}px`;
            children.style.left = `50%`;
            children.style.transform = `scale(0)`;
        }
        let current_left = w / 2 - width / 2, next1_left = current_left + width / 2.5, next2_left = next1_left + width / 2.5, next3_left = next2_left + width / 2.5, prev1_left = current_left - width / 2.5, prev2_left = prev1_left - width / 2.5, prev3_left = prev1_left - width / 2.5;
        let current = ul.getElementsByClassName("current")[0], next1 = ul.getElementsByClassName("next1")[0], next2 = ul.getElementsByClassName("next2")[0], prev1 = ul.getElementsByClassName("prev1")[0], prev2 = ul.getElementsByClassName("prev2")[0];
        current.style.left = current_left + "px";
        current.style.top = 0;
        current.style.transform = "scale(1) translateZ(0) rotate(0)";
        next1.style.left = next1_left + "px";
        next1.style.top = `90px`;
        next1.style.transform = "scale(1) translateZ(0) rotate(15deg)";
        next2.style.left = next2_left + "px";
        next2.style.top = `240px`;
        next2.style.transform = "scale(1) translateZ(0) rotate(30deg)";
        prev1.style.left = prev1_left + "px";
        prev1.style.top = `30px`;
        prev1.style.transform = "scale(1) translateZ(0) rotate(-15deg)";
        prev2.style.left = prev2_left + "px";
        prev2.style.top = `240px`;
        prev2.style.transform = "scale(1) translateZ(0) rotate(-30deg)";
    };
    const floww_start_autoplay = (element)=>{
        let length = element.getElementsByTagName("li").length;
        let i = 0;
        const interval = setInterval(()=>{
            i = i === length ? 0 : i + 1;
            floww_change_slide(i, element);
        }, 5000);
        return ()=>clearInterval(interval);
    };
    const floww_change_slide = (index, element)=>{
        let ul = element.getElementsByTagName("ul")[0], children_ = ul.getElementsByTagName("li"), length = children_.length;
        index = (index + length) % length;
        let el = children_[indexNumber(index, length)];
        if (!el.classList.contains("current")) {
            for(let i = 0; i < children_.length; i++){
                const children = children_[i];
                children.classList.remove("current", "next1", "next2", "prev1", "prev2", "next3", "prev3");
            }
            el.classList.add("current");
            let next1_index = (index + 1) % length;
            let next2_index = (index + 2) % length;
            let next3_index = (index + 3) % length;
            let prev1_index = (index - 1 + length) % length;
            let prev2_index = (index - 2 + length) % length;
            let prev3_index = (index - 3 + length) % length;
            children_[indexNumber(next1_index, length)].classList.add("next1");
            children_[indexNumber(next2_index, length)].classList.add("next2");
            children_[indexNumber(prev1_index, length)].classList.add("prev1");
            children_[indexNumber(prev2_index, length)].classList.add("prev2");
            if (length > 6) {
                children_[indexNumber(next3_index, length)].classList.add("next3");
                children_[indexNumber(prev3_index, length)].classList.add("prev3");
            }
            floww_calc_call(element);
        }
    };
    const floww_calc_call = (element)=>{
        if (typeof element === "undefined") {
            document.getElementByClassName("frenify_cards_gallery").each(function() {
                element = this;
                flow_calc(element);
            });
        } else {
            flow_calc(element);
        }
    };
    const indexNumber = (index, length)=>{
        return index == 0 ? length - 1 : index - 1;
    };
    const frenify_cards_gallery = document.querySelectorAll(".frenify_cards_gallery");
    frenify_cards_gallery.forEach((element, i)=>{
        floww_change_slide(i, element);
        floww_start_autoplay(element);
    });
};


/***/ })

};
;