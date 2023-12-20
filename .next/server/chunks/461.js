"use strict";
exports.id = 461;
exports.ids = [461];
exports.modules = {

/***/ 461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(349);
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(259);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const Portfolio = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_utilits__WEBPACK_IMPORTED_MODULE_2__/* .dataImage */ .CC)();
    (0,_utilits__WEBPACK_IMPORTED_MODULE_2__/* .portfolioHover */ .gl)();
  }, []); // Isotope

  const isotope = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const {
    0: filterKey,
    1: setFilterKey
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("*");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setTimeout(() => {
      isotope.current = new (isotope_layout__WEBPACK_IMPORTED_MODULE_0___default())(".gallery_zoom", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item"
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false
        }
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isotope.current) {
      filterKey === "*" ? isotope.current.arrange({
        filter: `*`
      }) : isotope.current.arrange({
        filter: `.${filterKey}`
      });
    }
  }, [filterKey]);

  const handleFilterKeyChange = key => () => {
    setFilterKey(key);
  };

  const activeBtn = value => value === filterKey ? "current" : "";

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: "dizme_tm_section",
    id: "portfolio",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "dizme_tm_portfolio",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "dizme_tm_main_title",
          "data-align": "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
            className: "h3-tag-in-contact",
            children: "My Works"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {})]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "portfolio_filter"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "dizme_tm_portfolio_titles"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "portfolio_list wow fadeInUp",
          "data-wow-duration": "1s",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
            className: "gallery_zoom grid",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
              className: "youtube grid-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Mockup Shape",
                  "data-category": "Youtube",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                    href: "https://www.behance.net/embed/project/186294201?ilo0=1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      src: "/img/thumbs/42-56.jpg",
                      alt: "image",
                      height: 712,
                      width: 559
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/1.jpg"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                    children: "Mockup Shape"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    children: "Youtube"
                  })]
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
              className: "vimeo grid-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Ave Bottle",
                  "data-category": "Vimeo",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                    className: "popup-vimeo",
                    href: "https://player.vimeo.com/video/337293658?autoplay=1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      src: "/img/thumbs/42-34.jpg",
                      alt: "image",
                      height: 632,
                      width: 870
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/3.png"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                    children: "Ave Bottle"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    children: "Vimeo"
                  })]
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
              className: "soundcloud grid-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Magic Art",
                  "data-category": "Soundcloud",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                    className: "soundcloude_link mfp-iframe audio",
                    href: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      src: "/img/thumbs/42-56.jpg",
                      alt: "image",
                      height: 700,
                      width: 427
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/2.png"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                    children: "Magic Art"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    children: "Soundcloud"
                  })]
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
              className: "popup grid-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Scott Felix",
                  "data-category": "Popup",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                    className: "zoom",
                    href: "img/portfolio/5.png",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      src: "/img/thumbs/42-56.jpg",
                      alt: "image",
                      height: 980,
                      width: 735
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/5.png"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                    children: "Blue Lemon"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    children: "Popup"
                  })]
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
              className: "popup grid-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Art Stone",
                  "data-category": "Popup",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                    className: "zoom",
                    href: "img/portfolio/4.jpg",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      src: "/img/thumbs/42-34.jpg",
                      alt: "image",
                      height: 472,
                      width: 700
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/4.png"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                    children: "Art Stone"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    children: "Popup"
                  })]
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
              className: "detail grid-item",
              onClick: () => setPopup(true),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Global Evolution",
                  "data-category": "Detail",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                    className: "portfolio_popup",
                    href: "#",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      src: "/img/thumbs/42-34.jpg",
                      alt: "image",
                      height: 749,
                      width: 1332
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/6.png"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                    children: "Global Evolution"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    children: "Detail"
                  })]
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
              className: "youtube grid-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Mockup Shape",
                  "data-category": "Youtube",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                    href: "https://www.behance.net/embed/project/186294201?ilo0=1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      src: "/img/thumbs/42-56.jpg",
                      alt: "image",
                      height: 712,
                      width: 559
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/7.png"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                    children: "Mockup Shape"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    children: "Youtube"
                  })]
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
              className: "vimeo grid-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Ave Bottle",
                  "data-category": "Vimeo",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                    className: "popup-vimeo",
                    href: "https://player.vimeo.com/video/337293658?autoplay=1",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      src: "/img/thumbs/42-34.jpg",
                      alt: "image",
                      height: 427,
                      width: 700
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/8.png"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                    children: "Ave Bottle"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    children: "Vimeo"
                  })]
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
              className: "soundcloud grid-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Magic Art",
                  "data-category": "Soundcloud",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                    className: "soundcloude_link mfp-iframe audio",
                    href: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      src: "/img/thumbs/42-56.jpg",
                      alt: "image",
                      height: 870,
                      width: 632
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/9.png"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                    children: "Magic Art"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    children: "Soundcloud"
                  })]
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
              className: "popup grid-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Scott Felix",
                  "data-category": "Popup",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                    className: "zoom",
                    href: "img/portfolio/5.png",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      src: "/img/thumbs/42-56.jpg",
                      alt: "image",
                      height: 980,
                      width: 735
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/11.png"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                    children: "Blue Lemon"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    children: "Popup"
                  })]
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
              className: "popup grid-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Art Stone",
                  "data-category": "Popup",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                    className: "zoom",
                    href: "img/portfolio/4.jpg",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      src: "/img/thumbs/42-34.jpg",
                      alt: "image",
                      height: 472,
                      width: 700
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/10.png"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                    children: "Art Stone"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    children: "Popup"
                  })]
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
              className: "detail grid-item",
              onClick: () => setPopup(true),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "inner",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "entry dizme_tm_portfolio_animation_wrap",
                  "data-title": "Global Evolution",
                  "data-category": "Detail",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                    className: "portfolio_popup",
                    href: "#",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      src: "/img/thumbs/42-34.jpg",
                      alt: "image",
                      height: 749,
                      width: 1332
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                      className: "main",
                      "data-img-url": "img/portfolio/12.png"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mobile_title",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                    children: "Global Evolution"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    children: "Detail"
                  })]
                })]
              })
            })]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "brush_1 wow zoomIn",
        "data-wow-duration": "1s",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
          src: "/img/brushes/portfolio/1.png",
          alt: "image",
          layout: "fill"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "brush_2 wow fadeInRight",
        "data-wow-duration": "1s",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
          src: "/img/brushes/portfolio/2.png",
          alt: "image",
          layout: "fill"
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);

/***/ })

};
;