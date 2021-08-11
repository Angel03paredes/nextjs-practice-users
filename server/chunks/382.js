exports.id = 382;
exports.ids = [382];
exports.modules = {

/***/ 971:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TamplateNav; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/Navigation.js





const Navigation = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: "navbar navbar-expand-sm navbar-light bg-light",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container-fluid",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "navbar-brand",
            children: "Next Js"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "navbar-toggler",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarNav",
          "aria-controls": "navbarNav",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "navbar-toggler-icon"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "collapse navbar-collapse",
          id: "navbarNav",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "navbar-nav",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link active",
                  children: "Inicio"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/about",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link active",
                  children: "About"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/services",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "nav-link active",
                  children: "Services"
                })
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ var components_Navigation = (Navigation);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/TamplateNav.js






const TemplateNav = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: " Next js "
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Navigation, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container p-4",
      children: props.children
    })]
  });
};

/* harmony default export */ var TamplateNav = (TemplateNav);

/***/ }),

/***/ 453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;