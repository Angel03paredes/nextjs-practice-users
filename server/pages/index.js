(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 202:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: ./components/TamplateNav.js + 1 modules
var TamplateNav = __webpack_require__(971);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: ./components/Users.js





const Users = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Users"
    }), props.users.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "list-group",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "list-group-item list-group-item-action d-flex justify-content-between align-items-center",
        onClick: e => router_default().push("/users/[id]", `/users/${item.id}`),
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: item.avatar,
          className: "img-fluid",
          style: {
            borderRadius: "50%"
          },
          alt: ""
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: item.email
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [item.first_name, " ", item.last_name]
          })]
        })]
      })
    }, item.id))]
  });
};

/* harmony default export */ var components_Users = (Users);
;// CONCATENATED MODULE: ./pages/index.js




const Index = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(TamplateNav/* default */.Z, {
    children: /*#__PURE__*/jsx_runtime_.jsx(components_Users, {
      users: props.users,
      children: " "
    })
  });
};

Index.getInitialProps = async ctx => {
  const resp = await fetch('https://reqres.in/api/users');
  const data = await resp.json();
  return {
    users: data.data
  };
};

/* harmony default export */ var pages = (Index);

/***/ }),

/***/ 417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,382], function() { return __webpack_exec__(202); });
module.exports = __webpack_exports__;

})();