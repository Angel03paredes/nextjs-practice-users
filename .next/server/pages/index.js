(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\angel\\OneDrive\\Daw\\Programas\\javascript\\nextjs\\next-pract\\components\\Users.js";


const Users = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Users"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), props.users.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "list-group",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "list-group-item list-group-item-action d-flex justify-content-between align-items-center",
        onClick: e => next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/users/[id]", `/users/${item.id}`),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: item.avatar,
          className: "img-fluid",
          style: {
            borderRadius: "50%"
          },
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: item.email
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: [item.first_name, " ", item.last_name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, undefined)
    }, item.id, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, undefined))]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TamplateNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TamplateNav */ "./components/TamplateNav.js");
/* harmony import */ var _components_Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Users */ "./components/Users.js");

var _jsxFileName = "C:\\Users\\angel\\OneDrive\\Daw\\Programas\\javascript\\nextjs\\next-pract\\pages\\index.js";



const Index = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TamplateNav__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Users__WEBPACK_IMPORTED_MODULE_2__.default, {
      users: props.users,
      children: " "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }, undefined);
};

Index.getInitialProps = async ctx => {
  const resp = await fetch('https://reqres.in/api/users');
  const data = await resp.json();
  return {
    users: data.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_bootswatch_dist_cyborg_bootstrap_min_css-node_modules_next_link_js","components_TamplateNav_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByYWN0Ly4vY29tcG9uZW50cy9Vc2Vycy5qcyIsIndlYnBhY2s6Ly9uZXh0LXByYWN0Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dC1wcmFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9uZXh0LXByYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL25leHQtcHJhY3QvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9uZXh0LXByYWN0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXh0LXByYWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LXByYWN0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9uZXh0LXByYWN0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiVXNlcnMiLCJwcm9wcyIsInVzZXJzIiwibWFwIiwiaXRlbSIsImUiLCJSb3V0ZXIiLCJpZCIsImF2YXRhciIsImJvcmRlclJhZGl1cyIsImVtYWlsIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsIkluZGV4IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzcCIsImZldGNoIiwiZGF0YSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLEtBQUssR0FBSUMsS0FBRCxJQUFXO0FBQ3ZCLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFR0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEdBQVosQ0FBaUJDLElBQUQsaUJBQ2Y7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQywwRkFBZjtBQUEwRyxlQUFPLEVBQUVDLENBQUMsSUFBRUMsdURBQUEsQ0FBWSxhQUFaLEVBQTJCLFVBQVNGLElBQUksQ0FBQ0csRUFBRyxFQUE1QyxDQUF0SDtBQUFBLGdDQUNFO0FBQ0UsYUFBRyxFQUFFSCxJQUFJLENBQUNJLE1BRFo7QUFFRSxtQkFBUyxFQUFDLFdBRlo7QUFHRSxlQUFLLEVBQUU7QUFBRUMsd0JBQVksRUFBRTtBQUFoQixXQUhUO0FBSUUsYUFBRyxFQUFDO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU9FO0FBQUEsa0NBQ0U7QUFBQSxzQkFBSUwsSUFBSSxDQUFDTTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBLHVCQUNHTixJQUFJLENBQUNPLFVBRFIsT0FDcUJQLElBQUksQ0FBQ1EsU0FEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFpQ1IsSUFBSSxDQUFDRyxFQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELENBRkg7QUFBQSxrQkFERjtBQXVCRCxDQXhCRDs7QUEwQkEsK0RBQWVQLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7O0FBRUEsTUFBTWEsS0FBSyxHQUFJWixLQUFELElBQVc7QUFFdkIsc0JBRUksOERBQUMsNERBQUQ7QUFBQSwyQkFHSSw4REFBQyxzREFBRDtBQUFPLFdBQUssRUFBRUEsS0FBSyxDQUFDQyxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQVVELENBWkQ7O0FBZUFXLEtBQUssQ0FBQ0MsZUFBTixHQUF3QixNQUFNQyxHQUFOLElBQWE7QUFDakMsUUFBTUMsSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FBQyw2QkFBRCxDQUF4QjtBQUNBLFFBQU1DLElBQUksR0FBRyxNQUFNRixJQUFJLENBQUNHLElBQUwsRUFBbkI7QUFDQSxTQUFPO0FBQUNqQixTQUFLLEVBQUdnQixJQUFJLENBQUNBO0FBQWQsR0FBUDtBQUNILENBSkQ7O0FBT0EsK0RBQWVMLEtBQWYsRTs7Ozs7Ozs7Ozs7QUN6QkEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgVXNlcnMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxPlVzZXJzPC9oMT5cclxuICAgICAge3Byb3BzLnVzZXJzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIiBvbkNsaWNrPXtlPT5Sb3V0ZXIucHVzaChcIi91c2Vycy9baWRdXCIsYC91c2Vycy8ke2l0ZW0uaWR9YCl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtpdGVtLmF2YXRhcn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1MCVcIiB9fVxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHA+e2l0ZW0uZW1haWx9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uZmlyc3RfbmFtZX0ge2l0ZW0ubGFzdF9uYW1lfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XHJcbiIsImltcG9ydCBUZW1wbGF0ZU5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9UYW1wbGF0ZU5hdlwiO1xyXG5pbXBvcnQgVXNlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlcnNcIlxyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcclxuICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgICAgPFRlbXBsYXRlTmF2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8VXNlcnMgdXNlcnM9e3Byb3BzLnVzZXJzfT4gPC9Vc2Vycz5cclxuICAgICAgICAgXHJcbiAgICAgIDwvVGVtcGxhdGVOYXY+XHJcbiAgICBcclxuICApO1xyXG59O1xyXG5cclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jKGN0eCk9PiB7XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmVxcmVzLmluL2FwaS91c2VycycpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4gICAgcmV0dXJuIHt1c2VycyA6IGRhdGEuZGF0YX07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=