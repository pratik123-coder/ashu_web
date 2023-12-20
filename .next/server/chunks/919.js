"use strict";
exports.id = 919;
exports.ids = [919];
exports.modules = {

/***/ 456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(259);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Cursor = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_utilits__WEBPACK_IMPORTED_MODULE_1__/* .customCursor */ ._h)();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "mouse-cursor cursor-outer"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "mouse-cursor cursor-inner"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cursor);

/***/ }),

/***/ 141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(259);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const PreLoader = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_utilits__WEBPACK_IMPORTED_MODULE_1__/* .preloader */ .xg)();
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    id: "preloader",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "loader_line"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreLoader);

/***/ }),

/***/ 259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OE": () => (/* binding */ wowJsAnimation),
/* harmony export */   "_h": () => (/* binding */ customCursor),
/* harmony export */   "xg": () => (/* binding */ preloader),
/* harmony export */   "jd": () => (/* binding */ aTagClick),
/* harmony export */   "H8": () => (/* binding */ activeSkillProgress),
/* harmony export */   "CC": () => (/* binding */ dataImage),
/* harmony export */   "Ht": () => (/* binding */ scroll_),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "SM": () => (/* binding */ scrollTop),
/* harmony export */   "A6": () => (/* binding */ fatchData),
/* harmony export */   "gl": () => (/* binding */ portfolioHover)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);


const preloader_ = () => {
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
  let preloader = document.getElementById("preloader");

  if (preloader) {
    if (!isMobile) {
      setTimeout(function () {
        preloader.classList.add("preloaded");
      }, 800);
      setTimeout(function () {
        preloader.remove();
      }, 2000);
    } else {
      preloader.remove();
    }
  }
};

const wowJsAnimation = () => {
  setTimeout(() => {
    if (false) {}

    new WOW.WOW().init();
  }, 500);
};
const customCursor = () => {
  var myCursor = document.querySelectorAll(".mouse-cursor"),
      hamburger = document.querySelector(".hamburger"),
      kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
      pointer = document.querySelector(".cursor-pointer"),
      e = document.querySelector(".cursor-inner"),
      t = document.querySelector(".cursor-outer");

  function mouseEvent(element) {
    react_dom__WEBPACK_IMPORTED_MODULE_0___default().findDOMNode(element).addEventListener("mouseenter", function () {
      e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
    });
    react_dom__WEBPACK_IMPORTED_MODULE_0___default().findDOMNode(element).addEventListener("mouseleave", function () {
      e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
    });
  }

  if (myCursor.length) {
    if (document.body) {
      let n,
          i = 0,
          o = !1;
      window.onmousemove = function (s) {
        // console.log(document.querySelector(this));
        o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
      }, document.body.addEventListener("mouseenter", // "a,.kura_tm_topbar .trigger, .cursor-pointer",
      function () {
        let a = document.querySelectorAll("a");
        e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

        for (let i = 0; i < a.length; i++) {
          const element = a[i];
          mouseEvent(element);
        }

        hamburger && mouseEvent(hamburger);
        kura_tm_topbar && mouseEvent(kura_tm_topbar);
        pointer && mouseEvent(pointer);
      }), e.style.visibility = "visible", t.style.visibility = "visible";
    }
  }
};
const preloader = () => {
  preloader_();
  setTimeout(() => {
    document.querySelector("body").classList.add("opened");
  }, 3000);
};
const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");

  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i];
    react_dom__WEBPACK_IMPORTED_MODULE_0___default().findDOMNode(a).addEventListener("click", e => {
      e.preventDefault();
    });
  }
};
const activeSkillProgress = () => {
  const progress_inner = document.querySelectorAll(".skillsInner___"),
        triggerBottom = window.innerHeight / 5 * 5;
  progress_inner.forEach(box => {
    const boxTop = box.getBoundingClientRect().top,
          boxElement = box.getElementsByClassName("bar"),
          label = box.getElementsByClassName("label"),
          number = box.getElementsByClassName("number"),
          boxItem = boxElement[0],
          pWidth = box.getAttribute("data-value"),
          pColor = box.getAttribute("data-color");

    if (boxTop < triggerBottom) {
      boxItem.classList.add("open");
      label[0].classList.add("opened");
      number[0].style.right = `${100 - pWidth}%`;
      boxItem.getElementsByClassName("bar_in")[0].style.width = `${pWidth}%`;
      boxItem.getElementsByClassName("bar_in")[0].style.backgroundColor = pColor;
    } else {
      boxItem.classList.remove("open");
      label[0].classList.remove("opened");
      number[0].style.right = `${120}%`;
    }
  });
}; // Data image

const dataImage = () => {
  let d = document.querySelectorAll("[data-img-url");

  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    element.style.backgroundImage = `url(${element.getAttribute("data-img-url")})`;
  }
};
const scroll_ = () => {
  const sections = document.querySelectorAll(".dizme_tm_section");
  const navLi = document.querySelectorAll(".anchor_nav li");
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach(li => {
    li.classList.remove("current");

    if (li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`) {
      li.classList.add("current");
    }
  });
};
const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".dizme_tm_header");
  stickys.forEach(sticky => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add("animate");
      } else {
        sticky.classList.remove("animate");
      }
    }
  });
};
const scrollTop = () => {
  var bar = document.querySelector(".progressbar");
  var line = document.querySelector(".progressbar .line");
  var documentHeight = document.documentElement.scrollHeight;
  var windowHeight = window.innerHeight;
  var winScroll = window.scrollY;
  var value = winScroll / (documentHeight - windowHeight) * 100;
  var position = value;

  if (winScroll > 100) {
    bar.classList.add("animate");
    line.style.height = position + "%";
  } else {
    bar.classList.remove("animate");
  }
};
const fatchData = async url => {
  const res = await fetch(`${url}`);
  const data = await res.json();
  return data;
};
const portfolioHover = () => {
  const dizme_tm_portfolio_animation_wrap = document.querySelectorAll(".dizme_tm_portfolio_animation_wrap"),
        dizme_tm_portfolio_titles = document.querySelector(".dizme_tm_portfolio_titles");
  dizme_tm_portfolio_animation_wrap.forEach(element => {
    element.addEventListener("mousemove", () => {
      let title = element.getAttribute("data-title"),
          category = element.getAttribute("data-category");

      if (title) {
        dizme_tm_portfolio_titles.classList.add("visible");
        dizme_tm_portfolio_titles.innerHTML = title + '<span class="work__cat">' + category + "</span>";
      }

      document.addEventListener("mousemove", e => {
        dizme_tm_portfolio_titles.style.left = `${e.clientX - 10}px`;
        dizme_tm_portfolio_titles.style.top = `${e.clientY + 25}px`;
      });
    });
    element.addEventListener("mouseleave", () => {
      dizme_tm_portfolio_titles.classList.remove("visible");
    });
  });
};

/***/ })

};
;